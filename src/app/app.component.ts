import { Component } from '@angular/core';
//import {enableProdMode} from '@angular/core';
//enableProdMode();
import { AngularFireMessaging } from '@angular/fire/messaging';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ServiceWorkerService } from "./services/data/service-worker.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private sws: ServiceWorkerService,
        private afMessaging: AngularFireMessaging
    ) {
        this.initializeApp();
        this.sws.checkForUpdates();
        if(this.platform.is('android')) {
            this.statusBar.backgroundColorByHexString('#fff');
        }
        /*navigator.serviceWorker.getRegistration().then(reg => {
            //console.log('reg: '+reg)
            //if(typeof reg !== 'undefined') {
                let options = {
                  body: 'testing',
                  data: 'aaa',
                  vibrate: [100, 50, 10, 20, 20]
                };

                reg.showNotification('title', options).then(res => {
                    console.log("showed notification", res)
                }, err => {
                    console.error(err)
                });
            //}
        });
        let _this = this;
        console.log('listening');
        this.afMessaging.messaging.subscribe(messaging => {
            messaging.onTokenRefresh = messaging.onTokenRefresh.bind(messaging);
            messaging.onMessage = messaging.onMessage.bind(messaging);
            _this.afMessaging.messages.subscribe(message => {
                console.log(message);
            });
        });*/
    }

    initializeApp() {
        this.platform.ready().then(() => {
          this.statusBar.styleDefault();
          this.splashScreen.hide();
        });
    }
}
