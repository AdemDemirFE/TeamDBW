import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Platform, LoadingController, ActionSheetController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Service } from 'src/providers/service/service';
import { C_Utils } from 'src/providers/utils';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GeneralSettings, account } from 'src/app/pages';


@Component({
  selector: 'app-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {

  isMobile: boolean = false;
  isDropdownOtherEvents = false;
  isDropdownOpenForYou = false;
  isDropdownOther = false;
  account = account;
  settings = GeneralSettings;
    constructor(
    public platform: Platform,
    public c_Utils: C_Utils,
    public service: Service,
    private modalCtrl: ModalController,
    public translateService: TranslateService,
    public loadingController: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public translate: TranslateService,
    public http: HttpClient
  ) {
    this.checkScreenSize();
   }
   @HostListener('window:resize', ['$event'])

   checkScreenSize() {
    this.isMobile = (screen.width < 900) ? true : false;
  }
  ngOnInit() {
  }

}
