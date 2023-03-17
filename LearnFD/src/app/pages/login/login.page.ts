import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username : any ;
  password : any ;
  rememberMe : any ;
  showPassword : boolean = false;
  
  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }
  changeLangue() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        type: 2,
      }
    };
    this.navCtrl.navigateForward("/select-lang", navigationExtras);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  forgetPassword() {

  }
  doLogin() {

  }
  privicyPolicy() {

  }

}
