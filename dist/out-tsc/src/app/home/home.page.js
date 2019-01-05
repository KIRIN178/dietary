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
import { ShareService } from "../services/data/share.service";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, data) {
        this.navCtrl = navCtrl;
        this.data = data;
        this.users = {
            name: '',
            birthday: '',
            gender: '',
            is_pregnant: '',
            is_milk: '',
            is_remember: false
        };
        //this.minDate = new Date();
        if (localStorage.getItem('name') !== null) {
            this.users.name = localStorage.name;
            this.users.birthday = localStorage.birthday;
            this.users.gender = localStorage.gender;
            this.users.is_pregnant = localStorage.is_pregnant;
            this.users.is_milk = localStorage.is_milk;
            this.users.is_remember = true;
        }
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.test = function () {
        alert(this.users.is_remember);
    };
    HomePage.prototype.next = function () {
        if (this.users.gender == 'm') {
            this.users.is_pregnant = '';
            this.users.is_milk = '';
        }
        if (this.users.is_remember) {
            localStorage.name = this.users.name;
            localStorage.birthday = this.users.birthday;
            localStorage.gender = this.users.gender;
            localStorage.is_pregnant = this.users.is_pregnant;
            localStorage.is_milk = this.users.is_milk;
            localStorage.is_remember = this.users.is_remember;
        }
        else {
            //localStorage.removeItem('name');
            //localStorage.removeItem('is_remember');
            localStorage.clear();
        }
        var param = [];
        param["user"] = this.users;
        this.data.changeParam(param);
        this.navCtrl.navigateForward('/second');
    };
    HomePage.prototype.clickBirthday = function () {
        if (this.users.birthday == '') {
            var date = new Date();
            date.setDate(date.getDate() - 365 * 18);
            var month = '06';
            var day = '15';
            var year = date.getFullYear();
            this.default_year = year;
            this.users.birthday = [year, month, day].join('-');
            this.is_birthday_init = true;
        }
        else
            this.is_birthday_init = false;
    };
    HomePage.prototype.clickCancel = function () {
        if (this.users.birthday == this.default_year + '-06-15' && this.is_birthday_init)
            this.users.birthday = '';
    };
    HomePage = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController, ShareService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map