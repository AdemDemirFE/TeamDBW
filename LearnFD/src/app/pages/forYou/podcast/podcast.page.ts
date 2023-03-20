import { Component, HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GeneralSettings, account } from 'src/app/pages';
import { Langs } from 'src/app/pages/select-lang/lang';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.page.html',
  styleUrls: ['./podcast.page.scss'],
})
export class PodcastPage {

  isMobile: boolean = false;
  isDropdownOtherEvents = false;
  isDropdownOpenForYou = false;
  isDropdownOther = false;
  account = account;
  settings = GeneralSettings;
  languages = Langs;
  
  constructor() { 
    this.checkScreenSize();

  }
  ionViewDidEnter() {
    this.isDropdownOtherEvents = false;
    this.isDropdownOpenForYou = false;
    this.isDropdownOther = false;
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