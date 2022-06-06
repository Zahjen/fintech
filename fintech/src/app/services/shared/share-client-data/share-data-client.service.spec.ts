import { TestBed } from '@angular/core/testing';

import { ShareDataClientService } from './share-data-client.service';

describe('ShareDataClientService', () => {
  let service: ShareDataClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDataClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
