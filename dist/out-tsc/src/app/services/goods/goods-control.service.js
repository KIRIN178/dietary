var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
var GoodsControlService = /** @class */ (function () {
    function GoodsControlService() {
    }
    GoodsControlService.prototype.toFormGroup = function (goods) {
        var group = [];
        goods.forEach(function (item, i) {
            group[i] = new FormControl(item.name || '', Validators.required);
            group[String(i) + '-amount'] = new FormControl(item.amount || '', Validators.required);
            item.nutritions.forEach(function (nutrition, idx) {
                group[String(i) + '-' + String(idx) + '-name'] = new FormControl(nutrition.name || '', Validators.required);
                group[String(i) + '-' + String(idx) + '-dose'] = new FormControl(nutrition.detail.dose || '', Validators.required);
                group[String(i) + '-' + String(idx) + '-unit'] = new FormControl(nutrition.detail.unit || '', Validators.required);
            });
        });
        //group['test'] = new FormControl('testing');
        if (group.length == 0) {
            group[0] = new FormControl('', Validators.required);
        }
        return new FormGroup(group);
    };
    GoodsControlService.ngInjectableDef = i0.defineInjectable({ factory: function GoodsControlService_Factory() { return new GoodsControlService(); }, token: GoodsControlService, providedIn: "root" });
    GoodsControlService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GoodsControlService);
    return GoodsControlService;
}());
export { GoodsControlService };
//# sourceMappingURL=goods-control.service.js.map