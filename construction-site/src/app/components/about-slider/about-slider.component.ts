import { Component } from '@angular/core';

@Component({
  selector: 'app-about-slider',
  templateUrl: './about-slider.component.html',
  styleUrls: ['./about-slider.component.scss']
})
export class AboutSliderComponent {

  contents = [
    {
      image:'../../../assets/images/about-us/about1.jpg',
      title:'Build Gurus Construction',
      p1:'Build Gurus Construction Pvt Ltd in Nepal for precision, passion, and quality in every project. Explore our protfolio and witness the future of construction',
      p2:"Trust Build Gurus for reliable, transparent service and turn your vision into reality today.",
    },
    {
      image:'../../../assets/images/about-us/about2.jpg',
      title:'Our mission',
      p1:'1. Deliver top-quality construction projects.',
      p2:'2. Prioritize client satisfaction.',
      p3:'3. Embrace innovation and sustainability.',
      p4:'4. Ensure safety and accountability.',
      p5:'5. Make a positive impact in our communities.'
    },
    {
      image:'../../../assets/images/about-us/about3.jpg',
      title:'Our Vission',
      p1:'At Build Gurus, our vision is clear: to lead the construction industry with unwavering commitment to excellence and integrity.',
      p2:' At Build Gurus, we see a future where construction is not just about erecting buildings but about building communities and shaping environments that inspire and endure.',
    }
  ]

}
