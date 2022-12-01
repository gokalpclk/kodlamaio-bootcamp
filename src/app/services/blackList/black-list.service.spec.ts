import { TestBed } from '@angular/core/testing';

import { BlackListService } from './black-list.service';

describe('BlackListService', () => {
  let service: BlackListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlackListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
