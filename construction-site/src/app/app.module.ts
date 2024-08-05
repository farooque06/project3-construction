import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './components/controls/header/header.component';
import { FooterComponent } from './components/controls/footer/footer.component';
import { NgbPaginationModule, NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutSliderComponent } from './components/about-slider/about-slider.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductsComponent } from './components/products/products.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ImageBannerComponent } from './components/controls/image-banner/image-banner.component';
import { ServicePageComponent } from './components/pages/service-page/service-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './components/auth/signup/signup.component';
import {NgxUiLoaderModule,NgxUiLoaderConfig,SPINNER,PB_DIRECTION} from 'ngx-ui-loader'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/admin-dashbord/dashboard/dashboard.component';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';
import { DasHeaderComponent } from './components/admin-dashbord/das-header/das-header.component';
import { DashboardDetailsComponent } from './components/admin-dashbord/dashboard-details/dashboard-details.component';
import { ConfirmationComponent } from './components/admin-dashbord/confirmation/confirmation.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { ManageCategoryComponent } from './components/admin-dashbord/manage-category/manage-category.component';
import { CategoryComponent } from './components/admin-dashbord/controls/category/category.component';

const ngxUiLoaderConfig:NgxUiLoaderConfig= {
  text:"Loading...",
  textColor:"#FFFFFF",
  textPosition:"center-center",
  pbColor:"red",
  bgsColor:"red",
  fgsColor:"red",
  fgsType:SPINNER.threeStrings,
  fgsSize:100,
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:5
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AboutSliderComponent,
    AboutComponent,
    ServiceComponent,
    ProductsComponent,
    BlogComponent,
    AboutPageComponent,
    ImageBannerComponent,
    ServicePageComponent,
    ProductPageComponent,
    ContactPageComponent,
    SignupComponent,
    ForgetPasswordComponent,
    LoginComponent,
    DashboardComponent,
    DasHeaderComponent,
    DashboardDetailsComponent,
    ConfirmationComponent,
    ChangePasswordComponent,
    ManageCategoryComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbCarouselModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorInterceptor,multi:true}],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
