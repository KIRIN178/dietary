import { TestBed } from '@angular/core/testing';
import { ShareService } from './share.service';
describe('ShareService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ShareService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=share.service.spec.js.map