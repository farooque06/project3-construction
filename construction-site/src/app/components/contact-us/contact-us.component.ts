import { Component } from '@angular/core';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent{

  images=[
    {name:'../../../assets/images/Screenshot 2024-03-22 143907.png',caption:'faruk'},
    {name:'../../../assets/images/Screenshot 2024-04-02 170634.png',caption:'maruf'},
    {name:'../../../assets/images/logo/logo.png',caption:'umar'},
  ];

}
