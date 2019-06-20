import { TestBed, inject } from '@angular/core/testing';

import { SessionTimeoutWarningService } from './session-timeout-warning.service';

describe('SessionTimeoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionTimeoutWarningService]
    });
  });

  it('should be created', inject([SessionTimeoutWarningService], (service: SessionTimeoutService) => {
    expect(service).toBeTruthy();
  }));
});
