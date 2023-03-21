import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { account } from '../../pages';
import { C_Utils } from '../../../providers/utils';
import { Service } from 'src/providers/service/service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {


  account = account;
  user: any = null;
  idToken: any;
  username: any = "admin";
  password: any = "admin";


  constructor(
    private translate: TranslateService,
    public loadingController: LoadingController,
    private alertController: AlertController,
    public navCtrl: NavController,
    public http: HttpClient,
    public c_Utils: C_Utils,
    public service: Service,
    public modalCtrl: ModalController
  )
 { }

  ngOnInit() {
  }
  async close() {
    await this.modalCtrl.dismiss(null);
  }

}
