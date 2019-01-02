import { TestBed } from '@angular/core/testing';

import { GoodsNameSelectService } from './goods-name-select.service';

describe('GoodsNameSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodsNameSelectService = TestBed.get(GoodsNameSelectService);
    expect(service).toBeTruthy();
  });
});
