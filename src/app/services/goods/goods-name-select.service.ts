import { Injectable, ViewChild, isDevMode, ErrorHandler } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class GoodsNameSelectService {

    constructor(private http:HttpClient) { }
    
    getResults() {
        let url;
        if(isDevMode()) {
            url = 'http://127.0.0.1';
        } else {
            url = 'https://pharmacist.dietary.cc';
        }
        return this.http.get(url + "/dietary/ajax_autocomplete_ingredient_client_select").pipe(
      map(
        result =>
        {
          return result
        }),
      catchError((e: any) => {
          console.log(e);
          //throw new Error('Valid token not returned');
          let err = Array();
          return Observable.throw(e);
      })
        )
    }
}
