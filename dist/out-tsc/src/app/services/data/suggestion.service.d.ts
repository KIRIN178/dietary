import { Http } from '@angular/http';
export declare class SuggestionService {
    private http;
    constructor(http: Http);
    getSuggestion(data: any): import("rxjs/internal/Observable").Observable<any>;
    formData(myFormData: any): string;
}
