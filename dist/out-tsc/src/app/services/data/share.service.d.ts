import { BehaviorSubject } from 'rxjs';
export declare class ShareService {
    param: BehaviorSubject<any>;
    currentParam: import("rxjs/internal/Observable").Observable<any>;
    constructor();
    changeParam(data: any): void;
    getParam(): BehaviorSubject<any>;
}
