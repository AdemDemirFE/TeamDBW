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
  constructor() { 
    this.checkScreenSize();

  }
  onResize(event: any) {
    this.checkScreenSize();
  }
  ngOnInit() {
  }

  checkScreenSize() {
    this.isMobile = (screen.width < 900) ? true : false;
  }

}
