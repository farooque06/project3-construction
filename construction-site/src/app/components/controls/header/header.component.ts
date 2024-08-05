import { Component, inject, TemplateRef } from '@angular/core';
import { NgbModal, NgbOffcanvas,NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from '../../auth/signup/signup.component';
import { ForgetPasswordComponent } from '../../auth/forget-password/forget-password.component';
import { LoginComponent } from '../../auth/login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private offcanvasService = inject(NgbOffcanvas);
  open(content: TemplateRef<any>) {
		this.offcanvasService.open(content);
	}
  constructor(private modalService:NgbModal){}

  signupAction(){
    console.log("signup test");
    this.modalService.open(SignupComponent, { 
      size: 'lg',
      centered: true
     });
  }

  forgetPasswordAction(){
    console.log("forget password test");
    this.modalService.open(ForgetPasswordComponent,{
      size: 'lg',
      centered: true
    })
  }
  
  loginAction(){
    console.log("Login test");
    this.modalService.open(LoginComponent,{
      size: 'lg',
      centered: true
    })
  }
}
