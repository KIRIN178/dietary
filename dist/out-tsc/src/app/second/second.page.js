var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { GoodsService } from "../services/goods/goods.service";
import { GoodsControlService } from "../services/goods/goods-control.service";
import { ShareService } from "../services/data/share.service";
var SecondPage = /** @class */ (function () {
    function SecondPage(navCtrl, data, gs, el, gcs) {
        this.navCtrl = navCtrl;
        this.data = data;
        this.gs = gs;
        this.el = el;
        this.gcs = gcs;
        this.users = {
            name: '',
            birthday: '',
            gender: '',
            is_pregnant: '',
            is_milk: '',
            is_remember: ''
        };
        //alert(data.param["user"].name);
        // @ts-ignore
        if (this.navCtrl.lastNavId == 1)
            window.location.href = "/home";
    }
    SecondPage.prototype.loadScript = function () {
        /*let node = document.createElement('script');
        node.innerHTML = "window.onload = function() {alert('aaa')}";
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);*/
    };
    SecondPage.prototype.addGoods = function () {
        this.goods.push(this.gs.addGoods());
        this.form = this.gcs.toFormGroup(this.goods);
    };
    SecondPage.prototype.ngOnInit = function () {
        this.goods = this.gs.getGoods();
        this.form = this.gcs.toFormGroup(this.goods);
    };
    SecondPage.prototype.ngAfterViewChecked = function () {
        //const toolbar = (this.el.nativeElement.querySelector('.test') as HTMLElement);
        //const styles = '.inner-scroll {overflow: visible !important;}';
        //injectStyles(toolbar, '.test', styles);
        //console.log(document.getElementsByTagName('html')[0])
        //document.getElementsByTagName('html')[0].attributes[0] = 'plt-desktop ios';
        //document.getElementsByTagName('html')[0].attributes[0].value = 'plt-desktop ios';
        //document.getElementsByTagName('html')[0].attributes[1].value = 'ios';
    };
    SecondPage.prototype.formChange = function (event) {
        this.form = event;
    };
    SecondPage.prototype.goBack = function () {
        this.navCtrl.navigateForward('/home');
    };
    SecondPage.prototype.goNext = function () {
        var _this_1 = this;
        var _this = this;
        this.data.getParam().pipe(first()).subscribe(function (val) {
            val["goods"] = _this_1.goods;
            _this.data.changeParam(val);
            _this_1.navCtrl.navigateForward('/third');
        });
    };
    SecondPage = __decorate([
        Component({
            selector: 'app-second',
            templateUrl: './second.page.html',
            styleUrls: ['./second.page.scss']
        }),
        __metadata("design:paramtypes", [NavController, ShareService, GoodsService, ElementRef, GoodsControlService])
    ], SecondPage);
    return SecondPage;
}());
export { SecondPage };
//# sourceMappingURL=second.page.js.map