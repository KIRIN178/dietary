var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Goods } from "../../class/goods";
import { Nutrition } from "../../class/nutrition";
import * as i0 from "@angular/core";
var GoodsService = /** @class */ (function () {
    function GoodsService() {
    }
    GoodsService.prototype.addGoods = function () {
        return new Goods({
            name: '',
            amount: null,
            nutritions: [{
                    name: '',
                    detail: {
                        dose: null,
                        unit: ''
                    }
                }],
            show: true
        });
    };
    GoodsService.prototype.addNutrition = function () {
        return new Nutrition({
            name: '',
            detail: {
                dose: null,
                unit: ''
            }
        });
    };
    GoodsService.prototype.getGoods = function () {
        return [];
        /*return [new Goods({
            name: '測試營養品',
            nutritions: [
                {name:'測試成分',dose:100,unit:'測試單位'}
            ]
        })];*/
    };
    GoodsService.ngInjectableDef = i0.defineInjectable({ factory: function GoodsService_Factory() { return new GoodsService(); }, token: GoodsService, providedIn: "root" });
    GoodsService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GoodsService);
    return GoodsService;
}());
export { GoodsService };
//# sourceMappingURL=goods.service.js.map