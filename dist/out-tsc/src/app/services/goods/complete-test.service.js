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
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
import * as i2 from "@angular/common/http";
var CompleteTestService = /** @class */ (function () {
    function CompleteTestService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    CompleteTestService.prototype.getResults = function (keyword) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var httpOptions = {
            headers: headers,
            withCredentials: false,
        };
        console.log(isDevMode());
        var url;
        if (isDevMode()) {
            url = '127.0.0.1';
        }
        else {
            url = 'dietary.cc';
        }
        return this.http.post("http://" + url + "/dietary/ajax_autocomplete_ingredient_client", 'keyword=' + keyword, httpOptions)
            .pipe(map(function (result) {
            return result.json()
                .filter(function (item) { return true; });
        }));
    };
    CompleteTestService.ngInjectableDef = i0.defineInjectable({ factory: function CompleteTestService_Factory() { return new CompleteTestService(i0.inject(i1.Http), i0.inject(i2.HttpClient)); }, token: CompleteTestService, providedIn: "root" });
    CompleteTestService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Http, HttpClient])
    ], CompleteTestService);
    return CompleteTestService;
}());
export { CompleteTestService };
//# sourceMappingURL=complete-test.service.js.map