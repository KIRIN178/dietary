import { Injectable } from '@angular/core';

import { Goods } from "../../class/goods";

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  addGoods() {
      return new Goods({
          name: '',
          nutritions: [{
              name: '',
              dose: 0,
              unit: ''
          }],
          show: true
      });
  }
  getGoods() {
      return [];
      /*return [new Goods({
          name: '測試營養品',
          nutritions: [
              {name:'測試成分',dose:100,unit:'測試單位'}
          ]
      })];*/
  }
}
