import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from  '@angular/common/http';
import { map } from 'rxjs/operators';

import { AutoCompleteService } from 'ionic2-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class CompleteTestService implements AutoCompleteService {

  constructor(private http:Http) {
    
  }
    
  getResults(keyword:string) {
    return this.http.get("https://restcountries.eu/rest/v1/name/"+keyword)
      .pipe(
        map(
            result =>
            {
              return result.json()
                .filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
        }));
  }
}
