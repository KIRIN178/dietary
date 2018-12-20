import { Injectable } from '@angular/core';

import { Goods } from "../../class/goods";
import { Nutrition } from "../../class/nutrition";

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  addGoods() {
      return new Goods({
          name: '',
          nutritions: [{
              name: '',
              detail: {
                  dose: null,
                  unit: ''      
          }}],
          show: true
      });
  }
  addNutrition() {
      return new Nutrition({
          name: '',
          detail: {
              dose: null,
              unit: ''
      }})
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
