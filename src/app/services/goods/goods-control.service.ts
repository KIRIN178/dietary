import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Goods } from "../../class/goods";

@Injectable({
  providedIn: 'root'
})
export class GoodsControlService {

  constructor() { }
    
  toFormGroup(goods: Goods[]) {
      let group: any = {};
      goods.forEach((item, i) => {
          group[item.name] = new FormControl(item.name);
      });
      //group['test'] = new FormControl('testing');
      
      return new FormGroup(group);
  }
}
