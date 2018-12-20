import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public param = new BehaviorSubject(null);
  currentParam = this.param.asObservable();
	
  constructor() { }
	
  changeParam(data) {
	  this.param.next(data);
  }
  getParam() {
      return this.param;
  }
}
