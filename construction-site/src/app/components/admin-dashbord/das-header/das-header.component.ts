import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { jwtDecode } from 'jwt-decode';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from '../../auth/change-password/change-password.component';

@Component({
  selector: 'app-das-header',
  templateUrl: './das-header.component.html',
  styleUrls: ['./das-header.component.scss'],
})
export class DasHeaderComponent {
  private offcanvasService = inject(NgbOffcanvas);
  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content);
  }

  token: any = localStorage.getItem('token');
  tokenPayload: any;

  constructor(private modalService: NgbModal, private router: Router) {
    this.tokenPayload = jwtDecode(this.token);
    // console.log(this.tokenPayload);
  }

  logoutAction() {
    const modalRef = this.modalService.open(ConfirmationComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.message = 'Are you sure you want to log out?';

    modalRef.result.catch((reason) => {
      console.log('Dismissed with reason:', reason);
      if (reason == 'Confirm') {
        this.performLogout();
        console.log('hello');
      }
    });
  }

  performLogout() {
    console.log('Performing logout');
    localStorage.clear();
    this.router.navigate(['/']);
  }

  changePassword() {
    this.modalService.open(ChangePasswordComponent, {
      size: 'lg',
      centered: true,
    });
  }
}
