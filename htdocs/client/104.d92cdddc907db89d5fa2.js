(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{GooB:function(t,e,n){"use strict";n.r(e),n.d(e,"IonTab",function(){return a}),n.d(e,"IonTabs",function(){return s});var i=n("B5Ai"),o=n("cBjU"),r=n("jaT/"),a=function(){function t(){this.loaded=!1,this.active=!1}return t.prototype.componentWillLoad=function(){},t.prototype.setActive=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return t.sent(),this.active=!0,[2]}})})},t.prototype.prepareLazyLoaded=function(){return this.loaded||null==this.component?Promise.resolve():(this.loaded=!0,Object(r.a)(this.delegate,this.el,this.component,["ion-page"]))},t.prototype.hostData=function(){var t=this.tab,e=this.active;return{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":"tab-button-"+t,id:"tab-view-"+t,class:{"ion-page":void 0===this.component,"tab-hidden":!e}}},t.prototype.render=function(){return Object(o.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-tab"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{active:{type:Boolean,attr:"active",mutable:!0},component:{type:String,attr:"component"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},setActive:{method:!0},tab:{type:String,attr:"tab"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".tab-hidden.sc-ion-tab-h{display:none!important}"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){this.transitioning=!1,this.tabs=[],this.useRouter=!1}return t.prototype.componentWillLoad=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(t){return this.useRouter||(this.useRouter=!!this.doc.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.tabs=Array.from(this.el.querySelectorAll("ion-tab")),this.ionNavWillLoad.emit(),this.componentWillUpdate(),[2]})})},t.prototype.componentDidLoad=function(){this.initSelect()},t.prototype.componentDidUnload=function(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0},t.prototype.componentWillUpdate=function(){var t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)},t.prototype.onTabClicked=function(t){var e=t.detail,n=e.href,i=e.tab,o=this.tabs.find(function(t){return t.tab===i});if(this.useRouter&&void 0!==n){var r=this.doc.querySelector("ion-router");r&&r.push(n)}else o&&this.select(o)},t.prototype.select=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(n){switch(n.label){case 0:return[4,this.getTab(t)];case 1:return e=n.sent(),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 2:return n.sent(),[4,this.notifyRouter()];case 3:return n.sent(),this.tabSwitch(),[2,!0]}})})},t.prototype.setRouteId=function(t){return i.a(this,void 0,void 0,function(){var e,n=this;return i.c(this,function(i){switch(i.label){case 0:return[4,this.getTab(t)];case 1:return e=i.sent(),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,{changed:!1,element:this.selectedTab}];case 2:return i.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return n.tabSwitch()}}]}})})},t.prototype.getRouteId=function(){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(e){return[2,void 0!==(t=this.selectedTab&&this.selectedTab.tab)?{id:t,element:this.selectedTab}:void 0]})})},t.prototype.getTab=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(n){return(e="string"==typeof t?this.tabs.find(function(e){return e.tab===t}):t)||console.error('tab with id: "'+e+'" does not exist'),[2,e]})})},t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab)},t.prototype.initSelect=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(t){switch(t.label){case 0:return this.useRouter?[2]:[4,Promise.all(this.tabs.map(function(t){return t.componentOnReady()}))];case 1:return t.sent(),[4,this.select(this.tabs[0])];case 2:return t.sent(),[2]}})})},t.prototype.setActive=function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionNavWillChange.emit(),t.setActive())},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionChange.emit({tab:t}),this.ionNavDidChange.emit())},t.prototype.notifyRouter=function(){if(this.useRouter){var t=this.doc.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)},t.prototype.shouldSwitch=function(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning},t.prototype.render=function(){return[Object(o.b)("slot",{name:"top"}),Object(o.b)("div",{class:"tabs-inner"},Object(o.b)("slot",null)),Object(o.b)("slot",{name:"bottom"})]},Object.defineProperty(t,"is",{get:function(){return"ion-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},doc:{context:"document"},el:{elementRef:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabs:{state:!0},useRouter:{type:Boolean,attr:"use-router",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionTabButtonClick",method:"onTabClicked"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-tabs-h{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner.sc-ion-tabs, .sc-ion-tabs-h{contain:layout size style}.tabs-inner.sc-ion-tabs{position:relative;-ms-flex:1;flex:1}"},enumerable:!0,configurable:!0}),t}()}}]);