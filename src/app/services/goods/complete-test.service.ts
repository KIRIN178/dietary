import { Injectable, ViewChild, isDevMode } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { map } from 'rxjs/operators';

import { AutoCompleteService } from 'ionic2-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class CompleteTestService implements AutoCompleteService {
    
  constructor(private http:Http, private httpClient:HttpClient) {
    
  }
    
  getResults(keyword:string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const httpOptions = {
        headers: headers,
        withCredentials: false,
    };
    let url;
    if(isDevMode()) {
        url = 'http://127.0.0.1';
    } else {
        url = 'https://pharmacist.dietary.cc';
    }
    return this.http.post(url + "/dietary/ajax_autocomplete_ingredient_client",'keyword='+keyword,httpOptions)
      .pipe(
        map(
            result =>
            {
              return result.json()
                .filter(item => true )
    }));
  }
}
