import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { throwError, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent)
      console.error("Veriler Getirelemedi.", error.error.message);
    else console.error("Body Kodu:"); //
    return throwError("Hata!");
  }
  base_path = "https://fcm.googleapis.com/fcm/send";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        "key=AAAAv2vxs_0:APA91bHa0KlqUl9yr09cviAvCtVSKk-8RWsOJw7xiq4X5W0XmpDCYpV41zWXSU9zT6ZCjrapVHUC6iBTyiQWLQVIFw1KmmJP7iLdNhZRC6fRhHpu3EdG-GdMstz0YU_kB1iLPPN8G_bI",
    }),
  };

  notification(data: any): Observable<any> {
    return this.http.post<any>(this.base_path, data, this.httpOptions);
  }
}
