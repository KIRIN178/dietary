import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ShareService } from "../services/data/share.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    private users = {
        name: '',
        birthday: '',
        gender: '',
        is_pregnant: '',
        is_milk: '',
        is_remember: ''
    };
	private is_birthday_init;
    private default_year;
    constructor(public navCtrl: NavController, private data: ShareService) {
        //this.minDate = new Date();
		if(localStorage.getItem('name') !== null) {
			this.users.name = localStorage.name;
			this.users.birthday = localStorage.birthday;
			this.users.gender = localStorage.gender;
			this.users.is_pregnant = localStorage.is_pregnant;
			this.users.is_milk = localStorage.is_milk;
            this.users.is_remember = true;
		}
		
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
			localStorage.removeItem('is_remember');
		}
		this.data.changeParam(this.users);
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
}
