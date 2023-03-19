import { Component, HostListener,Input  } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GeneralSettings, account } from 'src/app/pages';
import { Langs } from 'src/app/pages/select-lang/lang';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent    {
  @Input() title: string | undefined;

  isMobile: boolean = false;
  account = account;
  settings = GeneralSettings;
  languages = Langs;
  isDropdownOtherEvents = false;
  isDropdownOpenForYou = false;
  isDropdownOther = false;

  constructor() { }
  checkScreenSize() {
    this.isMobile = (screen.width < 900) ? true : false;
  }


}
