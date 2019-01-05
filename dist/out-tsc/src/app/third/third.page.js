var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, ElementRef } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { injectStyles } from 'shadow-dom-inject-styles';
import { ShareService } from "../services/data/share.service";
import { SuggestionService } from "../services/data/suggestion.service";
var ThirdPage = /** @class */ (function () {
    function ThirdPage(loadingController, ss, data, navCtrl, el) {
        this.loadingController = loadingController;
        this.ss = ss;
        this.data = data;
        this.navCtrl = navCtrl;
        this.el = el;
        this.name_goods = Array();
        this.name_categ = Array();
        this.name_base = Array();
        this.name_sub = Array();
        this.rowspan = Array();
        this.quantity = Array();
        this.amount = Array();
        this.unit_ingredient = Array();
        this.unit_ul = Array();
        this.rda_ai = Array();
        this.ul = Array();
        this.transfer_rda_ai = Array();
        this.transfer_ul = Array();
        this.goods_detail = Array();
        this.is_unit_correct = Array();
        this.init = null;
        this.is_init = false;
        //this.presentLoading();
        // @ts-ignore
        //if(this.navCtrl.stack.length == 0) {
        //window.location.href = "/home";
        //return;
        //}
        if (this.navCtrl.lastNavId == 1) {
            window.location.href = "/home";
            return;
        }
        var _this = this;
        this.presentLoading();
        this.data.getParam().pipe(first()).subscribe(function (val) {
            _this.ss.getSuggestion(val).subscribe(function (response) {
                //console.log(response.col);
                for (var _i = 0, _a = Object.entries(response.col); _i < _a.length; _i++) {
                    var _b = _a[_i], i = _b[0], categ = _b[1];
                    //console.log(categ.base);
                    // @ts-ignore
                    for (var _c = 0, _d = Object.entries(categ.base); _c < _d.length; _c++) {
                        var _e = _d[_c], idx = _e[0], base = _e[1];
                        //categ
                        // @ts-ignore
                        _this.name_categ.push(categ.categ_name);
                        // @ts-ignore
                        _this.rowspan.push(categ.rowspan);
                        //base
                        // @ts-ignore
                        _this.name_base.push(base.base_name);
                        // @ts-ignore
                        _this.unit_ingredient.push(base.base_unit);
                        // @ts-ignore
                        _this.rda_ai.push(base.rda_ai);
                        // @ts-ignore
                        _this.ul.push(base.ul);
                        // @ts-ignore
                        for (var _f = 0, _g = Object.entries(base.sub); _f < _g.length; _f++) {
                            var _h = _g[_f], ii = _h[0], sub = _h[1];
                            // @ts-ignore
                            _this.name_sub[sub.sub_name] = base.base_name;
                            var temp = Array();
                            temp["IU"] = null;
                            temp["mg"] = null;
                            temp["mcg"] = null;
                            // @ts-ignore
                            for (var _j = 0, _k = Object.entries(sub.rda_ai); _j < _k.length; _j++) {
                                var _l = _k[_j], index = _l[0], rr = _l[1];
                                // @ts-ignore
                                temp[index] = rr.dose;
                            }
                            // @ts-ignore
                            _this.transfer_rda_ai[sub.sub_name] = temp;
                            temp = Array();
                            temp["IU"] = null;
                            temp["mg"] = null;
                            temp["mcg"] = null;
                            // @ts-ignore
                            for (var _m = 0, _o = Object.entries(sub.ul); _m < _o.length; _m++) {
                                var _p = _o[_m], index = _p[0], rr = _p[1];
                                // @ts-ignore
                                temp[index] = rr.dose;
                            }
                            // @ts-ignore
                            _this.transfer_ul[sub.sub_name] = temp;
                        }
                    }
                }
                for (var _q = 0, _r = Object.entries(response.list); _q < _r.length; _q++) {
                    var _s = _r[_q], i = _s[0], goods = _s[1];
                    _this.quantity.push(1);
                    // @ts-ignore
                    _this.name_goods.push(goods.product_name);
                    // @ts-ignore
                    _this.amount.push(goods.amount);
                    var temp = Array();
                    // @ts-ignore
                    for (var _t = 0, _u = Object.entries(goods.ing); _t < _u.length; _t++) {
                        var _v = _u[_t], ii = _v[0], ingredient = _v[1];
                        // @ts-ignore
                        temp[ingredient.name] = Array();
                        // @ts-ignore
                        temp[ingredient.name]["dose"] = ingredient.dose;
                        // @ts-ignore
                        temp[ingredient.name]["unit"] = ingredient.unit;
                    }
                    _this.goods_detail.push(temp);
                }
                //console.log(_this.rda_ai);
                setTimeout(function () {
                    _this.loadingController.dismiss('loading');
                }, 500);
            });
        });
    }
    ThirdPage.prototype.ngOnInit = function () {
    };
    ThirdPage.prototype.ngAfterViewChecked = function () {
    };
    ThirdPage.prototype.checkUnit = function (i, c, sub) {
        //console.log(this.transfer_rda_ai[sub])
        if (this.goods_detail[c][sub]["unit"] == 'IU') {
            if (this.transfer_rda_ai[sub]["IU"] === null) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (this.transfer_rda_ai[sub]["mg"] === null && this.transfer_rda_ai[sub]["mcg"] === null) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    ThirdPage.prototype.checkUnitFinal = function (i) {
        var _this = this;
        var res = true;
        this.name_goods.forEach(function (value, c) {
            Object.keys(_this.goods_detail[c]).forEach(function (sub, index) {
                if (_this.goods_detail[c][sub]["unit"] == 'IU') {
                    if (_this.transfer_rda_ai[sub]["IU"] === null) {
                        res = false;
                        return false;
                    }
                }
                else {
                    if (_this.transfer_rda_ai[sub]["mg"] === null && _this.transfer_rda_ai[sub]["mcg"] === null) {
                        res = false;
                        return false;
                    }
                }
            });
        });
        if (res) {
            return true;
        }
        else {
            return false;
        }
    };
    ThirdPage.prototype.calColspan = function (i) {
        if (this.name_categ[i] == this.name_categ[i + 1]) {
            return 2;
        }
        else {
            return 1;
        }
    };
    ThirdPage.prototype.calc_taking_rda_ai = function (i) {
        //console.log(this.is_unit_correct[i]);
        if (!this.checkUnitFinal(i)) {
            return '';
        }
        //console.log(this.goods_detail)
        var _this = this;
        var res = 0;
        this.name_goods.forEach(function (value, c) {
            Object.keys(_this.goods_detail[c]).forEach(function (sub, index) {
                if (_this.name_base[i] == _this.name_sub[sub]) {
                    if (_this.goods_detail[c][sub]["unit"] == 'IU') {
                        res += _this.goods_detail[c][sub]["dose"] * _this.transfer_rda_ai[sub]["IU"];
                    }
                    else if (_this.goods_detail[c][sub]["unit"] == 'mg') {
                        if (_this.transfer_rda_ai[sub]["mg"] === null) {
                            res += _this.quantity[c] * _this.goods_detail[c][sub]["dose"] * 100 * _this.transfer_rda_ai[sub]["mcg"];
                        }
                        else {
                            res += _this.quantity[c] * _this.goods_detail[c][sub]["dose"] * _this.transfer_rda_ai[sub]["mg"];
                        }
                    }
                    else {
                        if (_this.transfer_rda_ai[sub]["mcg"] === null) {
                            res += _this.quantity[c] * _this.goods_detail[c][sub]["dose"] / 100 * _this.transfer_rda_ai[sub]["mg"];
                        }
                        else {
                            res += _this.quantity[c] * _this.goods_detail[c][sub]["dose"] * _this.transfer_rda_ai[sub]["mcg"];
                        }
                    }
                }
            });
        });
        return res;
    };
    ThirdPage.prototype.calc_taking_ul = function (i) {
        var _this_1 = this;
        if ((i == this.name_base.length || (i + 1) == this.name_base.length) && !this.is_init) {
            if (this.init !== null)
                clearTimeout(this.init);
            this.init = setTimeout(function () {
                _this_1.finalizeInitTemplate();
            }, 500);
        }
        if (!this.checkUnitFinal(i)) {
            return '';
        }
        var _this = this;
        //console.log(_this.transfer_ul)
        var res = 0;
        this.name_goods.forEach(function (value, c) {
            Object.keys(_this.goods_detail[c]).forEach(function (sub, index) {
                if (_this.name_base[i] == _this.name_sub[sub]) {
                    if (_this.goods_detail[c][sub]["unit"] == 'IU') {
                        res += _this.goods_detail[c][sub]["dose"] * _this.transfer_ul[sub]["IU"];
                    }
                    else if (_this.goods_detail[c][sub]["unit"] == 'mg') {
                        if (_this.transfer_ul[sub]["mg"] === null) {
                            res += _this.quantity[c] * _this.goods_detail[c][sub]["dose"] * 100 * _this.transfer_ul[sub]["mcg"];
                        }
                        else {
                            res += _this.quantity[c] * _this.goods_detail[c][sub]["dose"] * _this.transfer_ul[sub]["mg"];
                        }
                    }
                    else {
                        if (_this.transfer_ul[sub]["mcg"] === null) {
                            res += _this.quantity[c] * _this.goods_detail[c][sub]["dose"] / 100 * _this.transfer_ul[sub]["mg"];
                        }
                        else {
                            res += _this.quantity[c] * _this.goods_detail[c][sub]["dose"] * _this.transfer_ul[sub]["mcg"];
                        }
                    }
                }
            });
        });
        return res;
    };
    ThirdPage.prototype.detectOverdose = function () {
        var _this = this;
        var res = false;
        this.name_base.forEach(function (value, i) {
            if ((_this.calc_taking_rda_ai(i) > _this.rda_ai[i] && _this.rda_ai[i] !== null) || (_this.calc_taking_rda_ai(i) > _this.ul[i] && _this.ul[i] !== null)) {
                res = true;
            }
        });
        return res;
    };
    ThirdPage.prototype.detectSufficientdose = function () {
        var _this = this;
        var res = false;
        this.name_base.forEach(function (value, i) {
            if (_this.calc_taking_rda_ai(i) < _this.rda_ai[i] * 0.8 && _this.rda_ai[i] !== null) {
                res = true;
            }
        });
        return res;
    };
    ThirdPage.prototype.getTemp = function (c) {
        this.temp = Object.keys(this.goods_detail[c]);
        return false;
    };
    ThirdPage.prototype.numberCheck = function (event, i) {
        if (event.target.value === null)
            event.target.value = '';
        var amount;
        if (event.target.value.replace(/\D/g, '') == '') {
            amount = null;
        }
        else {
            amount = (event.target.value.replace(/[^0-9.]/g, ''));
        }
        var re = new RegExp(/^[0-9]+[.]?([0-9]{0,})?$/i);
        if (!re.test(amount))
            amount = 1;
        amount = parseFloat(amount);
        console.log(amount);
        if (amount == 1 && event.target.value != '1.')
            event.target.value = amount;
    };
    ThirdPage.prototype.finalizeInitTemplate = function () {
        // @ts-ignore
        var toolbar = this.el.nativeElement.querySelectorAll('ion-input');
        var styles = '.native-input {padding-left: 0 !important;}';
        var _this = this;
        //console.log(toolbar)
        // @ts-ignore
        toolbar.forEach(function (value, c) {
            injectStyles(value, '.native-input', styles);
        });
        this.is_init = true;
    };
    ThirdPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '連接伺服器中',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ThirdPage = __decorate([
        Component({
            selector: 'app-third',
            templateUrl: './third.page.html',
            styleUrls: ['./third.page.scss'],
        }),
        __metadata("design:paramtypes", [LoadingController, SuggestionService, ShareService, NavController, ElementRef])
    ], ThirdPage);
    return ThirdPage;
}());
export { ThirdPage };
//# sourceMappingURL=third.page.js.map