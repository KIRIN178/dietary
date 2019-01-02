import { Injectable, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoodsNameSelectService {

    constructor(private http:Http) { }
    
    getResults() {
        return this.http.get("http://127.0.0.1/dietary/ajax_autocomplete_ingredient_client_select").pipe(
      map(
        result =>
        {
          return result.json()
        }))
    }
}
