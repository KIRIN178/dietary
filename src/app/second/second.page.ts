import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { GoodsService } from "../services/goods/goods.service";
import { ShareService } from "../services/data/share.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss']
})
export class SecondPage implements OnInit {
  private users = {
      name: '',
      birthday: '',
      gender: '',
      is_pregnant: '',
      is_milk: '',
      is_remember: ''
  };
  private goods: any[];

  constructor(public navCtrl: NavController, private data: ShareService, private gs: GoodsService) {
      
  }
  addGoods() {
      this.goods.push(this.gs.addGoods());
      console.log(this.goods);
  }
  ngOnInit() {
      this.data.currentParam.subscribe(data => this.users = data);
      this.goods = this.gs.getGoods();
  }
  goBack() {
      this.navCtrl.navigateForward('/home');
  }
    
}
