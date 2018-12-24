import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';

import { first, last, map, reduce, find, skipWhile } from 'rxjs/operators';
import { injectStyles } from 'shadow-dom-inject-styles';

import { GoodsService } from "../services/goods/goods.service";
import { GoodsControlService } from "../services/goods/goods-control.service";
import { ShareService } from "../services/data/share.service";


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss']
})
export class SecondPage implements OnInit {
  loadAPI: Promise<any>;
  private users = {
      name: '',
      birthday: '',
      gender: '',
      is_pregnant: '',
      is_milk: '',
      is_remember: ''
  };
  private goods: any[];
  private form: FormGroup;

  constructor(public navCtrl: NavController, private data: ShareService, private gs: GoodsService, private el: ElementRef, private gcs: GoodsControlService) {
      //alert(data.param["user"].name);
      
  }
  loadScript() {
      /*let node = document.createElement('script');
      node.innerHTML = "window.onload = function() {alert('aaa')}";
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);*/
  }
  addGoods() {
      this.goods.push(this.gs.addGoods());
      this.form = this.gcs.toFormGroup(this.goods);
  }
  ngOnInit() {
      this.goods = this.gs.getGoods();
      this.form = this.gcs.toFormGroup(this.goods);
      
  }
  ngAfterViewChecked() {
      //const toolbar = (this.el.nativeElement.querySelector('.test') as HTMLElement);
      //const styles = '.inner-scroll {overflow: visible !important;}';
      //injectStyles(toolbar, '.test', styles);
  }
  formChange(event) {
      this.form = event;
  }
  goBack() {
      this.navCtrl.navigateForward('/home');
  }
  goNext() {
      let _this = this;
      this.data.getParam().pipe(first()).subscribe(val=>{
          val["goods"] = this.goods;
          _this.data.changeParam(val);
          this.navCtrl.navigateForward('/third');
      })
      
  }
}
