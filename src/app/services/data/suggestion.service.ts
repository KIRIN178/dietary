import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import * as $ from 'jquery';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

    constructor(private http:Http) { }

    getSuggestion(data) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const httpOptions = {
            headers: headers,
            withCredentials: false,
        };
        console.log(data);
        console.log(JSON.stringify(data["user"]));
        console.log(encodeURIComponent(JSON.stringify(data["user"])));
        return this.http.post("http://127.0.0.1/dietary/ajax_get_suggestion_result",'goods='+encodeURIComponent(JSON.stringify(data["goods"]))+'&user='+encodeURIComponent(JSON.stringify(data["user"])),httpOptions)
          .pipe(
            map(
                result =>
                {
                  return result.json()
                    .filter(item => true )
        }));
    }
    formData(myFormData){
      return Object.keys(myFormData).map(function(key){
          return encodeURIComponent(key) + '=' + encodeURIComponent(myFormData[key]);
        }).join('&');

    }
}
