import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import {injectStyles} from 'shadow-dom-inject-styles';

import { GoodsService } from "../services/goods/goods.service";
import { ShareService } from "../services/data/share.service";


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss']
})
export class SecondPage implements OnInit {
  @ViewChild('aaa', { read: ElementRef }) alert:ElementRef;
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
  

  constructor(public navCtrl: NavController, private data: ShareService, private gs: GoodsService, private el: ElementRef) {
      
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
      var obj = this;
      setTimeout(function(){
          const toolbar = (obj.el.nativeElement.querySelector('.auto-complete') as HTMLElement);
          const styles = '.item-native {overflow: visible !important;}';
          injectStyles(toolbar, '.item-native', styles);
      }, 500);
  }
  ngOnInit() {
      this.data.currentParam.subscribe(data => this.users = data);
      this.goods = this.gs.getGoods();
  }
  ngAfterViewInit() {
      
      //console.log(this.alert.nativeElement.children[1]);
      //alert('aa')
  }
  goBack() {
      this.navCtrl.navigateForward('/home');
  }
    
}
