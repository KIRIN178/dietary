import { Injectable, ViewChild, isDevMode } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoodsNameSelectService {

    constructor(private http:Http) { }
    
    getResults() {
        let url;
        if(isDevMode()) {
            url = '127.0.0.1';
        } else {
            url = 'dietary.cc';
        }
        return this.http.get("http://" + url + "/dietary/ajax_autocomplete_ingredient_client_select").pipe(
      map(
        result =>
        {
          return result.json()
        }))
    }
}
