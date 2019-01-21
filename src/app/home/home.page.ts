import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Meta, Title } from '@angular/platform-browser';
import { NavController, LoadingController } from '@ionic/angular';
import { ShareService } from "../services/data/share.service";
import { ServiceWorkerService } from "../services/data/service-worker.service";
import { AngularFireMessaging } from '@angular/fire/messaging';

import { Observable } from 'rxjs/observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { of } from 'rxjs/observable/of';
import { mapTo } from 'rxjs/operator/mapTo';
import { mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    users = {
        name: '',
        birthday: '',
        gender: '',
        is_pregnant: '',
        is_milk: '',
        is_remember: false
    };
    title = '藥食評估 - 自我評估小幫手';
	private is_birthday_init;
    private default_year;
    deferredPrompt = null;
    token = null;
    constructor(public navCtrl: NavController, private data: ShareService, private tt: Title, private afMessaging: AngularFireMessaging, private sws: ServiceWorkerService) {
        this.tt.setTitle(this.title);
		if(localStorage.getItem('name') !== null) {
			this.users.name = localStorage.name;
			this.users.birthday = localStorage.birthday;
			this.users.gender = localStorage.gender;
			this.users.is_pregnant = localStorage.is_pregnant;
			this.users.is_milk = localStorage.is_milk;
            this.users.is_remember = true;
		}
        //this.token = localStorage.getItem('token');
        //console.log(this.deferredPrompt.isTrusted);
        let _this = this;
        window.addEventListener('beforeinstallprompt', function (e) {
            //alert('install testing msg');
            e.preventDefault();
            _this.deferredPrompt = e;
        });
        this.afMessaging.getToken
        .pipe(mergeMapTo(this.afMessaging.tokenChanges))
        .subscribe(
            (token) => { 
                _this.token = token;
                //console.log(token);
                if(token === null && localStorage.getItem('token') !== null) {
                    _this.sws.cancelNotification(localStorage.getItem('token')).subscribe(result=>{});;
                    localStorage.removeItem('token');
                }
            },
            (error) => { console.error(error); },  
        );
    }
    ngOnInit() {
    }
	test() {
		alert(this.users.is_remember);
	}
	next() {
		if(this.users.gender == 'm') {
			this.users.is_pregnant = '';
			this.users.is_milk = '';
		}
		if(this.users.is_remember) {
			localStorage.name = this.users.name;
			localStorage.birthday = this.users.birthday;
			localStorage.gender = this.users.gender;
			localStorage.is_pregnant = this.users.is_pregnant;
			localStorage.is_milk = this.users.is_milk;
			localStorage.is_remember = this.users.is_remember;
		}
		else {
			localStorage.removeItem('name');
            localStorage.removeItem('birthday');
            localStorage.removeItem('gender');
            localStorage.removeItem('is_pregnant');
            localStorage.removeItem('is_milk');
			localStorage.removeItem('is_remember');
            //localStorage.clear();
		}
        let param = [];
        param["user"] = this.users;
		this.data.changeParam(param);
		this.navCtrl.navigateForward('/second');
	}
    clickBirthday() {
        if(this.users.birthday == '')
        {
            var date = new Date();
            date.setDate(date.getDate() - 365*18);
            var month = '06';
            var day = '15';
            var year = date.getFullYear();
            this.default_year = year;
            this.users.birthday = [year, month, day].join('-');
			this.is_birthday_init = true;
        }
		else
			this.is_birthday_init = false;
    }
	clickCancel() {
		if(this.users.birthday == this.default_year+'-06-15' && this.is_birthday_init)
			this.users.birthday = '';
	}
    requestPushNotificationsPermission() {
        let _this = this;
        this.afMessaging.requestToken
            .subscribe(
            (token) => {
                console.log('Permission granted! Save to the server!', token);
                _this.token = token;
                if(token !== null) {
                    _this.sws.registerNotification(token).subscribe(result=>{});
                    localStorage.token = token;
                }
            },
            (error) => {
              console.error(error);
            }
          );
    }
    requestAdd2HomeScreen() {
        if(this.deferredPrompt !== null) {
            //alert('a2hs prompt');
            //console.log(this.deferredPrompt)
            this.deferredPrompt.prompt();
        }
    }
}
