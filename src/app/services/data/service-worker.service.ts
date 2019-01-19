import { Injectable, isDevMode } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs/Observable/interval';
import { AlertController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { Md5 } from 'ts-md5/dist/md5';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {

    constructor(private updates: SwUpdate, private alertController:AlertController, private http:Http) {
        if(updates.isEnabled) {
            //interval(10).subscribe(()=> updates.checkForUpdate('interval').then(() => console.log('checking for updates')));
            //updates.checkForUpdate().then(() => console.log('checking for updates'));
            interval(1000 * 60 * 60).subscribe(() => this.checkForUpdates());//.then(() => console.log('checking for updates')));
            this.updates.available.subscribe(event => { 
                this.updates.activateUpdate();
                //console.log('current version is', event.current);
                //console.log('available version is', event.available);
            });
            this.updates.activated.subscribe(event => {
                this.alertUpdate();
                //console.log('old version was', event.previous);
                //console.log('new version is', event.current);
            });
        }
    }
    public checkForUpdates() {
        console.log('checking updates...');
        this.updates.checkForUpdate();
        /*this.updates.available.subscribe(event => { 
            console.log('msg1');
            console.log('current version is', event.current);
            console.log('available version is', event.available);
        });
        this.updates.activated.subscribe(event => {
            console.log('msg2');
          console.log('old version was', event.previous);
          console.log('new version is', event.current);
        });*/
        //console.log('test');
    }
    public registerNotification(token) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const httpOptions = {
            headers: headers,
            withCredentials: false,
        };
        let url;
        if(isDevMode()) {
            url = 'http://127.0.0.1';
        } else {
            url = 'https://pharmacist.dietary.cc';
        }
        //console.log(Md5.hashStr(token+',dietarygogo'))
        return this.http.post(url + "/dietary/ajax_client_register_notification",'token='+token+'&code='+Md5.hashStr(token+',dietarygogo'),httpOptions)
          .pipe(
            map(
                result =>
                {
                  return result.json()
                    .filter(item => true )
        }));
    }
    public cancelNotification(token) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const httpOptions = {
            headers: headers,
            withCredentials: false,
        };
        let url;
        if(isDevMode()) {
            url = 'http://127.0.0.1';
        } else {
            url = 'https://pharmacist.dietary.cc';
        }
        return this.http.post(url + "/dietary/ajax_client_cancel_notification",'token='+token+'&code='+Md5.hashStr(token+',dietarygogo'),httpOptions)
          .pipe(
            map(
                result =>
                {
                  return result.json()
                    .filter(item => true )
        }));
    }
    async alertUpdate() {
        let _this = this;
        const alert = await this.alertController.create({
            header: '更新通知',
            mode: 'md',
            message: '網站程式有新的版本，請問您要現在立刻更新嗎？請注意，更新的話會中斷目前的作業。',
            buttons: [
                {
                    text: '稍後',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        setTimeout(() => {
                            _this.alertUpdate();
                        }, 1000 * 60 * 5);
                    }
                }, {
                    text: '更新',
                    handler: () => {
                        location.reload();
                    }
                }
            ]
        });
        await alert.present();
    }
}
