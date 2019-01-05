var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MainPage.prototype.ngOnInit = function () {
    };
    MainPage.prototype.homeNavigate = function () {
        this.navCtrl.navigateBack('/home');
    };
    MainPage = __decorate([
        Component({
            selector: 'app-main',
            templateUrl: './main.page.html',
            styleUrls: ['./main.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController])
    ], MainPage);
    return MainPage;
}());
export { MainPage };
//# sourceMappingURL=main.page.js.map