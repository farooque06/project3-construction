import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  bannerBg='assets/images/products/building1.jpg'
  bannerTitle='Projects'
  bannerSubTitle='Design and Build'

  productsContent = [
    {
      image:'../../../assets/images/products/building1.jpg',
      title:'AMEC TOWER',
      type:'Private commercial building'
      
    },
    {
      image:'../../../assets/images/products/building3.jpg',
      title:'KK Apartment',
      type:'Steel Structure Construction'
    },
    {
      image:'../../../assets/images/products/building2.jpg',
      title:'Kumar residence',
      type:'RCC Construction'
    },
    {
      image:'../../../assets/images/products/building1.jpg',
      title:'AMEC TOWER',
      type:'Private commercial building'
      
    },
    {
      image:'../../../assets/images/products/building3.jpg',
      title:'KK Apartment',
      type:'Steel Structure Construction'
    }
  ]
}
