import { Component, HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GeneralSettings, account } from 'src/app/pages';
import { Langs } from 'src/app/pages/select-lang/lang';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.page.html',
  styleUrls: ['./bootcamp.page.scss'],
})
export class BootcampPage {
  isMobile: boolean = false;
  isDropdownOtherEvents = false;
  isDropdownOpenForYou = false;
  isDropdownOther = false;
  account = account;
  settings = GeneralSettings;
  languages = Langs;

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
  ionViewDidEnter() {
    this.isDropdownOtherEvents = false;
    this.isDropdownOpenForYou = false;
    this.isDropdownOther = false;
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

