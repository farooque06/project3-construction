import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  servicesContent = [
    {
      image:'../../../assets/images/blogs/blog1.jpg',
      title:'Guide to Buying Property in Nepal',
      content:'By Build Gurus , February 10, 20024'
    },
    {
      image:'../../../assets/images/blogs/blog2.jpg',
      title:'Emerging Trends in Nepal’s Real Estate Market',
      content:'By B&B , February 20, 20024'
    },
    {
      image:'../../../assets/images/blogs/blog3.jpg',
      title:'The Need for Sustainable Building in Nepal',
      content:'By Build Gurus , March 20, 20024'
    },
  ];

}
