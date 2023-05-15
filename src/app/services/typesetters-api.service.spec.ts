import { TestBed } from '@angular/core/testing';

import { TypesettersApiService } from './typesetters-api.service';

describe('TypesettersApiService', () => {
  let service: TypesettersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesettersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
