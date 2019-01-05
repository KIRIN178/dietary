import { OnInit, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { GoodsService } from "../services/goods/goods.service";
import { GoodsControlService } from "../services/goods/goods-control.service";
import { ShareService } from "../services/data/share.service";
export declare class SecondPage implements OnInit {
    navCtrl: NavController;
    private data;
    private gs;
    private el;
    private gcs;
    loadAPI: Promise<any>;
    private users;
    goods: any[];
    form: FormGroup;
    constructor(navCtrl: NavController, data: ShareService, gs: GoodsService, el: ElementRef, gcs: GoodsControlService);
    loadScript(): void;
    addGoods(): void;
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    formChange(event: any): void;
    goBack(): void;
    goNext(): void;
}
