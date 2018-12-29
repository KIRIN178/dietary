import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { first, last, map, reduce, find, skipWhile } from 'rxjs/operators';
import { injectStyles } from 'shadow-dom-inject-styles';

import { ShareService } from "../services/data/share.service";
import { SuggestionService } from "../services/data/suggestion.service";

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {
    private name_goods = Array();
    private name_categ = Array();
    private name_base = Array();
    private name_sub = Array();
    private rowspan = Array();
    private quantity = Array();
    private amount = Array();
    private unit_ingredient = Array();
    private unit_ul = Array();
    private rda_ai = Array();
    private ul = Array();
    private transfer_rda_ai = Array();
    private transfer_ul = Array();
    private goods_detail = Array();
    private temp;
    private is_unit_correct = Array();
    private init = null;
    private is_init = false;
    constructor(public loadingController: LoadingController, private ss: SuggestionService, private data: ShareService, public navCtrl: NavController, private el: ElementRef) {
    //this.presentLoading();
        // @ts-ignore
        if(this.navCtrl.stack.length == 0) {
            window.location.href = "/home";
            return;
        }
        let _this = this;
        this.data.getParam().pipe(first()).subscribe(val=>{
            _this.ss.getSuggestion(val).subscribe(response=>{
                //console.log(response.col);
                for(let [i, categ] of Object.entries(response.col)) {
                    //console.log(categ.base);
                    // @ts-ignore
                    for(let [idx, base] of Object.entries(categ.base)) {
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
                        for(let [ii, sub] of Object.entries(base.sub)) {
                            // @ts-ignore
                            _this.name_sub[sub.sub_name] = base.base_name;
                            let temp = Array();
                            temp["IU"] = null;
                            temp["mg"] = null;
                            temp["mcg"] = null;
                            // @ts-ignore
                            for(let [index, rr] of Object.entries(sub.rda_ai)) {
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
                            for(let [index, rr] of Object.entries(sub.ul)) {
                                // @ts-ignore
                                temp[index] = rr.dose;
                            }
                            // @ts-ignore
                            _this.transfer_ul[sub.sub_name] = temp;
                        }
                    }
                }
                for(let [i, goods] of Object.entries(response.list)) {
                    _this.quantity.push(1);
                    // @ts-ignore
                    _this.name_goods.push(goods.product_name);
                    // @ts-ignore
                    _this.amount.push(goods.amount);
                    let temp = Array();
                    // @ts-ignore
                    for(let [ii, ingredient] of Object.entries(goods.ing)) {
                        // @ts-ignore
                        temp[ingredient.name] = Array();
                        // @ts-ignore
                        temp[ingredient.name]["dose"] = ingredient.dose;
                        // @ts-ignore
                        temp[ingredient.name]["unit"] = ingredient.unit;
                    }
                    _this.goods_detail.push(temp);
                }
                //console.log(_this.name_categ);
            });
        });
    }

    ngOnInit() {
        
    }
    ngAfterViewChecked() {
        
    }
    checkUnit(i, c, sub) {
        //console.log(this.transfer_rda_ai[sub])
        if(this.goods_detail[c][sub]["unit"] == 'IU') {
            if(this.transfer_rda_ai[sub]["IU"] === null) {
                return true;
            } else {
                return false;
            }
        } else {
            if(this.transfer_rda_ai[sub]["mg"] === null && this.transfer_rda_ai[sub]["mcg"] === null) {
                return true;
            } else {
                return false;
            }
        }
    }
    checkUnitFinal(i) {
        let _this = this;
        let res = true;
        this.name_goods.forEach(function(value, c) {
            Object.keys(_this.goods_detail[c]).forEach(function(sub, index) {
                if(_this.goods_detail[c][sub]["unit"] == 'IU') {
                    if(_this.transfer_rda_ai[sub]["IU"] === null) {
                        res = false;
                        return false;
                    }
                } else {
                    if(_this.transfer_rda_ai[sub]["mg"] === null && _this.transfer_rda_ai[sub]["mcg"] === null) {
                        res = false;
                        return false;
                    }
                }
            })
        })
        if(res) {
            return true;
        } else {
            return false;
        }
    }
    calColspan(i) {
        if(this.name_categ[i] == this.name_categ[i+1]) {
            return 2;
        } else {
            return 1;
        }
    }
    calc_taking_rda_ai(i) {
        //console.log(this.is_unit_correct[i]);
        if(!this.checkUnitFinal(i)) {
            return '';
        }
        let _this = this;
        let res = 0;
        this.name_goods.forEach(function(value, c) {
            Object.keys(_this.goods_detail[c]).forEach(function(sub, index) {
                if(_this.goods_detail[c][sub]["unit"] == 'IU') {
                    res += _this.goods_detail[c][sub]["dose"] * _this.transfer_rda_ai[sub]["IU"];
                } else if(_this.goods_detail[c][sub]["unit"] == 'mg') {
                    if(_this.transfer_rda_ai[sub]["mg"] === null) {
                        res += _this.goods_detail[c][sub]["dose"] * 100 * _this.transfer_rda_ai[sub]["mcg"];
                    } else {
                        res += _this.goods_detail[c][sub]["dose"] * _this.transfer_rda_ai[sub]["mg"];
                    }
                } else {
                    if(_this.transfer_rda_ai[sub]["mcg"] === null) {
                        res += _this.goods_detail[c][sub]["dose"] / 100 * _this.transfer_rda_ai[sub]["mg"];
                    } else {
                        res += _this.goods_detail[c][sub]["dose"] * _this.transfer_rda_ai[sub]["mcg"];
                    }
                }
            })
        })
        return res;
    }
    calc_taking_ul(i) {
        if((i == this.name_base.length || (i+1) == this.name_base.length) && !this.is_init) {
            if(this.init !== null)
                clearTimeout(this.init);
            this.init = setTimeout(() => {
                this.finalizeInitTemplate();
            }, 500);
        }
        if(!this.checkUnitFinal(i)) {
            return '';
        }
        let _this = this;
        //console.log(_this.transfer_ul)
        let res = 0;
        this.name_goods.forEach(function(value, c) {
            Object.keys(_this.goods_detail[c]).forEach(function(sub, index) {
                if(_this.goods_detail[c][sub]["unit"] == 'IU') {
                    res += _this.goods_detail[c][sub]["dose"] * _this.transfer_ul[sub]["IU"];
                } else if(_this.goods_detail[c][sub]["unit"] == 'mg') {
                    if(_this.transfer_ul[sub]["mg"] === null) {
                        res += _this.goods_detail[c][sub]["dose"] * 100 * _this.transfer_ul[sub]["mcg"];
                    } else {
                        res += _this.goods_detail[c][sub]["dose"] * _this.transfer_ul[sub]["mg"];
                    }
                } else {
                    if(_this.transfer_ul[sub]["mcg"] === null) {
                        res += _this.goods_detail[c][sub]["dose"] / 100 * _this.transfer_ul[sub]["mg"];
                    } else {
                        res += _this.goods_detail[c][sub]["dose"] * _this.transfer_ul[sub]["mcg"];
                    }
                }
            })
        })
        return res;
    }
    getTemp(c) {
        this.temp = Object.keys(this.goods_detail[c]);
        return false;
    }
    numberCheck(event, i) {
        if(event.target.value === null)
            event.target.value = '';
        let amount;
        if(event.target.value.replace(/\D/g,'') == '') {
            amount = null;
        } else {
            amount = parseFloat(event.target.value.replace(/[^0-9.]/g,''));
        }
        event.target.value = amount;
    }
    finalizeInitTemplate() {
        // @ts-ignore
        const toolbar = (this.el.nativeElement.querySelectorAll('ion-input') as HTMLElement);
        const styles = '.native-input {padding-left: 0 !important;}';
        let _this = this;
        console.log(toolbar)
        // @ts-ignore
        toolbar.forEach(function(value, c) {
            injectStyles(value, '.native-input', styles);
        })
        this.is_init = true;
    }
    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Hellooo',
        });
        return await loading.present();
    }
}
