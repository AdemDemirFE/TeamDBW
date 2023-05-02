import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Platform, LoadingController, ActionSheetController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Service } from 'src/providers/service/service';
import { C_Utils } from 'src/providers/utils';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GeneralSettings, account } from 'src/app/pages';
//import { Chart } from 'chart.js';

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
      { id: "chartContainer0", name: 'RR', value: 75, color:"#E29DC6" },
      { id: "chartContainer1", name: 'PEEP', value: 120, color:"#F4F4F4" },
      { id: "chartContainer2", name: 'Temp', value: 52, color:"#FA7C35" },
      { id: "chartContainer3", name: 'SpO2', value: 86, color:"#FC5B5B" },
      { id: "chartContainer4", name: 'PAPd', value: 11, color:"#F4F4F4" },
      { id: "chartContainer5", name: 'HR', value: 29, color:"#F4F4F4" },
      { id: "chartContainer6", name: 'ABPd', value: 3, color:"#F4F4F4" },
      { id: "chartContainer7", name: 'ST-II', value: 98, color:"#5FE3BC" },
      { id: "chartContainer8", name: 'NBPm', value: 142, color:"#F4F4F4" },
      { id: "chartContainer9", name: 'nPR', value: 29, color:"#7B8DEC" },
      { id: "chartContainer10", name: 'MVE', value: 198, color:"#F4F4F4" },
      { id: "chartContainer11", name: 'ST-1', value: 26, color:"#F5CA5A" }
    ]
  };

  peepData = [5000, 7000, 10000, 5500, 9000, 12000];
  tempData = [2440, 4480, 7700, 5500, 3121, 5511];
  

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

  checkScreenSize() {
    this.isMobile = (screen.width < 900) ? true : false;
  }
  
  ngOnInit() {
  }

}
