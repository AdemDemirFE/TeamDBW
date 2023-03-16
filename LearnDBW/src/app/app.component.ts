import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  subMenuActive = false;
  subMenuOpen = false;
  constructor() {}

  toggleSubMenu() {
    this.subMenuActive = !this.subMenuActive;
    this.subMenuOpen = !this.subMenuOpen;
  }
}
