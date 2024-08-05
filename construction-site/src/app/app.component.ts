import { Component} from '@angular/core';
import { HeaderFooterService } from './services/header-footer.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'construction-site';
  constructor(public headerFooterService: HeaderFooterService,  private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.root.firstChild;
        if (currentRoute) {
          const data = currentRoute.snapshot.data;
          this.headerFooterService.showHeaderFooter = !data['hideHeaderFooter'];
        }
      }
    });
  }

  onActivate(event: any) {
    window.scroll(0, 0);
  }
}
