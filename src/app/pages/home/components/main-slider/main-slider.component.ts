import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  cartSlideLeft,
  cartSlideRight,
} from 'src/app/shared/animations/toggle-fade';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css'],
  animations: [cartSlideLeft, cartSlideRight],
})
export class MainSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      768: {
        items: 1,
        nav: false,
        dots: true
      },
      992: {
        items: 1,
        nav: true,
        dots: true
      }
    },
    nav: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    smartSpeed: 1000
  };

  // Optional: Track current slide for custom indicators
  activeSlides: any;

  // Optional: Get current slide data
  getPassedData(data: any) {
    this.activeSlides = data;
  }
}
