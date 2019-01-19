import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AutoCompleteModule } from 'ionic2-auto-complete';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicGoodsComponent } from './component/dynamic-goods/dynamic-goods.component';
import { GoodsNameSelectService } from './services/goods/goods-name-select.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, AutoCompleteModule, HttpModule, HttpClientModule, AngularFireModule.initializeApp(environment.firebase), AngularFireMessagingModule, ServiceWorkerModule.register('combined-sw.js')],
  //ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    GoodsNameSelectService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
