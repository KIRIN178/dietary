import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AutoCompleteService } from 'ionic2-auto-complete-ng5';
export declare class CompleteTestService implements AutoCompleteService {
    private http;
    private httpClient;
    constructor(http: Http, httpClient: HttpClient);
    getResults(keyword: string): import("rxjs/internal/Observable").Observable<any>;
}
