import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { IonicModule } from '@ionic/angular';

import { AutoCompleteModule } from 'ionic2-auto-complete';

import { SecondPage } from './second.page';
import { DynamicGoodsComponent } from '../component/dynamic-goods/dynamic-goods.component';

const routes: Routes = [
  {
    path: '',
    component: SecondPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SecondPage,
    DynamicGoodsComponent
  ]
})
export class SecondPageModule {}
