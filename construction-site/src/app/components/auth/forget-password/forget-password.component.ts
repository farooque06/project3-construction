import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private ngxService: NgxUiLoaderService,
    private modalService: NgbModal,
    private toster: ToastrService
  ) {}

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      ],
    });
  }

  handleSubmit() {
    if (this.forgetPasswordForm.invalid) {
      return;
    }

    this.ngxService.start();
    var formData = this.forgetPasswordForm.value;
    var data = {
      email: formData.email,
    }

    this.userService.forgetPassword(data).subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.modalService.dismissAll();
        this.responseMessage = response?.message;
        this.router.navigate(['/']);
        this.toster.success(this.responseMessage,"");
      },
      (error) => {
        this.ngxService.stop();
        if(error.error?.message){
          this.responseMessage = error.error?.message;
        }else{
          this.responseMessage= GlobalConstants.genericError;
        }
        this.toster.error(this.responseMessage,GlobalConstants.error);
      }
    );
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  get email() {
    return this.forgetPasswordForm.get('email');
  }
}
