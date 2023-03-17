import { Injectable } from '@angular/core';
import { GeneralSettings } from 'src/app/pages';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { account } from 'src/app/pages';
@Injectable()
export class Service {
    public resourceUrl = GeneralSettings.url;

    constructor(private http: HttpClient) {

    }

    create(val: any, mappingName: string): Observable<any> {
        return this.http.post(this.resourceUrl + '/' + mappingName, val, {headers: {Authorization: 'Bearer '+account.token}});
    }
    update(val: any, mappingName: string): Observable<any> {
        return this.http.put(this.resourceUrl + '/' + mappingName, val, {headers: {Authorization: 'Bearer '+account.token}});
    }
    find(id: number, mappingName: string): Observable<any> {
        return this.http.get(`${this.resourceUrl + '/' + mappingName}/${id}`, {headers: {Authorization: 'Bearer '+account.token}});
    }

    query(mappingName: string, req?: any): Observable<any> {
        return this.http.get(this.resourceUrl + '/' + mappingName, {headers: {Authorization: 'Bearer '+account.token}});
    }
    download(mappingName: string, req?: any): Observable<any> {
        return this.http.get(this.resourceUrl + '/' + mappingName, { responseType: 'arraybuffer', headers: {Authorization: 'Bearer '+account.token} }, );
    }

    delete(id: number, mappingName: string): Observable<any> {
        return this.http.delete(`${this.resourceUrl + '/' + mappingName}/${id}`, { observe: 'response', responseType: 'text', headers: {Authorization: 'Bearer '+account.token} });
    }

    deletes(ids: string, mappingName: string): Observable<any> {
        return this.http.delete(`${this.resourceUrl + '/' + mappingName}/${ids}`, { observe: 'response', responseType: 'text', headers: {Authorization: 'Bearer '+account.token} });
    }
}