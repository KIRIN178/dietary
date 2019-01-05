import { TestBed } from '@angular/core/testing';
import { GoodsService } from './goods.service';
describe('GoodsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(GoodsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=goods.service.spec.js.map