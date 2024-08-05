import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  bannerImage='assets/images/bannerImage/about-banner.jpg'
  bannerTitle='About Us'
  bannerSubTitle='Welcome to Build Gurus!'
 
  progressBars: { title: string, progress: number, targetProgress: number }[] = [
    { title: 'Crafting Excellence', progress: 0, targetProgress: 100 },
    { title: 'Building Legacies', progress: 0, targetProgress: 80 },
    { title: 'Progress', progress: 0, targetProgress: 60 }
  ];
  intervalDuration: number = 50; // Interval duration in milliseconds
  constructor() { }

  ngOnInit(): void {
    this.startProgress();
  }

  startProgress() {
    const interval = setInterval(() => {
      let allReached = true; // Check if all progress values have reached their targets
      for (let i = 0; i < this.progressBars.length; i++) {
        if (this.progressBars[i].progress < this.progressBars[i].targetProgress) {
          this.progressBars[i].progress += 1; // Increment progress by 1
          allReached = false; // At least one progress is not yet reached
        }
      }
      if (allReached) {
        clearInterval(interval); // Stop interval when all progress values reach their targets
      }
    }, this.intervalDuration);
  }


}
