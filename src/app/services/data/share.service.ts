import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private param = new BehaviorSubject(null);
  currentParam = this.param.asObservable();
	
  constructor() { }
	
  changeParam(data) {
	  this.param.next(data);
  }
}
