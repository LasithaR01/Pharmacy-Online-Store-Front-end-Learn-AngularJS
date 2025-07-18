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
  // Main banner carousel options
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

  // Text slider options for health categories
  textSliderOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
        margin: 10
      },
      576: {
        items: 3,
        margin: 15
      },
      768: {
        items: 4,
        margin: 20
      },
      992: {
        items: 5,
        margin: 25
      }
    },
    smartSpeed: 500
  };

  // Health categories data
  categories = [
    'Pain Relief',
    'Cold and Flu',
    'Diabetes Care',
    'Digestive Health',
    'First Aid',
    'Skin Care',
    'Child and Baby Care',
    'Heart Health',
    'Eye and Ear Care',
    'Respiratory Health'
  ];

  // Optional: Track current slide for custom indicators
  activeSlides: any;

  // Optional: Get current slide data
  getPassedData(data: any) {
    this.activeSlides = data;
  }
}
