import { NavController } from '@ionic/angular';
import { ShareService } from "../services/data/share.service";
export declare class HomePage {
    navCtrl: NavController;
    private data;
    users: {
        name: string;
        birthday: string;
        gender: string;
        is_pregnant: string;
        is_milk: string;
        is_remember: boolean;
    };
    private is_birthday_init;
    private default_year;
    constructor(navCtrl: NavController, data: ShareService);
    ngOnInit(): void;
    test(): void;
    next(): void;
    clickBirthday(): void;
    clickCancel(): void;
}
