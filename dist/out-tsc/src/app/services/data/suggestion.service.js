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
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
var SuggestionService = /** @class */ (function () {
    function SuggestionService(http) {
        this.http = http;
    }
    SuggestionService.prototype.getSuggestion = function (data) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var httpOptions = {
            headers: headers,
            withCredentials: false,
        };
        //console.log(data);
        //console.log(JSON.stringify(data["user"]));
        //console.log(encodeURIComponent(JSON.stringify(data["user"])));
        return this.http.post("http://127.0.0.1/dietary/ajax_get_suggestion_result", 'goods=' + encodeURIComponent(JSON.stringify(data["goods"])) + '&user=' + encodeURIComponent(JSON.stringify(data["user"])), httpOptions)
            .pipe(map(function (result) {
            return result.json();
        }));
    };
    SuggestionService.prototype.formData = function (myFormData) {
        return Object.keys(myFormData).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(myFormData[key]);
        }).join('&');
    };
    SuggestionService.ngInjectableDef = i0.defineInjectable({ factory: function SuggestionService_Factory() { return new SuggestionService(i0.inject(i1.Http)); }, token: SuggestionService, providedIn: "root" });
    SuggestionService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Http])
    ], SuggestionService);
    return SuggestionService;
}());
export { SuggestionService };
//# sourceMappingURL=suggestion.service.js.map