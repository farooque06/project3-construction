import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ServicePageComponent } from './components/pages/service-page/service-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { DashboardComponent } from './components/admin-dashbord/dashboard/dashboard.component';
import { RouteGuardService } from './services/route-guard.service';
import { DashboardDetailsComponent } from './components/admin-dashbord/dashboard-details/dashboard-details.component';
import { ManageCategoryComponent } from './components/admin-dashbord/manage-category/manage-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'service', component: ServicePageComponent },
  { path: 'project', component: ProductPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'dashboard',
   component:DashboardComponent,
  canActivate:[RouteGuardService],
  data:{expectedRole:['admin','user'],hideHeaderFooter: true},
  children: [
    { path: '', redirectTo: 'dash-details', pathMatch: 'full' },
    { path: 'dash-details', component: DashboardDetailsComponent },
    { path: 'category', component: ManageCategoryComponent },

    // Add more child routes here as needed
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
