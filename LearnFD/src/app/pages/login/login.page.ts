import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Service } from 'src/providers/service/service';
import { C_Utils } from 'src/providers/utils';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';

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
    private router: Router,
    private translate: TranslateService,
    public loadingController: LoadingController,
    private alertController: AlertController,
    public navCtrl: NavController,
    public http: HttpClient,
    public c_Utils: C_Utils,
    public service: Service,
    public modalCtrl: ModalController
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
  async privicyPolicy() {

    const modal = await this.modalCtrl.create({
      component: PrivacyPolicyPage,
      cssClass: 'custom-modal2',
      backdropDismiss: true,
      componentProps: {
        //'data': data
      }
    });
    await modal.present();
    modal.onDidDismiss().then(result => {
    })
  }

}
