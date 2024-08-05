import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  servicesContent = [
    {
      image:'../../../assets/images/services/service2.png',
      title:'Residential Construction',
      content:'From custom homes to renovations and additions, we bring expertise and craftsmanship to every residential project, ensuring your vision becomes a reality.'
    },
    {
      image:'../../../assets/images/services/service1.jpg',
      title:'Commercial Construction',
      content:'We specialize in commercial construction projects of all sizes, including office buildings, retail spaces, and hospitality establishments, delivering quality and efficiency from concept to completion.'
    },
    {
      image:'../../../assets/images/services/steel.jpg',
      title:'Steel Structure Construction',
      content:'A steel structure is a metal structure made up of structural steel* components that are interconnected to carry loads and provide the required rigidity. Since these steels are produced in a more controlled environment.'
    },
  ]

}
