import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { first, last, map, reduce, find, skipWhile } from 'rxjs/operators';

import { ShareService } from "../services/data/share.service";
import { SuggestionService } from "../services/data/suggestion.service";

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

    constructor(public loadingController: LoadingController, private ss: SuggestionService, private data: ShareService) {
    //this.presentLoading();
        let _this = this;
        this.data.getParam().pipe(first()).subscribe(val=>{
            _this.ss.getSuggestion(val).subscribe(response=>{
                
            });
        });
    }

    ngOnInit() {
        
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Hellooo',
        });
        return await loading.present();
    }
}
