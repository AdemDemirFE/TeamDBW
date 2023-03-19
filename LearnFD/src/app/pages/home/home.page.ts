import { Component, HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GeneralSettings, account } from 'src/app/pages';
import { Langs } from 'src/app/pages/select-lang/lang';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isMobile: boolean = false;
  account = account;
  settings = GeneralSettings;
  languages = Langs;

  isDropdownOtherEvents = false;
  isDropdownOpenForYou = false;
  isDropdownOther = false;

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
      delay: 500,
      disableOnInteraction: false,
      loop: true,
      
    }
  };
  slideOpts4 = {
    initialSlide: 0,
    slidesPerView: 2,
    speed: 2000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      loop: true,
    }
  };
  sliderThree: any;

  constructor(
    public translate: TranslateService,
    private navCtrl: NavController
    ) {
    this.checkScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  
  onResize(event: any) {
    this.checkScreenSize();
  }

  changeLanguage(code: any) {
    this.translate.setDefaultLang(code);
    this.translate.use(code);
    localStorage.setItem('selectLang', code);
    this.settings.dil = code;
    if (code === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }

  checkScreenSize() {
    this.isMobile = (screen.width < 900) ? true : false;
  }

  otherEventClicked() {

  }
}
