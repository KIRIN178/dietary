import { FormGroup } from '@angular/forms';
import { Goods } from "../../class/goods";
export declare class GoodsControlService {
    constructor();
    toFormGroup(goods: Goods[]): FormGroup;
}
