import { Kullanici } from 'src/models/kullanici.model';  

/**
 * Uygulama içerisindeki Dinamik Renk Tanımlarını İçerir.
 */
export let genelStyle: any = {
    //GENEL RENK START
    ANA_RENK: 'rgb(6, 136, 153)',
    ALT_RENK: 'rgb(25, 81, 88)',
    OZEL_RENK: 'rgb(6, 164, 204)',
    ZEMIN_LINEAR1: 'linear-gradient(rgb(6, 136, 153), rgb(255, 255, 255))',//Login Ekranı arka plan
    ANA_ZEMIN_RENK1: 'rgb(255, 255, 255)',
    ANA_ZEMIN_RENK2: ' rgb(198, 209, 211)',
    MENU_ZEMIN_RENK: 'rgb(184, 185, 189)',
    YAZI_RENGI: '#ffffff',
    //GENEL RENK END

};

export const appVersion = "1.0.0";

export const appCode = "Learn FD"; // 

 
export let isAndroid: boolean[] = [false];
export let isIos: boolean[] = [false];
export let isBrowser: boolean[] = [false];
export let isAndroidWebView: boolean[] = [false];
export let isIosWebView: boolean[] = [false];

//Oturum Açan Kullanıcı Bilgilerini Tutar
export const account: { kimlikNo?: string, token?: string, type?: number, username?: string, password?: string, cookie?: string, userData?: Kullanici, rememberMe?: boolean} = {
    kimlikNo: '',
    token: '',
    username: 'adem',
    cookie: '',
    password: '',
    type: 0,
    userData: {},
    rememberMe: false
};

export let GeneralSettings: { url: string,  dil: string, kurumKodu: string, kurumAdi?: string, logo?: any} = {
    url: '',// '../akgun-mobile/api'
    dil: 'tr', 
    kurumAdi: "",
    kurumKodu: '',
    logo: null, 
}