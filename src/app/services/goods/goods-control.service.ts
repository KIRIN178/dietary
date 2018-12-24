import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Goods } from "../../class/goods";

@Injectable({
  providedIn: 'root'
})
export class GoodsControlService {

  constructor() { }
    
  toFormGroup(goods: Goods[]) {
      let group: any = [];
      goods.forEach((item, i) => {
          group[i] = new FormControl(item.name || '', Validators.required);
          group[String(i)+'-amount'] = new FormControl(item.amount || '', Validators.required);
          item.nutritions.forEach((nutrition, idx) => {
              group[String(i) + '-' + String(idx) + '-name'] = new FormControl(nutrition.name || '', Validators.required);
              group[String(i) + '-' + String(idx) + '-dose'] = new FormControl(nutrition.detail.dose || '', Validators.required);
              group[String(i) + '-' + String(idx) + '-unit'] = new FormControl(nutrition.detail.unit || '', Validators.required);
          })
      });
      //group['test'] = new FormControl('testing');
      if(group.length == 0) {
          group[0] = new FormControl('', Validators.required);
      }
      return new FormGroup(group);
  }
}
