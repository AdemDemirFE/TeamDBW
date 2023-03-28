import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralSettings, account } from 'src/app/pages';
import { Langs } from 'src/app/pages/select-lang/lang';
import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { NavController, ActionSheetController, LoadingController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Service } from 'src/providers/service/service';
import { C_Utils } from 'src/providers/utils';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

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
  activeTrainings: any = [];
  activeTrainingsTmp: any = [];
  constructor(
    public router: Router,
    private loadingController: LoadingController,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public translateService: TranslateService,
    public service: Service,
    public c_Utils: C_Utils,
    public http: HttpClient,
    private actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
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
    this.translateService.setDefaultLang(code);
    this.translateService.use(code);
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

  getTrainings() {
    this.translateService.get(['ERROR', 'PLEASE_WAIT', "USAGE"]).subscribe(async values => {
      //this.c_Utils.presentLoading(values.PLEASE_WAIT);
      var loading = await this.loadingController.create({
        message: (values.PLEASE_WAIT),
        duration: 2000
      });
      await loading.present();
      this.activeTrainings.splice(0, this.activeTrainings.length);
      //&bildirimTipi.equals=1
      this.service.query("trainings?page=0&size=10&sort=tarih,asc").subscribe((response: any) => {
        loading.dismiss();
        if (response.length > 0) {
          this.activeTrainings = response;
        } else if (response.length == 0) {
          this.c_Utils.getToast(values.ERROR.INTERNAL_SERVER_ERROR, 'middle', 4000, false, "toast-error");
        } else {
          if (response.mesaj != null && response.mesaj != undefined) {
            this.c_Utils.getToast(values.ERROR[response.mesaj], 'middle', 4000, false, "toast-error");
          } else {
            this.c_Utils.getToast(values.ERROR.INTERNAL_SERVER_ERROR, 'middle', 4000, false, "toast-error");
          }
        }
      }, (err) => {
        setTimeout(() => {
          loading.dismiss();
        }, 1000);
        this.c_Utils.getToast(values.ERROR.NOT_CONNECT_SERVER, 'middle', 4000, false, "toast-error");
      });
    });
  }
}
