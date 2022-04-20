import { TestBed } from '@angular/core/testing';

import { ExhangeService } from './exhange.service';

describe('ExhangeService', () => {
  let service: ExhangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
