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
import { Component, Input, Output, ElementRef, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
//import * as $ from 'jquery';
import { injectStyles } from 'shadow-dom-inject-styles';
import { AutoCompleteComponent } from 'ionic2-auto-complete-ng5';
import { GoodsService } from "../../services/goods/goods.service";
import { GoodsControlService } from "../../services/goods/goods-control.service";
import { CompleteTestService } from '../../services/goods/complete-test.service';
import { GoodsNameSelectService } from "../../services/goods/goods-name-select.service";
var DynamicGoodsComponent = /** @class */ (function () {
    function DynamicGoodsComponent(gcs, completeTestService, el, gs, alertController, loadingController, gns) {
        this.gcs = gcs;
        this.completeTestService = completeTestService;
        this.el = el;
        this.gs = gs;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.gns = gns;
        this.goods = [];
        this.goodsChange = new EventEmitter();
        this.formChange = new EventEmitter();
    }
    DynamicGoodsComponent.prototype.ngOnInit = function () {
        this.form = this.gcs.toFormGroup(this.goods);
        this.formChange.emit(this.form);
    };
    DynamicGoodsComponent.prototype.ngAfterViewChecked = function () {
        var goods_quantity = 0;
        for (var s = 0; s < this.goods.length; s++) {
            goods_quantity += this.goods[s].nutritions.length;
        }
        if (goods_quantity == 0)
            return;
        if (this.el.nativeElement.querySelectorAll('.auto-complete.item-input').length == goods_quantity) {
            var toolbar_1 = this.el.nativeElement.querySelectorAll('.auto-complete.item-input');
            var styles = '.item-native {overflow: visible !important;}';
            injectStyles(toolbar_1[goods_quantity - 1], '.item-native', styles);
            //const toolbar2 = (this.el.nativeElement.querySelectorAll('.auto-complete.item-input') as HTMLElement);
            //const styles2 = '.item-accordion {line-height: 38px;padding-top: 0;padding-bottom: 0;transition: 0.09s all linear;}';
            //injectStyles(toolbar2[goods_quantity-1], '.item-accordion', styles2);
        }
    };
    DynamicGoodsComponent.prototype.addNutrition = function (i) {
        this.goods[i].nutritions.push(this.gs.addNutrition());
        this.form = this.gcs.toFormGroup(this.goods);
        this.formChange.emit(this.form);
    };
    DynamicGoodsComponent.prototype.clickNutrition = function (i, idx) {
        this.presentLoading();
        //console.log(aaa)
        var _this = this;
        this.gns.getResults().subscribe(function (result) {
            //console.log(result);
            setTimeout(function () {
                _this.loadingController.dismiss('loading');
                _this.showSelectAlert(result.list, i, idx);
            }, 500);
        });
        //this.completeTestService.getResults('a');
    };
    DynamicGoodsComponent.prototype.deleteGoods = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '刪除確認',
                            mode: 'md',
                            message: '您確定要刪除營養品' + String(i + 1) + '嗎?',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: '確定',
                                    handler: function () {
                                        _this_1.goods.splice(i, 1);
                                        _this_1.form = _this_1.gcs.toFormGroup(_this_1.goods);
                                        _this_1.formChange.emit(_this_1.form);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DynamicGoodsComponent.prototype.deleteNutrition = function (i, idx) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '刪除確認',
                            mode: 'md',
                            message: '您確定要刪除成分' + String(idx + 1) + '嗎?',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: '確定',
                                    handler: function () {
                                        _this_1.goods[i].nutritions.splice(idx, 1);
                                        _this_1.form = _this_1.gcs.toFormGroup(_this_1.goods);
                                        _this_1.formChange.emit(_this_1.form);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DynamicGoodsComponent.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            id: 'loading',
                            message: '連接伺服器中',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: 
                    //this.loadingModal = loading;
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DynamicGoodsComponent.prototype.showSelectAlert = function (list, i, idx) {
        return __awaiter(this, void 0, void 0, function () {
            var _this, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(list);
                        _this = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: '選擇成分',
                                mode: 'ios',
                                inputs: list,
                                buttons: [
                                    {
                                        text: '取消',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            //console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: '確定',
                                        handler: function (response) {
                                            //console.log(response);
                                            var count = _this.countViewChildren(i, idx);
                                            _this.searchbars.toArray()[count].setValue(response);
                                            _this.goods[i].nutritions[idx].name = response;
                                            _this.form = _this.gcs.toFormGroup(_this.goods);
                                            _this.formChange.emit(_this.form);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DynamicGoodsComponent.prototype.numberCheckAmount = function (event, i) {
        if (event.target.value === null)
            event.target.value = '';
        var amount;
        if (event.target.value.replace(/\D/g, '') == '') {
            amount = null;
        }
        else {
            amount = parseFloat(event.target.value.replace(/[^0-9.]/g, ''));
        }
        this.goods[i].amount = amount;
        this.form = this.gcs.toFormGroup(this.goods);
        this.formChange.emit(this.form);
    };
    DynamicGoodsComponent.prototype.numberCheckDose = function (event, i, idx) {
        if (event.target.value === null)
            event.target.value = '';
        var dose;
        if (event.target.value.replace(/\D/g, '') == '') {
            dose = null;
        }
        else {
            dose = parseFloat(event.target.value.replace(/[^0-9.]/g, ''));
        }
        var name = this.goods[i].nutritions[idx].name;
        var clone = JSON.parse(JSON.stringify(this.goods[i].nutritions[idx].detail));
        this.goods[i].nutritions[idx].detail = clone;
        this.goods[i].nutritions[idx].detail.dose = dose;
        this.form = this.gcs.toFormGroup(this.goods);
        this.formChange.emit(this.form);
    };
    DynamicGoodsComponent.prototype.updateGoodsName = function (i, event) {
        this.goods[i].name = event.target.value;
        this.form = this.gcs.toFormGroup(this.goods);
        this.formChange.emit(this.form);
    };
    DynamicGoodsComponent.prototype.updateNutritionName = function (i, idx) {
        var count = this.countViewChildren(i, idx);
        this.goods[i].nutritions[idx].name = this.searchbars.toArray()[count].getValue();
        this.form = this.gcs.toFormGroup(this.goods);
        this.formChange.emit(this.form);
        //console.log(this.form)
    };
    DynamicGoodsComponent.prototype.updateDose = function (i, idx, event) {
        this.goods[i].nutritions[idx].detail.dose = event.target.value;
        this.form = this.gcs.toFormGroup(this.goods);
        this.formChange.emit(this.form);
        //console.log(this.form)
    };
    DynamicGoodsComponent.prototype.updateUnit = function (i, idx, event) {
        this.goods[i].nutritions[idx].detail.unit = event.target.value;
        this.form = this.gcs.toFormGroup(this.goods);
        this.formChange.emit(this.form);
    };
    DynamicGoodsComponent.prototype.test = function () {
        alert('aaa');
    };
    DynamicGoodsComponent.prototype.countViewChildren = function (i, idx) {
        var count = 0;
        for (var s = 0; s < i; s++) {
            count += this.goods[s].nutritions.length;
        }
        count += idx;
        return count;
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], DynamicGoodsComponent.prototype, "goods", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DynamicGoodsComponent.prototype, "goodsChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormGroup)
    ], DynamicGoodsComponent.prototype, "form", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DynamicGoodsComponent.prototype, "formChange", void 0);
    __decorate([
        ViewChildren(AutoCompleteComponent),
        __metadata("design:type", QueryList)
    ], DynamicGoodsComponent.prototype, "searchbars", void 0);
    DynamicGoodsComponent = __decorate([
        Component({
            selector: 'app-dynamic-goods',
            templateUrl: './dynamic-goods.component.html',
            styleUrls: ['./dynamic-goods.component.scss'],
        }),
        __metadata("design:paramtypes", [GoodsControlService, CompleteTestService, ElementRef, GoodsService, AlertController, LoadingController, GoodsNameSelectService])
    ], DynamicGoodsComponent);
    return DynamicGoodsComponent;
}());
export { DynamicGoodsComponent };
//# sourceMappingURL=dynamic-goods.component.js.map