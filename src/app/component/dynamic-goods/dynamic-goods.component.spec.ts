import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGoodsComponent } from './dynamic-goods.component';

describe('DynamicGoodsComponent', () => {
  let component: DynamicGoodsComponent;
  let fixture: ComponentFixture<DynamicGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
