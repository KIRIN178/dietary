(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{mQQL:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=(t("OO+k"),t("P6uZ")),a=t("CuFg"),i=t("9mIc"),r=t("sE5F"),o=t("67Y/"),c=function(){function l(l){this.http=l}return l.prototype.getSuggestion=function(l){var n=new r.d;n.append("Content-Type","application/x-www-form-urlencoded");var t,e={headers:n,withCredentials:!1};return t=Object(u.X)()?"http://127.0.0.1":"https://pharmacist.dietary.cc",this.http.post(t+"/dietary/ajax_get_suggestion_result","goods="+encodeURIComponent(JSON.stringify(l.goods))+"&user="+encodeURIComponent(JSON.stringify(l.user)),e).pipe(Object(o.a)(function(l){return l.json()}))},l.prototype.formData=function(l){return Object.keys(l).map(function(n){return encodeURIComponent(n)+"="+encodeURIComponent(l[n])}).join("&")},l.ngInjectableDef=u.S({factory:function(){return new l(u.W(r.e))},token:l,providedIn:"root"}),l}(),s=function(){function l(l,n,t,u,a,i){if(this.loadingController=l,this.ss=n,this.data=t,this.navCtrl=u,this.el=a,this.tt=i,this.title="\u85e5\u98df\u8a55\u4f30 - \u8a55\u4f30\u7d50\u679c",this.name_goods=Array(),this.name_categ=Array(),this.name_base=Array(),this.name_sub=Array(),this.rowspan=Array(),this.quantity=Array(),this.amount=Array(),this.unit_ingredient=Array(),this.unit_ul=Array(),this.rda_ai=Array(),this.ul=Array(),this.transfer_rda_ai=Array(),this.transfer_ul=Array(),this.goods_detail=Array(),this.is_unit_correct=Array(),this.init=null,this.is_init=!1,this.is_show=!1,1!=this.navCtrl.lastNavId){this.tt.setTitle(this.title);var r=this;this.presentLoading(),this.data.getParam().pipe(Object(e.a)()).subscribe(function(l){r.ss.getSuggestion(l).subscribe(function(l){for(var n=0,t=Object.entries(l.col);n<t.length;n++)for(var u=t[n][1],e=0,a=Object.entries(u.base);e<a.length;e++){var i=a[e][1];r.name_categ.push(u.categ_name),r.rowspan.push(u.rowspan),r.name_base.push(i.base_name),r.unit_ingredient.push(i.base_unit),r.rda_ai.push(i.rda_ai),r.ul.push(i.ul);for(var o=0,c=Object.entries(i.sub);o<c.length;o++){var s=c[o][1];r.name_sub[s.sub_name]=i.base_name,(v=Array()).IU=null,v.mg=null,v.mcg=null;for(var d=0,p=Object.entries(s.rda_ai);d<p.length;d++){var b=p[d];v[b[0]]=b[1].dose}r.transfer_rda_ai[s.sub_name]=v,(v=Array()).IU=null,v.mg=null,v.mcg=null;for(var g=0,x=Object.entries(s.ul);g<x.length;g++){var f=x[g];v[f[0]]=f[1].dose}r.transfer_ul[s.sub_name]=v}}for(var _=0,h=Object.entries(l.list);_<h.length;_++){var m=h[_][1];r.quantity.push(1),r.name_goods.push(m.product_name),r.amount.push(m.amount);for(var v=Array(),y=0,F=Object.entries(m.ing);y<F.length;y++){var k=F[y][1];v[k.name]=Array(),v[k.name].dose=k.dose,v[k.name].unit=k.unit}r.goods_detail.push(v)}setTimeout(function(){r.is_show=!0,r.loadingController.dismiss("loading")},500)})})}else window.location.href="/home"}return l.prototype.ngOnInit=function(){},l.prototype.ngAfterViewChecked=function(){},l.prototype.checkUnit=function(l,n,t){return"IU"==this.goods_detail[n][t].unit?null===this.transfer_rda_ai[t].IU:null===this.transfer_rda_ai[t].mg&&null===this.transfer_rda_ai[t].mcg},l.prototype.checkUnitFinal=function(l){var n=this,t=!0;return this.name_goods.forEach(function(l,u){Object.keys(n.goods_detail[u]).forEach(function(l,e){if("IU"==n.goods_detail[u][l].unit){if(null===n.transfer_rda_ai[l].IU)return t=!1,!1}else if(null===n.transfer_rda_ai[l].mg&&null===n.transfer_rda_ai[l].mcg)return t=!1,!1})}),!!t},l.prototype.calColspan=function(l){return this.name_categ[l]==this.name_categ[l+1]?2:1},l.prototype.calc_taking_rda_ai=function(l){if(!this.checkUnitFinal(l))return"";var n=this,t=0;return this.name_goods.forEach(function(u,e){Object.keys(n.goods_detail[e]).forEach(function(u,a){n.name_base[l]==n.name_sub[u]&&(t+="IU"==n.goods_detail[e][u].unit?n.goods_detail[e][u].dose*n.transfer_rda_ai[u].IU:"mg"==n.goods_detail[e][u].unit?null===n.transfer_rda_ai[u].mg?n.quantity[e]*n.goods_detail[e][u].dose*100*n.transfer_rda_ai[u].mcg:n.quantity[e]*n.goods_detail[e][u].dose*n.transfer_rda_ai[u].mg:null===n.transfer_rda_ai[u].mcg?n.quantity[e]*n.goods_detail[e][u].dose/100*n.transfer_rda_ai[u].mg:n.quantity[e]*n.goods_detail[e][u].dose*n.transfer_rda_ai[u].mcg)})}),t},l.prototype.calc_taking_ul=function(l){var n=this;if(l!=this.name_base.length&&l+1!=this.name_base.length||this.is_init||(null!==this.init&&clearTimeout(this.init),this.init=setTimeout(function(){n.finalizeInitTemplate()},500)),!this.checkUnitFinal(l))return"";var t=this,u=0;return this.name_goods.forEach(function(n,e){Object.keys(t.goods_detail[e]).forEach(function(n,a){t.name_base[l]==t.name_sub[n]&&(u+="IU"==t.goods_detail[e][n].unit?t.goods_detail[e][n].dose*t.transfer_ul[n].IU:"mg"==t.goods_detail[e][n].unit?null===t.transfer_ul[n].mg?t.quantity[e]*t.goods_detail[e][n].dose*100*t.transfer_ul[n].mcg:t.quantity[e]*t.goods_detail[e][n].dose*t.transfer_ul[n].mg:null===t.transfer_ul[n].mcg?t.quantity[e]*t.goods_detail[e][n].dose/100*t.transfer_ul[n].mg:t.quantity[e]*t.goods_detail[e][n].dose*t.transfer_ul[n].mcg)})}),u},l.prototype.detectOverdose=function(){var l=this,n=!1;return this.name_base.forEach(function(t,u){(l.calc_taking_rda_ai(u)>l.rda_ai[u]&&null!==l.rda_ai[u]||l.calc_taking_rda_ai(u)>l.ul[u]&&null!==l.ul[u])&&(n=!0)}),n},l.prototype.detectSufficientdose=function(){var l=this,n=!1;return this.name_base.forEach(function(t,u){l.calc_taking_rda_ai(u)<.8*l.rda_ai[u]&&null!==l.rda_ai[u]&&(n=!0)}),n},l.prototype.getTemp=function(l){return this.temp=Object.keys(this.goods_detail[l]),!1},l.prototype.numberCheck=function(l,n){var t;null===l.target.value&&(l.target.value=""),t=""==l.target.value.replace(/\D/g,"")?null:l.target.value.replace(/[^0-9.]/g,""),new RegExp(/^[0-9]+[.]?([0-9]{0,})?$/i).test(t)||(t=1),t=parseFloat(t),console.log(t),1==t&&"1."!=l.target.value&&(l.target.value=t)},l.prototype.finalizeInitTemplate=function(){this.el.nativeElement.querySelectorAll("ion-input").forEach(function(l,n){Object(a.a)(l,".native-input",".native-input {padding-left: 0 !important;}")}),this.is_init=!0},l.prototype.presentLoading=function(){return l=this,void 0,t=function(){return function(l,n){var t,u,e,a,i={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,u&&(e=2&a[0]?u.return:a[0]?u.throw||((e=u.return)&&e.call(u),0):u.next)&&!(e=e.call(u,a[1])).done)return e;switch(u=0,e&&(a=[2&a[0],e.value]),a[0]){case 0:case 1:e=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,u=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(e=(e=i.trys).length>0&&e[e.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!e||a[1]>e[0]&&a[1]<e[3])){i.label=a[1];break}if(6===a[0]&&i.label<e[1]){i.label=e[1],e=a;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(a);break}e[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(l,i)}catch(r){a=[6,r],u=0}finally{t=e=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}}(this,function(l){switch(l.label){case 0:return[4,this.loadingController.create({message:"\u9023\u63a5\u4f3a\u670d\u5668\u4e2d"})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}})},new((n=void 0)||(n=Promise))(function(u,e){function a(l){try{r(t.next(l))}catch(n){e(n)}}function i(l){try{r(t.throw(l))}catch(n){e(n)}}function r(l){l.done?u(l.value):new n(function(n){n(l.value)}).then(a,i)}r((t=t.apply(l,[])).next())});var l,n,t},l}(),d=function(){return function(){}}(),p=t("pMnS"),b=t("Ip0R"),g=t("ra/t"),x=t("Zq1E"),f=t("gIcY"),_=t("ntG5"),h=t("CI40"),m=t("fHOL"),v=t("tXrQ"),y=t("Eq7r"),F=t("ZYjt"),k=u.nb({encapsulation:0,styles:[[".slash[_ngcontent-%COMP%]{position:relative;height:40px;white-space:nowrap;box-sizing:border-box;background:linear-gradient(19deg,transparent 49.5%,#aaa 49.5%,transparent 50.5%,transparent 50.5%)}.block[_ngcontent-%COMP%]{margin-top:16px!important}.danger[_ngcontent-%COMP%]{color:red}.insufficient[_ngcontent-%COMP%]{color:green;background-color:#7fffd4}.quantity[_ngcontent-%COMP%]{max-width:60px;margin:0 auto}.vcenter[_ngcontent-%COMP%]{vertical-align:middle}.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:1px solid #ddd!important;border-bottom-width:4px!important}tr.rda_ai[_ngcontent-%COMP%], tr.suggestion[_ngcontent-%COMP%], tr.ul[_ngcontent-%COMP%]{border-top:4px solid #ddd}th[_ngcontent-%COMP%]{padding:0!important;text-align:center}"]],data:{}});function w(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}function O(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,1,"span",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(2,null,["",":"])),(l()(),u.pb(3,0,null,null,1,"span",[["class","quantity"]],null,null,null,null,null)),(l()(),u.Fb(4,null,["",""])),(l()(),u.Fb(-1,null,[" x "])),(l()(),u.pb(6,0,null,null,1,"span",[["class","dose"]],null,null,null,null,null)),(l()(),u.Fb(7,null,["",""])),(l()(),u.pb(8,0,null,null,1,"span",[["class","unit"]],[[2,"danger",null]],null,null,null,null)),(l()(),u.Fb(9,null,[" ",""]))],null,function(l,n){var t=n.component;l(n,1,0,n.parent.context.$implicit==t.name_base[n.parent.parent.parent.parent.context.index]),l(n,2,0,n.parent.context.$implicit),l(n,4,0,t.quantity[n.parent.parent.context.index]),l(n,7,0,t.goods_detail[n.parent.parent.context.index][n.parent.context.$implicit].dose),l(n,8,0,t.checkUnit(n.parent.parent.parent.parent.context.index,n.parent.parent.context.index,n.parent.context.$implicit)),l(n,9,0,t.goods_detail[n.parent.parent.context.index][n.parent.context.$implicit].unit)})}function I(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,O)),u.ob(2,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,t.name_base[n.parent.parent.parent.context.index]==t.name_sub[n.context.$implicit])},null)}function C(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,1,"span",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(2,null,["",":"])),(l()(),u.pb(3,0,null,null,1,"span",[["class","quantity"]],null,null,null,null,null)),(l()(),u.Fb(4,null,["",""])),(l()(),u.Fb(-1,null,[" x "])),(l()(),u.pb(6,0,null,null,1,"span",[["class","dose"]],null,null,null,null,null)),(l()(),u.Fb(7,null,["",""])),(l()(),u.pb(8,0,null,null,1,"span",[["class","unit"]],[[2,"danger",null]],null,null,null,null)),(l()(),u.Fb(9,null,[" ",""]))],null,function(l,n){var t=n.component;l(n,1,0,n.parent.context.$implicit==t.name_base[n.parent.parent.parent.parent.context.index+1]),l(n,2,0,n.parent.context.$implicit),l(n,4,0,t.quantity[n.parent.parent.context.index]*t.amount[n.parent.parent.context.index]),l(n,7,0,t.goods_detail[n.parent.parent.context.index][n.parent.context.$implicit].dose),l(n,8,0,t.checkUnit(n.parent.parent.parent.parent.context.index,n.parent.parent.context.index,n.parent.context.$implicit)),l(n,9,0,t.goods_detail[n.parent.parent.context.index][n.parent.context.$implicit].unit)})}function j(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,C)),u.ob(2,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,t.name_base[n.parent.parent.parent.context.index+1]==t.name_sub[n.context.$implicit])},null)}function U(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,26,"tr",[["class","goods"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,5,"td",[["class","vcenter"]],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u.Fb(3,null,["",""])),(l()(),u.pb(4,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.pb(5,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),u.Fb(6,null,["","\u7c92(\u5319)"])),(l()(),u.pb(7,0,null,null,7,"td",[["class","vcenter"]],null,null,null,null,null)),(l()(),u.pb(8,0,null,null,6,"ion-input",[["class","form-control text-center number quantity padding-0"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,t){var e=!0,a=l.component;return"ionBlur"===n&&(e=!1!==u.yb(l,9)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==u.yb(l,9)._handleInputEvent(t.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.quantity[l.context.index]=t)&&e),"ionInput"===n&&(e=!1!==a.numberCheck(t,l.parent.parent.context.index)&&e),e},g.M,g.n)),u.ob(9,16384,null,0,x.a,[u.k],null,null),u.Cb(1024,null,f.h,function(l){return[l]},[x.a]),u.ob(11,671744,null,0,f.m,[[8,null],[8,null],[8,null],[6,f.h]],{model:[0,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,f.i,null,[f.m]),u.ob(13,16384,null,0,f.j,[[4,f.i]],null,null),u.ob(14,49152,null,0,_.B,[u.h,u.k],{type:[0,"type"]},null),(l()(),u.pb(15,0,null,null,3,"td",[["class","vcenter text-center"]],null,null,null,null,null)),(l()(),u.pb(16,0,null,null,1,"span",[["class","amount"]],null,null,null,null,null)),(l()(),u.Fb(17,null,["",""])),(l()(),u.Fb(-1,null,[" \u7c92(\u5319)"])),(l()(),u.pb(19,0,null,null,4,"td",[["class","vcenter text-center"]],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,w)),u.ob(21,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,null,1,null,I)),u.ob(23,278528,null,0,b.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.pb(24,0,null,null,2,"td",[["class","vcenter text-center"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,j)),u.ob(26,278528,null,0,b.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,11,0,t.quantity[n.context.index]),l(n,14,0,"text"),l(n,21,0,t.getTemp(n.context.index)),l(n,23,0,t.temp),l(n,26,0,t.temp)},function(l,n){var t=n.component;l(n,3,0,t.name_goods[n.context.index]),l(n,6,0,t.amount[n.context.index]),l(n,8,0,u.yb(n,13).ngClassUntouched,u.yb(n,13).ngClassTouched,u.yb(n,13).ngClassPristine,u.yb(n,13).ngClassDirty,u.yb(n,13).ngClassValid,u.yb(n,13).ngClassInvalid,u.yb(n,13).ngClassPending),l(n,17,0,t.quantity[n.context.index]*t.amount[n.context.index]),l(n,24,0,n.parent.parent.context.index+2>t.name_base.length)})}function q(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u7121\u8cc7\u6599"]))],null,null)}function H(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u7121\u8cc7\u6599"]))],null,null)}function A(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u7121\u8cc7\u6599"]))],null,null)}function L(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u7121\u8cc7\u6599"]))],null,null)}function M(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,95,"table",[["class","table table-striped table-bordered"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,21,"thead",[],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,15,"tr",[["class","no-border"]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,6,"th",[["class","text-center no-border vcenter slash"],["colspan","1"],["rowspan","2"]],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,1,"div",[["class","block"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u6210\u4efd"])),(l()(),u.pb(6,0,null,null,1,"div",[["class","block"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u71df\u990a\u54c1"])),(l()(),u.pb(8,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u6bcf\u4efd\u6578\u91cf"])),(l()(),u.pb(10,0,null,null,1,"th",[["class","text-center no-border vcenter"],["colspan","1"],["rowspan","2"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u670d\u7528\u4efd\u6578"])),(l()(),u.pb(12,0,null,null,1,"th",[["class","text-center no-border vcenter"],["colspan","1"],["rowspan","2"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u670d\u7528\u6578\u91cf"])),(l()(),u.pb(14,0,null,null,1,"th",[["class","vcenter"]],[[1,"colspan",0],[1,"rowspan",0]],null,null,null,null)),(l()(),u.Fb(15,null,["",""])),(l()(),u.pb(16,0,null,null,1,"th",[["class","vcenter"],["colspan","1"]],[[8,"hidden",0],[1,"rowspan",0]],null,null,null,null)),(l()(),u.Fb(17,null,["",""])),(l()(),u.pb(18,0,null,null,4,"tr",[["class","no-border"]],null,null,null,null,null)),(l()(),u.pb(19,0,null,null,1,"th",[["class","no-border text-center vcenter"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(20,null,["",""])),(l()(),u.pb(21,0,null,null,1,"th",[["class","no-border text-center vcenter"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(22,null,["",""])),(l()(),u.pb(23,0,null,null,72,"tbody",[],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,U)),u.ob(25,278528,null,0,b.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.pb(26,0,null,null,17,"tr",[["class","rda_ai"]],null,null,null,null,null)),(l()(),u.pb(27,0,null,null,2,"td",[["class","text-center font-weight-bold"],["colspan","3"]],null,null,null,null,null)),(l()(),u.pb(28,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u670d\u7528\u7684\u6bcf\u65e5\u5efa\u8b70\u651d\u53d6\u91cf/\u8db3\u5920\u651d\u53d6\u91cf"])),(l()(),u.pb(30,0,null,null,6,"td",[["class","text-center vcenter"]],[[2,"danger",null],[2,"insufficient",null]],null,null,null,null)),(l()(),u.pb(31,0,null,null,1,"span",[["class","dose"]],null,null,null,null,null)),(l()(),u.Fb(32,null,["",""])),(l()(),u.pb(33,0,null,null,1,"span",[["class","unit"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(34,null,[" ",""])),(l()(),u.pb(35,0,null,null,1,"span",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(-1,null,["\u55ae\u4f4d\u932f\u8aa4\uff0c\u7121\u6cd5\u63db\u7b97"])),(l()(),u.pb(37,0,null,null,6,"td",[["class","text-center vcenter"]],[[2,"danger",null],[2,"insufficient",null],[8,"hidden",0]],null,null,null,null)),(l()(),u.pb(38,0,null,null,1,"span",[["class","dose"]],null,null,null,null,null)),(l()(),u.Fb(39,null,["",""])),(l()(),u.pb(40,0,null,null,1,"span",[["class","unit"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(41,null,[" ",""])),(l()(),u.pb(42,0,null,null,1,"span",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(-1,null,["\u55ae\u4f4d\u932f\u8aa4\uff0c\u7121\u6cd5\u63db\u7b97"])),(l()(),u.pb(44,0,null,null,17,"tr",[["class","suggest_rda_ai"]],null,null,null,null,null)),(l()(),u.pb(45,0,null,null,2,"td",[["class","text-center font-weight-bold"],["colspan","3"]],null,null,null,null,null)),(l()(),u.pb(46,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u60a8\u7684\u6bcf\u65e5\u5efa\u8b70\u651d\u53d6\u91cf/\u8db3\u5920\u651d\u53d6\u91cf"])),(l()(),u.pb(48,0,null,null,6,"td",[["class","text-center vcenter"]],null,null,null,null,null)),(l()(),u.pb(49,0,null,null,1,"span",[["class","dose"]],null,null,null,null,null)),(l()(),u.Fb(50,null,["",""])),(l()(),u.pb(51,0,null,null,1,"span",[["class","unit"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(52,null,[" ",""])),(l()(),u.gb(16777216,null,null,1,null,q)),u.ob(54,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(55,0,null,null,6,"td",[["class","text-center vcenter"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.pb(56,0,null,null,1,"span",[["class","dose"]],null,null,null,null,null)),(l()(),u.Fb(57,null,["",""])),(l()(),u.pb(58,0,null,null,1,"span",[["class","unit"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(59,null,[" ",""])),(l()(),u.gb(16777216,null,null,1,null,H)),u.ob(61,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(62,0,null,null,16,"tr",[["class","ul"]],null,null,null,null,null)),(l()(),u.pb(63,0,null,null,1,"td",[["class","text-center font-weight-bold"],["colspan","3"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u670d\u7528\u7684\u6bcf\u65e5\u4e0a\u9650\u651d\u53d6\u91cf"])),(l()(),u.pb(65,0,null,null,6,"td",[["class","text-center vcenter"]],[[2,"danger",null]],null,null,null,null)),(l()(),u.pb(66,0,null,null,1,"span",[["class","dose"]],null,null,null,null,null)),(l()(),u.Fb(67,null,["",""])),(l()(),u.pb(68,0,null,null,1,"span",[["class","unit"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(69,null,[" ",""])),(l()(),u.pb(70,0,null,null,1,"span",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(-1,null,["\u55ae\u4f4d\u932f\u8aa4\uff0c\u7121\u6cd5\u63db\u7b97"])),(l()(),u.pb(72,0,null,null,6,"td",[["class","text-center vcenter"]],[[2,"danger",null],[8,"hidden",0]],null,null,null,null)),(l()(),u.pb(73,0,null,null,1,"span",[["class","dose"]],null,null,null,null,null)),(l()(),u.Fb(74,null,["",""])),(l()(),u.pb(75,0,null,null,1,"span",[["class","unit"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(76,null,[" ",""])),(l()(),u.pb(77,0,null,null,1,"span",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(-1,null,["\u55ae\u4f4d\u932f\u8aa4\uff0c\u7121\u6cd5\u63db\u7b97"])),(l()(),u.pb(79,0,null,null,16,"tr",[["class","suggest_ul"]],null,null,null,null,null)),(l()(),u.pb(80,0,null,null,1,"td",[["class","text-center font-weight-bold"],["colspan","3"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u60a8\u7684\u6bcf\u65e5\u4e0a\u9650\u651d\u53d6\u91cf"])),(l()(),u.pb(82,0,null,null,6,"td",[["class","text-center vcenter"]],null,null,null,null,null)),(l()(),u.pb(83,0,null,null,1,"span",[["class","dose"]],null,null,null,null,null)),(l()(),u.Fb(84,null,["",""])),(l()(),u.pb(85,0,null,null,1,"span",[["class","unit"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(86,null,[" ",""])),(l()(),u.gb(16777216,null,null,1,null,A)),u.ob(88,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(89,0,null,null,6,"td",[["class","text-center vcenter"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.pb(90,0,null,null,1,"span",[["class","dose"]],null,null,null,null,null)),(l()(),u.Fb(91,null,["",""])),(l()(),u.pb(92,0,null,null,1,"span",[["class","unit"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.Fb(93,null,[" ",""])),(l()(),u.gb(16777216,null,null,1,null,L)),u.ob(95,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,25,0,t.name_goods),l(n,54,0,null===t.rda_ai[n.parent.context.index]),l(n,61,0,null===t.rda_ai[n.parent.context.index+1]),l(n,88,0,null===t.ul[n.parent.context.index]),l(n,95,0,null===t.ul[n.parent.context.index+1])},function(l,n){var t=n.component;l(n,14,0,t.calColspan(n.parent.context.index),t.rowspan[n.parent.context.index]),l(n,15,0,t.name_categ[n.parent.context.index]),l(n,16,0,n.parent.context.index+2>t.name_base.length||2==t.calColspan(n.parent.context.index),t.rowspan[n.parent.context.index+1]),l(n,17,0,t.name_categ[n.parent.context.index+1]),l(n,19,0,t.name_categ[n.parent.context.index]==t.name_base[n.parent.context.index]),l(n,20,0,t.name_base[n.parent.context.index]),l(n,21,0,t.name_categ[n.parent.context.index+1]==t.name_base[n.parent.context.index+1]||n.parent.context.index+2>t.name_base.length),l(n,22,0,t.name_base[n.parent.context.index+1]),l(n,30,0,t.calc_taking_rda_ai(n.parent.context.index)>t.rda_ai[n.parent.context.index]&&null!==t.rda_ai[n.parent.context.index],t.calc_taking_rda_ai(n.parent.context.index)<.8*t.rda_ai[n.parent.context.index]&&null!==t.rda_ai[n.parent.context.index]),l(n,32,0,t.calc_taking_rda_ai(n.parent.context.index)),l(n,33,0,!t.checkUnitFinal(n.parent.context.index)),l(n,34,0,t.unit_ingredient[n.parent.context.index]),l(n,35,0,t.checkUnitFinal(n.parent.context.index)),l(n,37,0,t.calc_taking_rda_ai(n.parent.context.index+1)>t.rda_ai[n.parent.context.index+1]&&null!==t.rda_ai[n.parent.context.index+1],t.calc_taking_rda_ai(n.parent.context.index+1)<.8*t.rda_ai[n.parent.context.index+1]&&null!==t.rda_ai[n.parent.context.index+1],n.parent.context.index+2>t.name_base.length),l(n,39,0,t.calc_taking_rda_ai(n.parent.context.index+1)),l(n,40,0,!t.checkUnitFinal(n.parent.context.index+1)),l(n,41,0,t.unit_ingredient[n.parent.context.index+1]),l(n,42,0,t.checkUnitFinal(n.parent.context.index+1)),l(n,50,0,t.rda_ai[n.parent.context.index]),l(n,51,0,null===t.rda_ai[n.parent.context.index]),l(n,52,0,t.unit_ingredient[n.parent.context.index]),l(n,55,0,n.parent.context.index+2>t.name_base.length),l(n,57,0,t.rda_ai[n.parent.context.index+1]),l(n,58,0,null===t.rda_ai[n.parent.context.index+1]),l(n,59,0,t.unit_ingredient[n.parent.context.index+1]),l(n,65,0,t.calc_taking_ul(n.parent.context.index)>t.ul[n.parent.context.index]&&null!==t.ul[n.parent.context.index]),l(n,67,0,t.calc_taking_ul(n.parent.context.index)),l(n,68,0,!t.checkUnitFinal(n.parent.context.index)),l(n,69,0,t.unit_ingredient[n.parent.context.index]),l(n,70,0,t.checkUnitFinal(n.parent.context.index)),l(n,72,0,t.calc_taking_ul(n.parent.context.index+1)>t.ul[n.parent.context.index+1]&&null!==t.ul[n.parent.context.index+1],n.parent.context.index+2>t.name_base.length),l(n,74,0,t.calc_taking_ul(n.parent.context.index+1)),l(n,75,0,!t.checkUnitFinal(n.parent.context.index+1)),l(n,76,0,t.unit_ingredient[n.parent.context.index+1]),l(n,77,0,t.checkUnitFinal(n.parent.context.index+1)),l(n,84,0,t.ul[n.parent.context.index]),l(n,85,0,null===t.ul[n.parent.context.index]),l(n,86,0,t.unit_ingredient[n.parent.context.index]),l(n,89,0,n.parent.context.index+2>t.name_base.length),l(n,91,0,t.ul[n.parent.context.index+1]),l(n,92,0,null===t.ul[n.parent.context.index+1]),l(n,93,0,t.unit_ingredient[n.parent.context.index+1])})}function P(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,M)),u.ob(2,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.context.even)},null)}function E(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" \u60a8\u6709\u67d0\u4e9b\u71df\u990a\u6210\u5206\u670d\u7528\u904e\u91cf\u7684\u60c5\u5f62\u3002 "]))],null,null)}function S(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" \u60a8\u6709\u67d0\u4e9b\u71df\u990a\u6210\u5206\u670d\u7528\u5291\u91cf\u4e0d\u8db3\u7684\u60c5\u5f62\u3002 "]))],null,null)}function T(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" \u8acb\u76e1\u901f\u806f\u7d61\u6211\u5011\u7684\u5408\u4f5c\u85e5\u5e2b\uff0c\u6211\u5011\u5c07\u6703\u63d0\u4f9b\u5b8c\u6574\u7684\u514d\u8cbb\u8aee\u8a62\u670d\u52d9\uff0c\u70ba\u60a8\u505a\u500b\u4eba\u5316\u7684\u8abf\u6574\u3002 "]))],null,null)}function $(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" \u60a8\u670d\u7528\u7684\u71df\u990a\u54c1\u5291\u91cf\u7b26\u5408\u6a19\u6e96\u3002 "]))],null,null)}function R(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\u8a55\u4f30\u5efa\u8b70\uff1a"])),(l()(),u.gb(16777216,null,null,1,null,E)),u.ob(5,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,null,1,null,S)),u.ob(7,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,null,1,null,T)),u.ob(9,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,null,1,null,$)),u.ob(11,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,5,0,t.detectOverdose()),l(n,7,0,t.detectSufficientdose()),l(n,9,0,t.detectOverdose()||t.detectSufficientdose()),l(n,11,0,!t.detectOverdose()&&!t.detectSufficientdose())},null)}function z(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,9,"ion-header",[],null,null,null,g.K,g.l)),u.ob(1,49152,null,0,_.w,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,7,"ion-toolbar",[],null,null,null,g.X,g.y)),u.ob(3,49152,null,0,_.vb,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-back-button",[["defaultHref","/second"],["slot","start"],["text","\u524d\u4e00\u6b65"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.yb(l,6).onClick(t)&&e),e},g.A,g.b)),u.ob(5,49152,null,0,_.c,[u.h,u.k],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),u.ob(6,16384,null,0,h.a,[[2,m.a],v.a,u.k],{defaultHref:[0,"defaultHref"]},null),(l()(),u.pb(7,0,null,0,2,"ion-title",[],null,null,null,g.W,g.x)),u.ob(8,49152,null,0,_.tb,[u.h,u.k],null,null),(l()(),u.Fb(9,0,["",""])),(l()(),u.pb(10,0,null,null,11,"ion-content",[["padding",""]],null,null,null,g.I,g.j)),u.ob(11,49152,null,0,_.p,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,P)),u.ob(13,278528,null,0,b.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.gb(16777216,null,0,1,null,R)),u.ob(15,16384,null,0,b.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(16,0,null,0,5,"ion-row",[],null,null,null,g.T,g.u)),u.ob(17,49152,null,0,_.cb,[],null,null),(l()(),u.pb(18,0,null,0,3,"ion-col",[["text-center",""]],null,null,null,g.H,g.i)),u.ob(19,49152,null,0,_.o,[u.h,u.k],null,null),(l()(),u.pb(20,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["\xa9 2018~ Copyright: \u85e5\u98df\u8a55\u4f30\u5de5\u4f5c\u574a"]))],function(l,n){var t=n.component;l(n,5,0,"/second","\u524d\u4e00\u6b65"),l(n,6,0,"/second"),l(n,13,0,t.name_base),l(n,15,0,t.is_show)},function(l,n){l(n,9,0,n.component.title)})}function B(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-third",[],null,null,null,z,k)),u.ob(1,8503296,null,0,s,[y.a,c,i.a,v.a,u.k,F.h],null,null)],function(l,n){l(n,1,0)},null)}var D=u.lb("app-third",s,B,{},{},[]),J=t("95zI"),N=t("9opb"),Y=t("apKv"),Z=t("B4/3"),G=t("ZYCi");t.d(n,"ThirdPageModuleNgFactory",function(){return Q});var Q=u.mb(d,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[p.a,D]],[3,u.j],u.x]),u.wb(4608,b.l,b.k,[u.u,[2,b.t]]),u.wb(4608,f.s,f.s,[]),u.wb(4608,J.a,J.a,[u.z,u.g]),u.wb(4608,N.a,N.a,[J.a,u.j,u.q]),u.wb(4608,Y.a,Y.a,[J.a,u.j,u.q]),u.wb(1073742336,b.b,b.b,[]),u.wb(1073742336,f.q,f.q,[]),u.wb(1073742336,f.f,f.f,[]),u.wb(1073742336,Z.a,Z.a,[]),u.wb(1073742336,G.n,G.n,[[2,G.t],[2,G.m]]),u.wb(1073742336,d,d,[]),u.wb(1024,G.k,function(){return[[{path:"",component:s}]]},[])])})}}]);