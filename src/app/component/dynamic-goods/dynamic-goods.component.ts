import { Component, Input, Output, ElementRef, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AlertController } from '@ionic/angular';

//import * as $ from 'jquery';
import { injectStyles } from 'shadow-dom-inject-styles';
import { AutoCompleteComponent } from 'ionic2-auto-complete';

import { Goods } from "../../class/goods";
import { GoodsService } from "../../services/goods/goods.service";
import { GoodsControlService } from "../../services/goods/goods-control.service";
import { CompleteTestService } from '../../services/goods/complete-test.service';

@Component({
  selector: 'app-dynamic-goods',
  templateUrl: './dynamic-goods.component.html',
  styleUrls: ['./dynamic-goods.component.scss'],
})
export class DynamicGoodsComponent {
  @Input() goods: Goods[] = [];
  @Output() goodsChange = new EventEmitter<Goods[]>();
  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter<FormGroup>();
  @ViewChildren(AutoCompleteComponent) searchbars: QueryList<AutoCompleteComponent>;

  constructor(private gcs: GoodsControlService, public completeTestService: CompleteTestService, private el: ElementRef, private gs: GoodsService, private alertController:AlertController) {
      
  }
    
  ngOnInit() {
    this.form = this.gcs.toFormGroup(this.goods);
    this.formChange.emit(this.form);
  }
  ngAfterViewChecked() {
      let goods_quantity = 0;
      for(let s = 0;s < this.goods.length;s++) {
          goods_quantity += this.goods[s].nutritions.length;
      }
      if(goods_quantity == 0)
          return;
      if(this.el.nativeElement.querySelectorAll('.auto-complete.item-input').length == goods_quantity) {
          const toolbar = (this.el.nativeElement.querySelectorAll('.auto-complete.item-input') as HTMLElement);
          const styles = '.item-native {overflow: visible !important;}';
          injectStyles(toolbar[goods_quantity-1], '.item-native', styles);
          //const toolbar2 = (this.el.nativeElement.querySelectorAll('.auto-complete.item-input') as HTMLElement);
          //const styles2 = '.item-accordion {line-height: 38px;padding-top: 0;padding-bottom: 0;transition: 0.09s all linear;}';
          //injectStyles(toolbar2[goods_quantity-1], '.item-accordion', styles2);
      }
  }
  addNutrition(i) {
      this.goods[i].nutritions.push(this.gs.addNutrition());
      this.form = this.gcs.toFormGroup(this.goods);
      this.formChange.emit(this.form);
  }
  async deleteGoods(i) {
      
    const alert = await this.alertController.create({
      header: '刪除確認',
      message: '您確定要刪除營養品'+String(i+1)+'嗎?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '確定',
          handler: () => {
            this.goods.splice(i,1);
            this.form = this.gcs.toFormGroup(this.goods);
            this.formChange.emit(this.form);
          }
        }
      ]
    });

    await alert.present();
  }
  async deleteNutrition(i, idx) {
      
    const alert = await this.alertController.create({
      header: '刪除確認',
      message: '您確定要刪除成分'+String(idx+1)+'嗎?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '確定',
          handler: () => {
            this.goods[i].nutritions.splice(idx,1);
            this.form = this.gcs.toFormGroup(this.goods);
            this.formChange.emit(this.form);
          }
        }
      ]
    });

    await alert.present();
  }
  numberCheckAmount(event, i) {
      if(event.target.value === null)
          event.target.value = '';
      let amount;
      if(event.target.value.replace(/\D/g,'') == '') {
          amount = null;
      } else {
          amount = parseFloat(event.target.value.replace(/[^0-9.]/g,''));
      }
      this.goods[i].amount = amount;
      this.form = this.gcs.toFormGroup(this.goods);
      this.formChange.emit(this.form);
  }
  numberCheckDose(event, i, idx) {
      if(event.target.value === null)
          event.target.value = '';
      let dose;
      if(event.target.value.replace(/\D/g,'') == '') {
          dose = null;
      } else {
          dose = parseFloat(event.target.value.replace(/[^0-9.]/g,''));
      }
      let name = this.goods[i].nutritions[idx].name;
      let clone = JSON.parse(JSON.stringify(this.goods[i].nutritions[idx].detail));
      this.goods[i].nutritions[idx].detail = clone;
      this.goods[i].nutritions[idx].detail.dose = dose;
      this.form = this.gcs.toFormGroup(this.goods);
      this.formChange.emit(this.form);
  }
  updateGoodsName(i, event) {
      this.goods[i].name = event.target.value;
      this.form = this.gcs.toFormGroup(this.goods);
      this.formChange.emit(this.form);
  }
  updateNutritionName(i, idx) {
      let count = this.countViewChildren(i, idx);
      this.goods[i].nutritions[idx].name = this.searchbars.toArray()[count].getValue();
      this.form = this.gcs.toFormGroup(this.goods);
      this.formChange.emit(this.form);
      //console.log(this.form)
  }
  updateDose(i, idx, event) {
      this.goods[i].nutritions[idx].detail.dose = event.target.value;
      this.form = this.gcs.toFormGroup(this.goods);
      this.formChange.emit(this.form);
      //console.log(this.form)
  }
  updateUnit(i, idx, event) {
      this.goods[i].nutritions[idx].detail.unit = event.target.value;
      this.form = this.gcs.toFormGroup(this.goods);
      this.formChange.emit(this.form);
  }
  private countViewChildren(i, idx) {
      let count = 0;
      for(let s=0;s<i;s++) {
          count += this.goods[s].nutritions.length;
      }
      count += idx;
      return count;
  }
}
