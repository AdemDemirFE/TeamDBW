import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  subMenuActive: boolean = false;
  subMenuOpen: boolean = false;
  isMobile: boolean = false;
  account: boolean = false;

  constructor() {
    this.checkScreenSize();
  }

  toggleSubMenu() {
    this.subMenuActive = !this.subMenuActive;
    this.subMenuOpen = !this.subMenuOpen;
  }
  checkScreenSize() {
    this.isMobile = (screen.width < 900) ? true : false;
  }
}
