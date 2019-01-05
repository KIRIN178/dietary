import { TestBed } from '@angular/core/testing';
import { SuggestionService } from './suggestion.service';
describe('SuggestionService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SuggestionService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=suggestion.service.spec.js.map