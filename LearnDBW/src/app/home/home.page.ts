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




   //Move to Next slide
   slideNext(object:any, slideView:any) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object:any, slideView:any) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object:any, slideView:any) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object:any, slideView:any) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object:any, slideView:any) {
    slideView.isBeginning().then((istrue: any) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object:any, slideView:any) {
    slideView.isEnd().then((istrue: any) => {
      object.isEndSlide = istrue;
    });
  }



}
