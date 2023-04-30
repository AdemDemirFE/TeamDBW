import { Component, OnInit } from '@angular/core';
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
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  isMobile: boolean = false;
  isDropdownOtherEvents = false;
  isDropdownOpenForYou = false;
  isDropdownOther = false;
  account = account;
  settings = GeneralSettings;
  
  deviceData = {
    data: [
      { name: 'PEEP', value: 120, color:"#E29DC6" },
      { name: 'Temp', value: 52, color:"#F4F4F4" },
      { name: 'SpO2', value: 86, color:"#FA7C35" },
      { name: 'PAPd', value: 11, color:"#FC5B5B" },
      { name: 'HR', value: 29, color:"#F4F4F4" },
      { name: 'ABPd', value: 3, color:"#F5CA5A" },
      { name: 'ST-II', value: 98, color:"#F4F4F4" },
      { name: 'NBPm', value: 142, color:"#5FE3BC" },
      { name: 'nPR', value: 29, color:"#F5CA5A" },
      { name: 'MVE', value: 198, color:"#7B8DEC" },
      { name: 'ST-1', value: 26, color:"#F4F4F4" }
    ]
  };

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
  ) { }

  ngOnInit() {
  }

}
