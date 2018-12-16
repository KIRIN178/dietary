import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Goods } from "../../class/goods";
import { GoodsControlService } from "../../services/goods/goods-control.service";
import { CompleteTestService } from '../../services/goods/complete-test.service';

@Component({
  selector: 'app-dynamic-goods',
  templateUrl: './dynamic-goods.component.html',
  styleUrls: ['./dynamic-goods.component.scss'],
})
export class DynamicGoodsComponent {
  @Input() goods: Goods[] = [];
  form: FormGroup;

  constructor(private gcs: GoodsControlService, public completeTestService: CompleteTestService) {
      
  }
    
  ngOnInit() {
    this.form = this.gcs.toFormGroup(this.goods);
  }
}
