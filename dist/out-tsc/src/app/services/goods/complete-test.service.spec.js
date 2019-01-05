import { TestBed } from '@angular/core/testing';
import { CompleteTestService } from './complete-test.service';
describe('CompleteTestService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CompleteTestService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=complete-test.service.spec.js.map