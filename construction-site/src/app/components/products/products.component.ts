import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
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
  ]

}
