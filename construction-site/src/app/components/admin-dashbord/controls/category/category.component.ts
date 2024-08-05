import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastRef, ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
onAddcategory = new EventEmitter();
onEditCategory = new EventEmitter();

@Input() data: any;
// @Input() isEdit: boolean = false;
categoryForm!:FormGroup;
dialogAction:any = "Add"
action:any = "Add";
responseMessage:any;

constructor(
  public modalService:NgbModal,
  private router:Router,
  private formBuilder:FormBuilder,
  private categoryService:CategoryService,
  private toster:ToastrService
){

  this.categoryForm = this.formBuilder.group({
    name:['',[Validators.required]],
    id:['']
  })

}


  ngOnInit(): void {

    this.categoryForm = this.formBuilder.group({
      name:['',[Validators.required]],
    })
    if(this.action === 'Edit'){
      this.dialogAction = "Edit";
      this.action = "Update";
      this.categoryForm.patchValue(this.data);
    }
  }

  handleSubmit(){
    if(this.dialogAction === "Edit"){
      this.edit()
    }else{
      this.add();
    }

  }

  add() {
    var formData = this.categoryForm.value;
    var data = {
      name: formData.name
    }
    this.categoryService.addCategory(data).subscribe((response:any)=>{
      this.modalService.dismissAll();
      this.onAddcategory.emit();
      this.responseMessage = response.message;
      this.toster.success(this.responseMessage,"Success");
    },(error:any)=>{
      this.modalService.dismissAll();
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.toster.error(this.responseMessage,GlobalConstants.error);
    })
  }

  edit(){
    var formData = this.categoryForm.value;
    var data = {
      id: this.data.id,
      name: formData.name
    }
    this.categoryService.updateCategory(data).subscribe((response:any)=>{
      console.log(data);
      this.modalService.dismissAll();
      this.onEditCategory.emit();
      this.responseMessage = response.message;
      this.toster.success(this.responseMessage,"Success");
    },(error:any)=>{
      this.modalService.dismissAll();
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      console.log(error,"error");

      this.toster.error(this.responseMessage,GlobalConstants.error);
    })
  }

}
