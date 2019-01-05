/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./app.module";
import * as i2 from "./app.component";
import * as i3 from "../../node_modules/@angular/router/router.ngfactory";
import * as i4 from "./app.component.ngfactory";
import * as i5 from "@angular/common";
import * as i6 from "@angular/platform-browser";
import * as i7 from "@ionic/angular/dist/providers/angular-delegate";
import * as i8 from "@ionic/angular/dist/providers/modal-controller";
import * as i9 from "@ionic/angular/dist/providers/popover-controller";
import * as i10 from "@angular/router";
import * as i11 from "@angular/forms";
import * as i12 from "@angular/http";
import * as i13 from "@angular/common/http";
import * as i14 from "@ionic/angular/dist/providers/action-sheet-controller";
import * as i15 from "@ionic/angular/dist/providers/alert-controller";
import * as i16 from "@ionic/angular/dist/providers/config";
import * as i17 from "@ionic/angular/dist/providers/loading-controller";
import * as i18 from "@ionic/angular/dist/providers/picker-controller";
import * as i19 from "@ionic/angular/dist/providers/toast-controller";
import * as i20 from "@ionic/angular/dist/providers/menu-controller";
import * as i21 from "@ionic/angular/dist/providers/platform";
import * as i22 from "@ionic/angular/dist/providers/nav-controller";
import * as i23 from "@ionic/angular/dist/providers/events";
import * as i24 from "@ionic/angular/dist/providers/dom-controller";
import * as i25 from "@ionic-native/status-bar/ngx/index";
import * as i26 from "./services/goods/goods-name-select.service";
import * as i27 from "@ionic-native/splash-screen/ngx/index";
import * as i28 from "@ionic/angular/dist/app-initialize";
import * as i29 from "@ionic/angular/dist/ionic-module";
import * as i30 from "@ionic/angular/dist/util/ionic-router-reuse-strategy";
import * as i31 from "./app-routing.module";
import * as i32 from "ionic2-auto-complete-ng5";
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_k, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵangular_packages_core_core_f, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_i, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(4608, i6.DomSanitizer, i6.ɵDomSanitizerImpl, [i5.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i6.DomSanitizer]), i0.ɵmpd(4608, i6.HAMMER_GESTURE_CONFIG, i6.HammerGestureConfig, []), i0.ɵmpd(5120, i6.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new i6.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i6.ɵKeyEventsPlugin(p1_0), new i6.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3)]; }, [i5.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i5.DOCUMENT, i5.DOCUMENT, i6.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i6.HAMMER_LOADER]]), i0.ɵmpd(4608, i6.EventManager, i6.EventManager, [i6.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i6.ɵDomSharedStylesHost, i6.ɵDomSharedStylesHost, [i5.DOCUMENT]), i0.ɵmpd(4608, i6.ɵDomRendererFactory2, i6.ɵDomRendererFactory2, [i6.EventManager, i6.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i6.ɵDomRendererFactory2]), i0.ɵmpd(6144, i6.ɵSharedStylesHost, null, [i6.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i7.AngularDelegate, i7.AngularDelegate, [i0.NgZone, i0.ApplicationRef]), i0.ɵmpd(4608, i8.ModalController, i8.ModalController, [i7.AngularDelegate, i0.ComponentFactoryResolver, i0.Injector]), i0.ɵmpd(4608, i9.PopoverController, i9.PopoverController, [i7.AngularDelegate, i0.ComponentFactoryResolver, i0.Injector]), i0.ɵmpd(5120, i10.ActivatedRoute, i10.ɵangular_packages_router_router_g, [i10.Router]), i0.ɵmpd(4608, i10.NoPreloading, i10.NoPreloading, []), i0.ɵmpd(6144, i10.PreloadingStrategy, null, [i10.NoPreloading]), i0.ɵmpd(135680, i10.RouterPreloader, i10.RouterPreloader, [i10.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i10.PreloadingStrategy]), i0.ɵmpd(4608, i10.PreloadAllModules, i10.PreloadAllModules, []), i0.ɵmpd(5120, i10.ɵangular_packages_router_router_n, i10.ɵangular_packages_router_router_c, [i10.Router, i5.ViewportScroller, i10.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i10.ROUTER_INITIALIZER, i10.ɵangular_packages_router_router_j, [i10.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i10.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i11.ɵangular_packages_forms_forms_j, i11.ɵangular_packages_forms_forms_j, []), i0.ɵmpd(4608, i11.FormBuilder, i11.FormBuilder, []), i0.ɵmpd(4608, i12.BrowserXhr, i12.BrowserXhr, []), i0.ɵmpd(4608, i12.ResponseOptions, i12.BaseResponseOptions, []), i0.ɵmpd(5120, i12.XSRFStrategy, i12.ɵangular_packages_http_http_a, []), i0.ɵmpd(4608, i12.XHRBackend, i12.XHRBackend, [i12.BrowserXhr, i12.ResponseOptions, i12.XSRFStrategy]), i0.ɵmpd(4608, i12.RequestOptions, i12.BaseRequestOptions, []), i0.ɵmpd(5120, i12.Http, i12.ɵangular_packages_http_http_b, [i12.XHRBackend, i12.RequestOptions]), i0.ɵmpd(4608, i13.HttpXsrfTokenExtractor, i13.ɵangular_packages_common_http_http_g, [i5.DOCUMENT, i0.PLATFORM_ID, i13.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i13.ɵangular_packages_common_http_http_h, i13.ɵangular_packages_common_http_http_h, [i13.HttpXsrfTokenExtractor, i13.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i13.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i13.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i13.ɵangular_packages_common_http_http_d, i13.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i13.XhrFactory, null, [i13.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i13.HttpXhrBackend, i13.HttpXhrBackend, [i13.XhrFactory]), i0.ɵmpd(6144, i13.HttpBackend, null, [i13.HttpXhrBackend]), i0.ɵmpd(4608, i13.HttpHandler, i13.ɵHttpInterceptingHandler, [i13.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i13.HttpClient, i13.HttpClient, [i13.HttpHandler]), i0.ɵmpd(4608, i14.ActionSheetController, i14.ActionSheetController, []), i0.ɵmpd(4608, i15.AlertController, i15.AlertController, []), i0.ɵmpd(4608, i16.Config, i16.Config, []), i0.ɵmpd(4608, i17.LoadingController, i17.LoadingController, []), i0.ɵmpd(4608, i18.PickerController, i18.PickerController, []), i0.ɵmpd(4608, i19.ToastController, i19.ToastController, []), i0.ɵmpd(4608, i20.MenuController, i20.MenuController, []), i0.ɵmpd(4608, i21.Platform, i21.Platform, []), i0.ɵmpd(4608, i22.NavController, i22.NavController, [i21.Platform, i5.Location, [2, i10.Router]]), i0.ɵmpd(4608, i23.Events, i23.Events, []), i0.ɵmpd(4608, i24.DomController, i24.DomController, []), i0.ɵmpd(4608, i25.StatusBar, i25.StatusBar, []), i0.ɵmpd(4608, i26.GoodsNameSelectService, i26.GoodsNameSelectService, [i12.Http]), i0.ɵmpd(4608, i27.SplashScreen, i27.SplashScreen, []), i0.ɵmpd(1073742336, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i6.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i10.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i10.ɵangular_packages_router_router_h, i10.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(256, i16.ConfigToken, undefined, []), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0) { return [i6.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i10.ɵangular_packages_router_router_i(p1_0), i28.appInitialize(p2_0)]; }, [[2, i0.NgProbeToken], i10.ɵangular_packages_router_router_h, i16.ConfigToken]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i6.BrowserModule, i6.BrowserModule, [[3, i6.BrowserModule]]), i0.ɵmpd(1073742336, i29.IonicModule, i29.IonicModule, []), i0.ɵmpd(1024, i10.ɵangular_packages_router_router_a, i10.ɵangular_packages_router_router_e, [[3, i10.Router]]), i0.ɵmpd(512, i10.UrlSerializer, i10.DefaultUrlSerializer, []), i0.ɵmpd(512, i10.ChildrenOutletContexts, i10.ChildrenOutletContexts, []), i0.ɵmpd(256, i10.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i5.LocationStrategy, i10.ɵangular_packages_router_router_d, [i5.PlatformLocation, [2, i5.APP_BASE_HREF], i10.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i5.Location, i5.Location, [i5.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i10.ROUTES, function () { return [[{ path: "", redirectTo: "home", pathMatch: "full" }, { path: "home", loadChildren: "./home/home.module#HomePageModule" }, { path: "main", loadChildren: "./main/main.module#MainPageModule" }, { path: "second", loadChildren: "./second/second.module#SecondPageModule" }, { path: "third", loadChildren: "./third/third.module#ThirdPageModule" }]]; }, []), i0.ɵmpd(512, i10.RouteReuseStrategy, i30.IonicRouteStrategy, []), i0.ɵmpd(1024, i10.Router, i10.ɵangular_packages_router_router_f, [i0.ApplicationRef, i10.UrlSerializer, i10.ChildrenOutletContexts, i5.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i10.ROUTES, i10.ROUTER_CONFIGURATION, [2, i10.UrlHandlingStrategy], [2, i10.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i10.RouterModule, i10.RouterModule, [[2, i10.ɵangular_packages_router_router_a], [2, i10.Router]]), i0.ɵmpd(1073742336, i31.AppRoutingModule, i31.AppRoutingModule, []), i0.ɵmpd(1073742336, i11.ɵangular_packages_forms_forms_bc, i11.ɵangular_packages_forms_forms_bc, []), i0.ɵmpd(1073742336, i11.FormsModule, i11.FormsModule, []), i0.ɵmpd(1073742336, i11.ReactiveFormsModule, i11.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i32.AutoCompleteModule, i32.AutoCompleteModule, []), i0.ɵmpd(1073742336, i12.HttpModule, i12.HttpModule, []), i0.ɵmpd(1073742336, i13.HttpClientXsrfModule, i13.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i13.HttpClientModule, i13.HttpClientModule, []), i0.ɵmpd(1073742336, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i13.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i13.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", [])]); });
export { AppModuleNgFactory as AppModuleNgFactory };
//# sourceMappingURL=app.module.ngfactory.js.map