import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DashboardService } from 'src/app/services/dashboard.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.scss']
})
export class DashboardDetailsComponent {
  responseMessage:any;
  data:any;
  constructor(
    private dashbordService:DashboardService,
    private ngxService: NgxUiLoaderService,
    private toster:ToastrService,
  ){
    this.ngxService.start();
    this.dashboardData();
  }

  dashboardData(){
    this.dashbordService.getDashboardDetails().subscribe((response:any)=>{
      this.ngxService.stop();
      this.data=response;
    },(error:any)=>{
      this.ngxService.stop();
      console.log(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.toster.error(this.responseMessage,GlobalConstants.error);
    })
  }

}
