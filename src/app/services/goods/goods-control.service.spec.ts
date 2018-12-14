import { TestBed } from '@angular/core/testing';

import { GoodsControlService } from './goods-control.service';

describe('GoodsControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodsControlService = TestBed.get(GoodsControlService);
    expect(service).toBeTruthy();
  });
});
