import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CategoryService } from 'src/app/services/category.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { CategoryComponent } from '../controls/category/category.component';

interface Category {
  id: number; // or whatever type your ID is
  name: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss'],
})
export class ManageCategoryComponent implements OnInit {
  dataSource: Category[] = [];
  filteredDataSource: Category[] = [];
  responseMessage: any;

  constructor(
    private categoryService: CategoryService,
    private ngxService: NgxUiLoaderService,
    private modalService: NgbModal,
    private toster: ToastrService
  ) {}
  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData() {
    this.categoryService.getCategory().subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.dataSource = response;
        this.filteredDataSource = response;
      },
      (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.toster.error(this.responseMessage, GlobalConstants.error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredDataSource = this.dataSource.filter((category) =>
      category.name.toLowerCase().includes(filterValue)
    );
  }

  openModal(category?: Category) {
    // const modalRef = this.modalService.open(CategoryComponent);
    // modalRef.componentInstance.category = category;
    // modalRef.componentInstance.isEdit = !!category;

    // modalRef.result.catch((result) => {
    //   console.log(result, 'vv');

    //   if (result) {
    //     if (category) {
    //       this.updateCategory(category);
    //       console.log(category, 'edit');
    //     } else {
    //       this.addCategory(result);
    //       console.log(result,'save');
    //     }
    //   }
    //   console.log('Modal dismissed with error:', result);
    // });
  }

  addCategory(newCategory: Category) {
   
  }

  updateCategory(values: any) {
    const modalRef = this.modalService.open(CategoryComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.action =  'Edit'
    modalRef.componentInstance.data =  values;


    const sub = modalRef.componentInstance.onEditCategory.subscribe(
      (response:any)=>{
        this.tableData();
      }
    )
  }

  handleAddAction() {
    const modalRef = this.modalService.open(CategoryComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.action =  'Add'

    const sub = modalRef.componentInstance.onAddcategory.subscribe(
      (response:any)=>{
        this.tableData();
      }
    )

  }
}
