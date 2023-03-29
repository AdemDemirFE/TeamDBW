import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, Platform, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Service } from 'src/providers/service/service';
import { C_Utils } from 'src/providers/utils';
import { account, GeneralSettings } from 'src/app/pages';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sms-verification',
  templateUrl: './sms-verification.page.html',
  styleUrls: ['./sms-verification.page.scss'],
})
export class SmsVerificationPage implements OnInit {

  gonderilenSmsKodu: any = "";
  girilenSmsKodu: any = "";
  dogrulamaDurumu: boolean = false;
  constructor(
    public translateService: TranslateService,
    public c_Utils: C_Utils,
    public service: Service,
    public loadingController: LoadingController,
    public platform: Platform,
    public modalCtrl: ModalController,
    public http: HttpClient,
    public navCtrl: NavController
  ) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.close();
    }, 119000);
  }

  smsDogrula() {

    this.translateService.get(['SUCCESSFUL', 'SERVIS_MESAJ', 'ERROR']).subscribe(async values => {
      var loading = await this.loadingController.create({
        message: (values.SERVIS_MESAJ.LUTFEN_BEKLEYIN),
        cssClass: 'ion-color-loading'
      });
      await loading.present();


      let dt = this.http.post(GeneralSettings.url + "/sms-verificaiton", {
        smsKod: this.girilenSmsKodu,
        kimlikNo: this.gonderilenSmsKodu
      })
      dt.subscribe((response: any) => {
        let data = response;
        if (data.durum) {
          this.dogrulamaDurumu = true;
          this.close()
          this.c_Utils.getToast(values.SUCCESSFUL, 'top', 4000, false, "toast-success");
        } else {
          this.c_Utils.getToast2(values.SERVIS_MESAJ.SMS_KOD_HATA, 'middle', 3000, false, "toastClass", "danger");
        }

        loading.dismiss();

      },
        (error) => {
          loading.dismiss();

          this.c_Utils.getToast2(values.SERVIS_MESAJ.SERVIS_HATASI, 'top', 3000, false, "toastClass", "danger");
          console.error("randevus error ------>", JSON.stringify(error));
        });
    });
  }


  async close() {
    await this.modalCtrl.dismiss(this.dogrulamaDurumu);
  }

}
