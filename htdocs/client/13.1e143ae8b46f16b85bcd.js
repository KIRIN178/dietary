(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{mapf:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=(t("OO+k"),t("P6uZ")),u=function(){return function(n){void 0===n&&(n={}),this.name=n.name,this.amount=n.amount,this.nutritions=n.nutritions,this.show=n.show}}(),i=function(){return function(n){void 0===n&&(n={}),this.name=n.name,this.detail=n.detail}}(),r=function(){function n(){}return n.prototype.addGoods=function(){return new u({name:"",amount:null,nutritions:[{name:"",detail:{dose:null,unit:""}}],show:!0})},n.prototype.addNutrition=function(){return new i({name:"",detail:{dose:null,unit:""}})},n.prototype.getGoods=function(){return[]},n.ngInjectableDef=e.S({factory:function(){return new n},token:n,providedIn:"root"}),n}(),a=t("gIcY"),c=function(){function n(){}return n.prototype.toFormGroup=function(n){var l=[];return n.forEach(function(n,t){l[t]=new a.c(n.name||"",a.p.required),l[String(t)+"-amount"]=new a.c(n.amount||"",a.p.required),n.nutritions.forEach(function(n,e){l[String(t)+"-"+String(e)+"-name"]=new a.c(n.name||"",a.p.required),l[String(t)+"-"+String(e)+"-dose"]=new a.c(n.detail.dose||"",a.p.required),l[String(t)+"-"+String(e)+"-unit"]=new a.c(n.detail.unit||"",a.p.required)})}),0==l.length&&(l[0]=new a.c("",a.p.required)),new a.d(l)},n.ngInjectableDef=e.S({factory:function(){return new n},token:n,providedIn:"root"}),n}(),s=t("9mIc"),d=function(){function n(n,l,t,e,o,u){this.navCtrl=n,this.data=l,this.gs=t,this.el=e,this.gcs=o,this.tt=u,this.users={name:"",birthday:"",gender:"",is_pregnant:"",is_milk:"",is_remember:""},this.title="\u85e5\u98df\u8a55\u4f30 - \u8f38\u5165\u71df\u990a\u54c1",1==this.navCtrl.lastNavId&&(window.location.href="/home"),this.tt.setTitle(this.title)}return n.prototype.loadScript=function(){},n.prototype.addGoods=function(){this.goods.push(this.gs.addGoods()),this.form=this.gcs.toFormGroup(this.goods)},n.prototype.ngOnInit=function(){this.goods=this.gs.getGoods(),this.form=this.gcs.toFormGroup(this.goods)},n.prototype.ngAfterViewChecked=function(){},n.prototype.formChange=function(n){this.form=n},n.prototype.goBack=function(){this.navCtrl.navigateForward("/home")},n.prototype.goNext=function(){var n=this,l=this;this.data.getParam().pipe(Object(o.a)()).subscribe(function(t){t.goods=n.goods,l.data.changeParam(t),n.navCtrl.navigateForward("/third")})},n}(),p=function(){return function(){}}(),h=t("pMnS"),b=t("ra/t"),g=t("ntG5"),m=t("CI40"),f=t("fHOL"),v=t("tXrQ"),y=t("CFRX"),C=t("Ip0R"),k=t("95zI"),w=t("9opb"),x=t("apKv"),O=t("B4/3"),F=t("Zq1E"),I=e.nb({encapsulation:2,styles:[],data:{}});function B(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"span",[],[[8,"innerHTML",1]],null,null,null,null)),e.Bb(1,2)],null,function(n,l){var t=e.Gb(l,0,0,n(l,1,0,e.yb(l.parent,0),l.context.attrs.label,l.context.attrs.keyword));n(l,0,0,t)})}function E(n){return e.Hb(0,[(n()(),e.gb(0,null,null,0))],null,null)}function N(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,4,"li",[],null,[[null,"tap"]],function(n,l,t){var e=!0;return"tap"===l&&(n.component.select(n.context.$implicit),e=!1!==t.srcEvent.stopPropagation()&&e),e},null,null)),(n()(),e.gb(16777216,null,null,3,null,E)),e.ob(2,540672,null,0,C.m,[e.O],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),e.Ab(3,{data:0,label:1,keyword:2,formValue:3,labelAttribute:4,formValueAttribute:5}),e.Ab(4,{attrs:0})],function(n,l){var t=l.component,o=n(l,4,0,n(l,3,0,l.context.$implicit,t.getLabel(l.context.$implicit),t.keyword,t.getFormValue(l.context.$implicit),t.dataProvider.labelAttribute,t.dataProvider.formValueAttribute));n(l,2,0,o,t.template||e.yb(l.parent.parent,22))},null)}function S(n){return e.Hb(0,[(n()(),e.pb(0,0,[[2,0],["ulElem",1]],null,2,"ul",[],[[4,"width","px"]],null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,N)),e.ob(2,278528,null,0,C.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.suggestions)},function(n,l){n(l,0,0,l.component.eleWidth)})}function M(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Fb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.options.noItems)})}function G(n){return e.Hb(0,[e.zb(0,y.c,[]),e.Db(402653184,1,{searchbarElem:0}),e.Db(671088640,2,{ulElem:0}),e.Db(402653184,3,{inputElem:0}),(n()(),e.pb(4,0,[[3,0]],null,8,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"tap"],[null,"ngModelChange"],[null,"ionFocus"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.yb(n,7)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.yb(n,7)._handleInputEvent(t.target.value)&&o),"keyup"===l&&(o=!1!==u.getItems(t)&&o),"tap"===l&&(o=!1!==u.handleTap(t)&&o),"ngModelChange"===l&&(o=!1!==(u.keyword=t)&&o),"ngModelChange"===l&&(o=!1!==u.updateModel()&&o),"ionFocus"===l&&(o=!1!==u.onFocus()&&o),"ionBlur"===l&&(o=!1!==u.onBlur(t)&&o),o},b.M,b.n)),e.ob(5,278528,null,0,C.h,[e.s,e.t,e.k,e.D],{ngClass:[0,"ngClass"]},null),e.Ab(6,{hidden:0}),e.ob(7,16384,null,0,F.a,[e.k],null,null),e.Cb(1024,null,a.h,function(n){return[n]},[F.a]),e.ob(9,671744,null,0,a.m,[[8,null],[8,null],[8,null],[6,a.h]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,a.i,null,[a.m]),e.ob(11,16384,null,0,a.j,[[4,a.i]],null,null),e.ob(12,49152,[["inputElem",4]],0,g.B,[e.h,e.k],{clearInput:[0,"clearInput"],clearOnEdit:[1,"clearOnEdit"],disabled:[2,"disabled"],placeholder:[3,"placeholder"],type:[4,"type"]},null),(n()(),e.pb(13,0,[[1,0]],null,8,"ion-input",[["class","input-text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionInput"],[null,"tap"],[null,"ngModelChange"],[null,"ionClear"],[null,"ionFocus"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.yb(n,16)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.yb(n,16)._handleInputEvent(t.target.value)&&o),"ionInput"===l&&(o=!1!==u.getItems(t)&&o),"tap"===l&&(o=!1!==u.handleTap(t)&&o),"ngModelChange"===l&&(o=!1!==(u.keyword=t)&&o),"ngModelChange"===l&&(o=!1!==u.updateModel()&&o),"ionClear"===l&&(o=!1!==u.clearValue(!0)&&o),"ionFocus"===l&&(o=!1!==u.onFocus()&&o),"ionBlur"===l&&(o=!1!==u.onBlur(t)&&o),o},b.M,b.n)),e.ob(14,278528,null,0,C.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(15,{hidden:0}),e.ob(16,16384,null,0,F.a,[e.k],null,null),e.Cb(1024,null,a.h,function(n){return[n]},[F.a]),e.ob(18,671744,null,0,a.m,[[8,null],[8,null],[8,null],[6,a.h]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,a.i,null,[a.m]),e.ob(20,16384,null,0,a.j,[[4,a.i]],null,null),e.ob(21,49152,[["searchbarElem",4]],0,g.B,[e.h,e.k],{autocomplete:[0,"autocomplete"],autocorrect:[1,"autocorrect"],debounce:[2,"debounce"],disabled:[3,"disabled"],placeholder:[4,"placeholder"],spellcheck:[5,"spellcheck"],type:[6,"type"]},null),(n()(),e.gb(0,[["defaultTemplate",2]],null,0,null,B)),(n()(),e.gb(16777216,null,null,1,null,S)),e.ob(24,16384,null,0,C.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,M)),e.ob(26,16384,null,0,C.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component,e=n(l,6,0,!t.useIonInput);n(l,5,0,e),n(l,9,0,t.disabled,t.keyword),n(l,12,0,null==t.options.clearInput?t.defaultOpts.clearInput:t.options.clearInput,null==t.options.clearOnEdit?t.defaultOpts.clearOnEdit:t.options.clearOnEdit,t.disabled,null==t.options.placeholder?t.defaultOpts.placeholder:t.options.placeholder,null==t.options.type?t.defaultOpts.type:t.options.type);var o=n(l,15,0,t.useIonInput);n(l,14,0,"input-text",o),n(l,18,0,t.disabled,t.keyword),n(l,21,0,null==t.options.autocomplete?t.defaultOpts.autocomplete:t.options.autocomplete,null==t.options.autocorrect?t.defaultOpts.autocorrect:t.options.autocorrect,null==t.options.debounce?t.defaultOpts.debounce:t.options.debounce,t.disabled,null==t.options.placeholder?t.defaultOpts.placeholder:t.options.placeholder,null==t.options.spellcheck?t.defaultOpts.spellcheck:t.options.spellcheck,null==t.options.type?t.defaultOpts.type:t.options.type),n(l,24,0,!t.disabled&&t.suggestions.length>0&&t.showList),n(l,26,0,0==t.suggestions.length&&t.showList&&t.options.noItems)},function(n,l){n(l,4,0,e.yb(l,11).ngClassUntouched,e.yb(l,11).ngClassTouched,e.yb(l,11).ngClassPristine,e.yb(l,11).ngClassDirty,e.yb(l,11).ngClassValid,e.yb(l,11).ngClassInvalid,e.yb(l,11).ngClassPending),n(l,13,0,e.yb(l,20).ngClassUntouched,e.yb(l,20).ngClassTouched,e.yb(l,20).ngClassPristine,e.yb(l,20).ngClassDirty,e.yb(l,20).ngClassValid,e.yb(l,20).ngClassInvalid,e.yb(l,20).ngClassPending)})}var _=t("uhuC"),P=t("CuFg"),T=t("sE5F"),q=t("67Y/"),j=t("t/Na"),A=function(){function n(n,l){this.http=n,this.httpClient=l}return n.prototype.getResults=function(n){var l=new T.d;l.append("Content-Type","application/x-www-form-urlencoded");var t,o={headers:l,withCredentials:!1};return t=Object(e.X)()?"127.0.0.1":"pharmacist.dietary.cc",this.http.post("http://"+t+"/dietary/ajax_autocomplete_ingredient_client","keyword="+n,o).pipe(Object(q.a)(function(n){return n.json().filter(function(n){return!0})}))},n.ngInjectableDef=e.S({factory:function(){return new n(e.W(T.e),e.W(j.c))},token:n,providedIn:"root"}),n}(),D=t("8X+v"),H=function(n,l,t,e){return new(t||(t=Promise))(function(o,u){function i(n){try{a(e.next(n))}catch(l){u(l)}}function r(n){try{a(e.throw(n))}catch(l){u(l)}}function a(n){n.done?o(n.value):new t(function(l){l(n.value)}).then(i,r)}a((e=e.apply(n,l||[])).next())})},$=function(n,l){var t,e,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function r(u){return function(r){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,e&&(o=2&u[0]?e.return:u[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,u[1])).done)return o;switch(e=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,e=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=l.call(n,i)}catch(r){u=[6,r],e=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,r])}}},L=function(){function n(n,l,t,o,u,i,r){this.gcs=n,this.completeTestService=l,this.el=t,this.gs=o,this.alertController=u,this.loadingController=i,this.gns=r,this.goods=[],this.goodsChange=new e.m,this.formChange=new e.m}return n.prototype.ngOnInit=function(){this.form=this.gcs.toFormGroup(this.goods),this.formChange.emit(this.form)},n.prototype.ngAfterViewChecked=function(){for(var n=0,l=0;l<this.goods.length;l++)n+=this.goods[l].nutritions.length;if(0!=n&&this.el.nativeElement.querySelectorAll(".auto-complete.item-input").length==n){var t=this.el.nativeElement.querySelectorAll(".auto-complete.item-input");Object(P.a)(t[n-1],".item-native",".item-native {overflow: visible !important;}")}},n.prototype.addNutrition=function(n){this.goods[n].nutritions.push(this.gs.addNutrition()),this.form=this.gcs.toFormGroup(this.goods),this.formChange.emit(this.form)},n.prototype.clickNutrition=function(n,l){var t=this;this.presentLoading();var e=this;this.gns.getResults().subscribe(function(t){setTimeout(function(){e.loadingController.dismiss("loading"),e.showSelectAlert(t.list,n,l)},500)},function(n){var l=t;setTimeout(function(){l.loadingController.dismiss("loading"),t.netError(),console.log(n)},500)})},n.prototype.netError=function(){return H(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"\u767c\u751f\u932f\u8aa4",subHeader:"\u9023\u63a5\u5931\u6557",message:"\u7121\u6cd5\u9023\u63a5\u5230\u4f3a\u670d\u5668\uff0c\u8acb\u78ba\u8a8d\u662f\u5426\u9023\u4e0a\u7db2\u8def\u3002",buttons:["\u77ad\u89e3"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n.prototype.deleteGoods=function(n){return H(this,void 0,void 0,function(){var l=this;return $(this,function(t){switch(t.label){case 0:return[4,this.alertController.create({header:"\u522a\u9664\u78ba\u8a8d",mode:"md",message:"\u60a8\u78ba\u5b9a\u8981\u522a\u9664\u71df\u990a\u54c1"+String(n+1)+"\u55ce?",buttons:[{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(n){}},{text:"\u78ba\u5b9a",handler:function(){l.goods.splice(n,1),l.form=l.gcs.toFormGroup(l.goods),l.formChange.emit(l.form)}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},n.prototype.deleteNutrition=function(n,l){return H(this,void 0,void 0,function(){var t=this;return $(this,function(e){switch(e.label){case 0:return[4,this.alertController.create({header:"\u522a\u9664\u78ba\u8a8d",mode:"md",message:"\u60a8\u78ba\u5b9a\u8981\u522a\u9664\u6210\u5206"+String(l+1)+"\u55ce?",buttons:[{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(n){}},{text:"\u78ba\u5b9a",handler:function(){t.goods[n].nutritions.splice(l,1),t.form=t.gcs.toFormGroup(t.goods),t.formChange.emit(t.form)}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},n.prototype.presentLoading=function(){return H(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.loadingController.create({id:"loading",message:"\u9023\u63a5\u4f3a\u670d\u5668\u4e2d"})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},n.prototype.showSelectAlert=function(n,l,t){return H(this,void 0,void 0,function(){var e;return $(this,function(o){switch(o.label){case 0:return e=this,[4,this.alertController.create({header:"\u9078\u64c7\u6210\u5206",mode:"ios",inputs:n,buttons:[{text:"\u53d6\u6d88",role:"cancel",cssClass:"secondary",handler:function(){}},{text:"\u78ba\u5b9a",handler:function(n){var o=e.countViewChildren(l,t);e.searchbars.toArray()[o].setValue(n),e.goods[l].nutritions[t].name=n,e.form=e.gcs.toFormGroup(e.goods),e.formChange.emit(e.form)}}]})];case 1:return[4,o.sent().present()];case 2:return o.sent(),[2]}})})},n.prototype.numberCheckAmount=function(n,l){var t;null===n.target.value&&(n.target.value=""),t=""==n.target.value.replace(/\D/g,"")?null:parseFloat(n.target.value.replace(/[^0-9.]/g,"")),this.goods[l].amount=t,this.form=this.gcs.toFormGroup(this.goods),this.formChange.emit(this.form)},n.prototype.numberCheckDose=function(n,l,t){var e;null===n.target.value&&(n.target.value=""),e=""==n.target.value.replace(/\D/g,"")?null:parseFloat(n.target.value.replace(/[^0-9.]/g,""));var o=JSON.parse(JSON.stringify(this.goods[l].nutritions[t].detail));this.goods[l].nutritions[t].detail=o,this.goods[l].nutritions[t].detail.dose=e,this.form=this.gcs.toFormGroup(this.goods),this.formChange.emit(this.form)},n.prototype.updateGoodsName=function(n,l){this.goods[n].name=l.target.value,this.form=this.gcs.toFormGroup(this.goods),this.formChange.emit(this.form)},n.prototype.updateNutritionName=function(n,l){var t=this.countViewChildren(n,l);this.goods[n].nutritions[l].name=this.searchbars.toArray()[t].getValue(),this.form=this.gcs.toFormGroup(this.goods),this.formChange.emit(this.form)},n.prototype.updateDose=function(n,l,t){this.goods[n].nutritions[l].detail.dose=t.target.value,this.form=this.gcs.toFormGroup(this.goods),this.formChange.emit(this.form)},n.prototype.updateUnit=function(n,l,t){this.goods[n].nutritions[l].detail.unit=t.target.value,this.form=this.gcs.toFormGroup(this.goods),this.formChange.emit(this.form)},n.prototype.test=function(){alert("aaa")},n.prototype.countViewChildren=function(n,l){for(var t=0,e=0;e<n;e++)t+=this.goods[e].nutritions.length;return t+l},n}(),V=t("CssM"),U=t("Eq7r"),X=e.nb({encapsulation:0,styles:[[".input-text[_ngcontent-%COMP%]{text-align:right}.item.goods.active[_ngcontent-%COMP%]{border-color:#ccc!important;background-color:#699efe;color:#eee}.item-accordion[_ngcontent-%COMP%]{height:49px;padding-top:0;padding-bottom:0;transition:90ms all linear}.item-accordion.item-hide[_ngcontent-%COMP%]{height:0}.goods[_ngcontent-%COMP%]:hover{cursor:pointer}.nutrition-header[_ngcontent-%COMP%]{border-color:#ccc!important;background-color:#d9d9d9!important}.nutrition-name[_ngcontent-%COMP%]{width:62px}"]],data:{}});function R(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,45,"div",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,5,"ion-item",[["class","nutrition-header item-accordion"]],[[2,"item-hide",null]],null,null,b.N,b.o)),e.ob(2,49152,null,0,g.C,[e.h,e.k],null,null),(n()(),e.Fb(3,0,[" \u6210\u5206 "," "])),(n()(),e.pb(4,0,null,0,2,"ion-button",[["color","medium"],["fill","outline"],["slot","end"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.deleteNutrition(n.parent.context.index,n.context.index)&&e),e},b.B,b.c)),e.ob(5,49152,null,0,g.f,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),e.Fb(-1,0,["\u522a\u9664"])),(n()(),e.pb(7,0,null,null,10,"ion-item",[["class","auto-complete item-accordion"]],[[2,"item-hide",null]],null,null,b.N,b.o)),e.ob(8,49152,null,0,g.C,[e.h,e.k],null,null),(n()(),e.pb(9,0,null,0,2,"ion-label",[["class","nutrition-name"],["stacked",""]],null,null,null,b.O,b.p)),e.ob(10,49152,null,0,g.I,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,["\u6210\u5206\u540d"])),(n()(),e.pb(12,0,null,0,2,"ion-auto-complete",[],null,[[null,"itemClicked"],[null,"ionAutoInput"],[null,"itemSelected"],["document","click"]],function(n,l,t){var o=!0,u=n.component;return"document:click"===l&&(o=!1!==e.yb(n,14).documentClickHandler(t)&&o),"itemClicked"===l&&(o=!1!==u.selectInputMethod(t,n.parent.context.index,n.context.index)&&o),"ionAutoInput"===l&&(o=!1!==u.updateNutritionName(n.parent.context.index,n.context.index)&&o),"itemSelected"===l&&(o=!1!==u.updateNutritionName(n.parent.context.index,n.context.index)&&o),o},G,I)),e.Cb(5120,null,a.h,function(n){return[n]},[y.a]),e.ob(14,8437760,[[1,4]],0,y.a,[],{dataProvider:[0,"dataProvider"]},{itemSelected:"itemSelected",ionAutoInput:"ionAutoInput"}),(n()(),e.pb(15,0,null,0,2,"ion-button",[["color","dark"],["fill","outline"],["slot","end"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.clickNutrition(n.parent.context.index,n.context.index)&&e),e},b.B,b.c)),e.ob(16,49152,null,0,g.f,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),e.Fb(-1,0,["\u9078\u64c7"])),(n()(),e.pb(18,0,null,null,8,"ion-item",[["class","item-accordion"]],[[2,"item-hide",null]],null,null,b.N,b.o)),e.ob(19,49152,null,0,g.C,[e.h,e.k],null,null),(n()(),e.pb(20,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,b.O,b.p)),e.ob(21,49152,null,0,g.I,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,["\u5291\u91cf"])),(n()(),e.pb(23,0,null,0,3,"ion-input",[["class","input-text"],["placeholder","\u8acb\u586b\u5beb"],["required",""],["type","text"]],null,[[null,"ionBlur"],[null,"ionInput"],[null,"ionChange"]],function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.yb(n,26)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.yb(n,26)._handleInputEvent(t.target.value)&&o),"ionBlur"===l&&(o=!1!==u.numberCheckDose(t,n.parent.context.index,n.context.index)&&o),"ionInput"===l&&(o=!1!==u.updateDose(n.parent.context.index,n.context.index,t)&&o),o},b.M,b.n)),e.Cb(5120,null,a.h,function(n){return[n]},[F.a]),e.ob(25,49152,null,0,g.B,[e.h,e.k],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"],value:[3,"value"]},null),e.ob(26,16384,null,0,F.a,[e.k],null,null),(n()(),e.pb(27,0,null,null,18,"ion-item",[["class","item-accordion"]],[[2,"item-hide",null]],null,null,b.N,b.o)),e.ob(28,49152,null,0,g.C,[e.h,e.k],null,null),(n()(),e.pb(29,0,null,0,2,"ion-label",[],null,null,null,b.O,b.p)),e.ob(30,49152,null,0,g.I,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,["\u55ae\u4f4d"])),(n()(),e.pb(32,0,null,0,13,"ion-select",[["cancelText","\u53d6\u6d88"],["interface","popover"],["okText","\u78ba\u8a8d"],["placeholder","\u8acb\u9078\u64c7"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.yb(n,36)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.yb(n,36)._handleChangeEvent(t.target.value)&&o),"ionChange"===l&&(o=!1!==u.updateUnit(n.parent.context.index,n.context.index,t)&&o),o},b.V,b.v)),e.Cb(5120,null,a.h,function(n){return[n]},[_.a]),e.ob(34,49152,null,0,g.gb,[e.h,e.k],{cancelText:[0,"cancelText"],okText:[1,"okText"],placeholder:[2,"placeholder"],interface:[3,"interface"],interfaceOptions:[4,"interfaceOptions"],value:[5,"value"]},null),e.Ab(35,{mode:0}),e.ob(36,16384,null,0,_.a,[e.k],null,null),(n()(),e.pb(37,0,null,0,2,"ion-select-option",[["value","mg"]],null,null,null,b.U,b.w)),e.ob(38,49152,null,0,g.hb,[e.h,e.k],{value:[0,"value"]},null),(n()(),e.Fb(-1,0,["\u6beb\u514b(mg)"])),(n()(),e.pb(40,0,null,0,2,"ion-select-option",[["value","mcg"]],null,null,null,b.U,b.w)),e.ob(41,49152,null,0,g.hb,[e.h,e.k],{value:[0,"value"]},null),(n()(),e.Fb(-1,0,["\u5fae\u514b(mcg)"])),(n()(),e.pb(43,0,null,0,2,"ion-select-option",[["value","IU"]],null,null,null,b.U,b.w)),e.ob(44,49152,null,0,g.hb,[e.h,e.k],{value:[0,"value"]},null),(n()(),e.Fb(-1,0,["\u570b\u969b\u55ae\u4f4d(IU)"]))],function(n,l){var t=l.component;n(l,5,0,"medium","outline"),n(l,14,0,t.completeTestService),n(l,16,0,"dark","outline"),n(l,25,0,"\u8acb\u586b\u5beb","","text",l.context.$implicit.detail.dose);var e=n(l,35,0,"md");n(l,34,0,"\u53d6\u6d88","\u78ba\u8a8d","\u8acb\u9078\u64c7","popover",e,l.context.$implicit.detail.unit),n(l,38,0,"mg"),n(l,41,0,"mcg"),n(l,44,0,"IU")},function(n,l){var t=l.component;n(l,1,0,!l.parent.context.$implicit.show),n(l,3,0,l.context.index+1),n(l,4,0,1==t.goods[l.parent.context.index].nutritions.length),n(l,7,0,!l.parent.context.$implicit.show),n(l,18,0,!l.parent.context.$implicit.show),n(l,27,0,!l.parent.context.$implicit.show)})}function J(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,33,"div",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,7,"ion-item",[["class","goods"]],[[2,"active",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=0!=(n.context.$implicit.show=!n.context.$implicit.show)&&e),e},b.N,b.o)),e.ob(2,49152,null,0,g.C,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(3,0,null,0,1,"ion-icon",[["margin-end",""]],null,null,null,b.L,b.m)),e.ob(4,49152,null,0,g.x,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.Fb(5,0,[" \u71df\u990a\u54c1 "," "])),(n()(),e.pb(6,0,null,0,2,"ion-button",[["color","light"],["fill","outline"],["slot","end"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(n.component.deleteGoods(n.context.index),e=!1!==t.stopPropagation()&&e),e},b.B,b.c)),e.ob(7,49152,null,0,g.f,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),e.Fb(-1,0,["\u522a\u9664"])),(n()(),e.pb(9,0,null,null,8,"ion-item",[["class","item-accordion"]],[[2,"item-hide",null]],null,null,b.N,b.o)),e.ob(10,49152,null,0,g.C,[e.h,e.k],null,null),(n()(),e.pb(11,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,b.O,b.p)),e.ob(12,49152,null,0,g.I,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,["\u71df\u990a\u54c1\u540d"])),(n()(),e.pb(14,0,null,0,3,"ion-input",[["class","input-text"],["placeholder","\u8acb\u586b\u5beb"],["required",""],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.yb(n,17)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.yb(n,17)._handleInputEvent(t.target.value)&&o),"ionBlur"===l&&(o=!1!==u.updateGoodsName(n.context.index,t)&&o),o},b.M,b.n)),e.Cb(5120,null,a.h,function(n){return[n]},[F.a]),e.ob(16,49152,null,0,g.B,[e.h,e.k],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"],value:[3,"value"]},null),e.ob(17,16384,null,0,F.a,[e.k],null,null),(n()(),e.pb(18,0,null,null,8,"ion-item",[["class","item-accordion"]],[[2,"item-hide",null]],null,null,b.N,b.o)),e.ob(19,49152,null,0,g.C,[e.h,e.k],null,null),(n()(),e.pb(20,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,b.O,b.p)),e.ob(21,49152,null,0,g.I,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,["\u6bcf\u4e00\u4efd\u6578\u91cf"])),(n()(),e.pb(23,0,null,0,3,"ion-input",[["class","input-text"],["placeholder","\u8acb\u586b\u5beb"],["required",""],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.yb(n,26)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.yb(n,26)._handleInputEvent(t.target.value)&&o),"ionBlur"===l&&(o=!1!==u.numberCheckAmount(t,n.context.index)&&o),o},b.M,b.n)),e.Cb(5120,null,a.h,function(n){return[n]},[F.a]),e.ob(25,49152,null,0,g.B,[e.h,e.k],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"],value:[3,"value"]},null),e.ob(26,16384,null,0,F.a,[e.k],null,null),(n()(),e.gb(16777216,null,null,1,null,R)),e.ob(28,278528,null,0,C.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(29,0,null,null,4,"ion-item",[["button",""],["class","item-accordion"],["color","light"]],[[2,"item-hide",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addNutrition(n.context.index)&&e),e},b.N,b.o)),e.ob(30,49152,null,0,g.C,[e.h,e.k],{color:[0,"color"],button:[1,"button"]},null),(n()(),e.pb(31,0,null,0,1,"ion-icon",[["margin-end",""],["name","add"]],null,null,null,b.L,b.m)),e.ob(32,49152,null,0,g.x,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.Fb(-1,0,[" \u65b0\u589e\u6210\u5206 "]))],function(n,l){n(l,2,0,l.context.$implicit.show?"primary":""),n(l,4,0,l.context.$implicit.show?"arrow-dropdown":"arrow-dropright"),n(l,7,0,"light","outline"),n(l,16,0,"\u8acb\u586b\u5beb","","text",l.context.$implicit.name),n(l,25,0,"\u8acb\u586b\u5beb","","text",l.context.$implicit.amount),n(l,28,0,l.context.$implicit.nutritions),n(l,30,0,"light",""),n(l,32,0,"add")},function(n,l){var t=l.component;n(l,1,0,!l.context.$implicit.show),n(l,5,0,l.context.index+1),n(l,6,0,1==t.goods.length),n(l,9,0,!l.context.$implicit.show),n(l,18,0,!l.context.$implicit.show),n(l,29,0,!l.context.$implicit.show)})}function K(n){return e.Hb(0,[(n()(),e.pb(0,0,[["myForm",1]],null,6,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var o=!0;return"submit"===l&&(o=!1!==e.yb(n,2).onSubmit(t)&&o),"reset"===l&&(o=!1!==e.yb(n,2).onReset()&&o),o},null,null)),e.ob(1,16384,null,0,a.r,[],null,null),e.ob(2,540672,null,0,a.e,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,a.a,null,[a.e]),e.ob(4,16384,null,0,a.k,[[4,a.a]],null,null),(n()(),e.gb(16777216,null,null,1,null,J)),e.ob(6,278528,null,0,C.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.form),n(l,6,0,t.goods)},function(n,l){n(l,0,0,e.yb(l,4).ngClassUntouched,e.yb(l,4).ngClassTouched,e.yb(l,4).ngClassPristine,e.yb(l,4).ngClassDirty,e.yb(l,4).ngClassValid,e.yb(l,4).ngClassInvalid,e.yb(l,4).ngClassPending)})}function W(n){return e.Hb(0,[e.Db(671088640,1,{searchbars:1}),(n()(),e.gb(16777216,null,null,1,null,K)),e.ob(2,16384,null,0,C.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.component.form)},null)}var Y=t("ZYjt"),Z=e.nb({encapsulation:0,styles:[[".img-card[_ngcontent-%COMP%]{width:auto;max-height:200px}.hover[_ngcontent-%COMP%]:hover{cursor:pointer}.test[_ngcontent-%COMP%]{overflow:visible}"]],data:{}});function z(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,9,"ion-header",[],null,null,null,b.K,b.l)),e.ob(1,49152,null,0,g.w,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,7,"ion-toolbar",[],null,null,null,b.X,b.y)),e.ob(3,49152,null,0,g.vb,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,2,"ion-back-button",[["defaultHref","/home"],["slot","start"],["text","\u524d\u4e00\u6b65"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.yb(n,6).onClick(t)&&o),o},b.A,b.b)),e.ob(5,49152,null,0,g.c,[e.h,e.k],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.ob(6,16384,null,0,m.a,[[2,f.a],v.a,e.k],{defaultHref:[0,"defaultHref"]},null),(n()(),e.pb(7,0,null,0,2,"ion-title",[],null,null,null,b.W,b.x)),e.ob(8,49152,null,0,g.tb,[e.h,e.k],null,null),(n()(),e.Fb(9,0,["",""])),(n()(),e.pb(10,0,null,null,29,"ion-content",[["class","test"],["padding",""]],null,null,null,b.I,b.j)),e.ob(11,49152,null,0,g.p,[e.h,e.k],null,null),(n()(),e.pb(12,0,null,0,9,"ion-card",[],null,null,null,b.F,b.e)),e.ob(13,49152,null,0,g.h,[e.h,e.k],null,null),(n()(),e.pb(14,0,null,0,0,"img",[["class","img-card"],["src","assets/img/welcome2.jpg"]],null,null,null,null,null)),(n()(),e.pb(15,0,null,0,6,"ion-card-content",[],null,null,null,b.D,b.f)),e.ob(16,49152,null,0,g.i,[e.h,e.k],null,null),(n()(),e.pb(17,0,null,0,2,"ion-card-title",[],null,null,null,b.E,b.g)),e.ob(18,49152,null,0,g.l,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,[" \u81ea\u6211\u8a55\u4f30\u5c0f\u5e6b\u624b - \u7b2c\u4e8c\u6b65 "])),(n()(),e.pb(20,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),e.Fb(-1,null,[" \u518d\u4f86\uff0c\u6211\u5011\u9700\u8981\u60a8\u6b63\u5728\u670d\u7528\u7684\u71df\u990a\u54c1\u8a73\u7d30\u5167\u5bb9\u3002\u52a0\u6cb9\uff01\u5269\u9019\u4e00\u5c0f\u6b65\u5c31\u5b8c\u6210\u4e86\uff01 "])),(n()(),e.pb(22,0,null,0,3,"ion-list",[],null,null,null,b.Q,b.q)),e.ob(23,49152,null,0,g.J,[e.h,e.k],null,null),(n()(),e.pb(24,0,null,0,1,"app-dynamic-goods",[],null,[[null,"formChange"]],function(n,l,t){var e=!0;return"formChange"===l&&(e=!1!==n.component.formChange(t)&&e),e},W,X)),e.ob(25,8503296,null,0,L,[c,A,e.k,r,V.a,U.a,D.a],{goods:[0,"goods"],form:[1,"form"]},{formChange:"formChange"}),(n()(),e.pb(26,0,null,0,4,"ion-item",[["button",""],["color","light"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addGoods()&&e),e},b.N,b.o)),e.ob(27,49152,null,0,g.C,[e.h,e.k],{color:[0,"color"],button:[1,"button"]},null),(n()(),e.pb(28,0,null,0,1,"ion-icon",[["margin-end",""],["name","add-circle"]],null,null,null,b.L,b.m)),e.ob(29,49152,null,0,g.x,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.Fb(-1,0,[" \u65b0\u589e\u71df\u990a\u54c1 "])),(n()(),e.pb(31,0,null,0,2,"ion-button",[["expand","full"],["margin-top",""],["type","submit"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goNext()&&e),e},b.B,b.c)),e.ob(32,49152,null,0,g.f,[e.h,e.k],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(n()(),e.Fb(-1,0,["\u4e0b\u4e00\u6b65"])),(n()(),e.pb(34,0,null,0,5,"ion-row",[],null,null,null,b.T,b.u)),e.ob(35,49152,null,0,g.cb,[],null,null),(n()(),e.pb(36,0,null,0,3,"ion-col",[["text-center",""]],null,null,null,b.H,b.i)),e.ob(37,49152,null,0,g.o,[e.h,e.k],null,null),(n()(),e.pb(38,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Fb(-1,null,["\xa9 2018~ Copyright: \u85e5\u98df\u8a55\u4f30\u5de5\u4f5c\u574a"]))],function(n,l){var t=l.component;n(l,5,0,"/home","\u524d\u4e00\u6b65"),n(l,6,0,"/home"),n(l,25,0,t.goods,t.form),n(l,27,0,"light",""),n(l,29,0,"add-circle"),n(l,32,0,!t.form.valid,"full","submit")},function(n,l){n(l,9,0,l.component.title)})}function Q(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-second",[],null,null,null,z,Z)),e.ob(1,8503296,null,0,d,[v.a,s.a,r,e.k,c,Y.h],null,null)],function(n,l){n(l,1,0)},null)}var nn=e.lb("app-second",d,Q,{},{},[]),ln=t("ZYCi");t.d(l,"SecondPageModuleNgFactory",function(){return tn});var tn=e.mb(p,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[h.a,nn]],[3,e.j],e.x]),e.wb(4608,C.l,C.k,[e.u,[2,C.t]]),e.wb(4608,a.s,a.s,[]),e.wb(4608,k.a,k.a,[e.z,e.g]),e.wb(4608,w.a,w.a,[k.a,e.j,e.q]),e.wb(4608,x.a,x.a,[k.a,e.j,e.q]),e.wb(4608,a.b,a.b,[]),e.wb(4608,T.c,T.c,[]),e.wb(4608,T.h,T.b,[]),e.wb(5120,T.j,T.k,[]),e.wb(4608,T.i,T.i,[T.c,T.h,T.j]),e.wb(4608,T.g,T.a,[]),e.wb(5120,T.e,T.l,[T.i,T.g]),e.wb(4608,j.h,j.n,[C.c,e.B,j.l]),e.wb(4608,j.o,j.o,[j.h,j.m]),e.wb(5120,j.a,function(n){return[n]},[j.o]),e.wb(4608,j.k,j.k,[]),e.wb(6144,j.i,null,[j.k]),e.wb(4608,j.g,j.g,[j.i]),e.wb(6144,j.b,null,[j.g]),e.wb(4608,j.f,j.j,[j.b,e.q]),e.wb(4608,j.c,j.c,[j.f]),e.wb(1073742336,C.b,C.b,[]),e.wb(1073742336,a.q,a.q,[]),e.wb(1073742336,a.f,a.f,[]),e.wb(1073742336,O.a,O.a,[]),e.wb(1073742336,a.n,a.n,[]),e.wb(1073742336,y.b,y.b,[]),e.wb(1073742336,T.f,T.f,[]),e.wb(1073742336,j.e,j.e,[]),e.wb(1073742336,j.d,j.d,[]),e.wb(1073742336,ln.n,ln.n,[[2,ln.t],[2,ln.m]]),e.wb(1073742336,p,p,[]),e.wb(256,j.l,"XSRF-TOKEN",[]),e.wb(256,j.m,"X-XSRF-TOKEN",[]),e.wb(1024,ln.k,function(){return[[{path:"",component:d}]]},[])])})}}]);