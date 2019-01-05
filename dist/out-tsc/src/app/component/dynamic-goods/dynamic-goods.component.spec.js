import { async, TestBed } from '@angular/core/testing';
import { DynamicGoodsComponent } from './dynamic-goods.component';
describe('DynamicGoodsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DynamicGoodsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DynamicGoodsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dynamic-goods.component.spec.js.map