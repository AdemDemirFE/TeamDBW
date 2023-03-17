import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralSettings, account } from './pages';
import { Langs } from './pages/select-lang/lang';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  subMenuActiveEtkinlik: boolean = false;
  subMenuOpenEtkinlik: boolean = false;

  subMenuActiveSeninIcin: boolean = false;
  subMenuOpenSeninIcin: boolean = false;

  
  subMenuActiveDiger: boolean = false;
  subMenuOpenDiger: boolean = false;


  isDropdownOtherEvents = false;
  isDropdownOpenForYou = false;
  isDropdownOther = false;
  
  isMobile: boolean = false;
  languages = Langs;
  type = 0;

  account = account;
  settings = GeneralSettings;
  constructor(
    public translate: TranslateService
  ) {
    this.checkScreenSize();
    this.initTranslate()
  }

  toggleSubMenuEtkinlikler() {
    this.subMenuActiveEtkinlik = !this.subMenuActiveEtkinlik;
    this.subMenuOpenEtkinlik = !this.subMenuOpenEtkinlik;
  }

  toggleSubMenuSeninIcin() {
    this.subMenuActiveSeninIcin = !this.subMenuActiveSeninIcin;
    this.subMenuOpenSeninIcin = !this.subMenuOpenSeninIcin;
  }
  toggleSubMenuDiger() {
    this.subMenuActiveDiger = !this.subMenuActiveDiger;
    this.subMenuOpenDiger = !this.subMenuOpenDiger;
  }
  
  checkScreenSize() {
    this.isMobile = (screen.width < 900) ? true : false;
  }

  initTranslate() {
    try {
      let dil = localStorage.getItem('selectLang');
      if (this.translate.currentLang != undefined) {
        if (this.translate.currentLang != dil) {
          if (dil == null) {
            dil = GeneralSettings.dil;
          }
          this.translate.use(dil);
          this.translate.setDefaultLang(dil);
        }
      } else {
        if (dil != null) {
          this.translate.use(dil)
          this.translate.setDefaultLang(dil);
        }
        else {
          this.translate.use(GeneralSettings.dil)
          this.translate.setDefaultLang(GeneralSettings.dil);
        }
      }
    } catch (error) {
      this.translate.use(GeneralSettings.dil)
      this.translate.setDefaultLang(GeneralSettings.dil);
    }
  }

  changeLanguage(code: any) {
    debugger;

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
}
