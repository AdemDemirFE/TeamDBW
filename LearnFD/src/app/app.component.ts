import { Component } from '@angular/core';

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

  isMobile: boolean = false;
  account: boolean = false;

  constructor() {
    this.checkScreenSize();
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
}
