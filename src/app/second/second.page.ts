import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ShareService } from "../services/data/share.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  private users = {
      name: '',
      birthday: '',
      gender: '',
      is_pregnant: '',
      is_milk: ''
  };

  constructor(public navCtrl: NavController, private data: ShareService) { }

  ngOnInit() {
     this.data.currentParam.subscribe(data => this.users = data);
  }
  goBack() {
      this.navCtrl.navigateForward('/home');
  }
    
}
