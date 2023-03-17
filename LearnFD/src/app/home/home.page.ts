import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menuOpen = false;
  isMobile: boolean = false;
  account: boolean = false;

  slideOpts1 = {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      loop: true
    }
  };
  
  slideOpts2 = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      loop: true,
      initialSlide: 1,
      speed: 600,
      slideShadows: true,
      oop: true,
      effect: 'slide',
      freeMode: true,
      freeModeSticky: false,
      slidesPerView: 'auto',
      spaceBetween: 25,
    }
  };

  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3,
    speed: 2000,
    slideShadows: true,
    oop: true,
    effect: 'slide',
    freeMode: true,
    freeModeSticky: false,
    spaceBetween: 10,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      loop: true,
      
    }
  };
  slideOpts4 = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      loop: true,
    }
  };
  sliderThree: any;

  constructor() {
    this.checkScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  onResize(event: any) {
    this.checkScreenSize();
  }

  

  checkScreenSize() {
    this.isMobile = (screen.width < 900) ? true : false;
  }

}
