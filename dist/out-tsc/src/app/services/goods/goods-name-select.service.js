var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
var GoodsNameSelectService = /** @class */ (function () {
    function GoodsNameSelectService(http) {
        this.http = http;
    }
    GoodsNameSelectService.prototype.getResults = function () {
        var url;
        console.log(isDevMode());
        if (isDevMode()) {
            url = '127.0.0.1';
        }
        else {
            url = 'dietary.cc';
        }
        return this.http.get("http://" + url + "/dietary/ajax_autocomplete_ingredient_client_select").pipe(map(function (result) {
            return result.json();
        }));
    };
    GoodsNameSelectService.ngInjectableDef = i0.defineInjectable({ factory: function GoodsNameSelectService_Factory() { return new GoodsNameSelectService(i0.inject(i1.Http)); }, token: GoodsNameSelectService, providedIn: "root" });
    GoodsNameSelectService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Http])
    ], GoodsNameSelectService);
    return GoodsNameSelectService;
}());
export { GoodsNameSelectService };
//# sourceMappingURL=goods-name-select.service.js.map