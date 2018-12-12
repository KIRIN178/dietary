import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

    constructor(public navCtrl: NavController) {
        
    }

    ngOnInit() {
    }
    
    homeNavigate() {
        this.navCtrl.navigateBack('/home');
    }
}
