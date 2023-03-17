import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menuOpen = false;
  isMobile: boolean = false;
  constructor() {
    this.checkScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  onResize(event: any) {
    this.checkScreenSize();
  }

  

  checkScreenSize() {
    this.isMobile = (screen.width < 900) ? true : false;
  }
}
