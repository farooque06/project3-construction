import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from 'jwt-decode';
import { GlobalConstants } from '../shared/global-constants';
import { HeaderFooterService } from './header-footer.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  constructor(
    private authService: AuthService,
    public router: Router,
    private toster: ToastrService,
    private headerFooterService: HeaderFooterService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoleArray: string[] = route.data['expectedRole'];

    const token = localStorage.getItem('token');
    if (!token) {
      this.handleUnauthorized();
      return false;
    }

    let tokenPaload: any;
    try {
      tokenPaload = jwtDecode(token);
    } catch (err) {
      this.handleUnauthorized();
       return false;
    }

    let checkRole = false;
    for (let i = 0; i < expectedRoleArray.length; i++) {
      if (expectedRoleArray[i] == tokenPaload.role) {
        checkRole = true;
      }
    }

    if (tokenPaload.role == 'user' || tokenPaload.role == 'admin') {
      if (this.authService.isAuthenticated() && checkRole) {
        return true;
      }
      this.toster.error(GlobalConstants.unauthoroized, GlobalConstants.error);
      this.router.navigate(['dashboard']);
      this.headerFooterService.showHeaderFooter = !route.data['hideHeaderFooter'];
      return false;
    } else {
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }
  }

  private handleUnauthorized(): void {
    localStorage.clear();
    this.toster.error(GlobalConstants.unauthoroized, GlobalConstants.error);
    this.router.navigate(['/']);
  }
}
