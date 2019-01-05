var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AutoCompleteModule } from 'ionic2-auto-complete-ng5';
import { SecondPage } from './second.page';
import { DynamicGoodsComponent } from '../component/dynamic-goods/dynamic-goods.component';
var routes = [
    {
        path: '',
        component: SecondPage
    }
];
var SecondPageModule = /** @class */ (function () {
    function SecondPageModule() {
    }
    SecondPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                AutoCompleteModule,
                HttpModule,
                HttpClientModule,
                RouterModule.forChild(routes)
            ],
            declarations: [
                SecondPage,
                DynamicGoodsComponent
            ]
        })
    ], SecondPageModule);
    return SecondPageModule;
}());
export { SecondPageModule };
//# sourceMappingURL=second.module.js.map