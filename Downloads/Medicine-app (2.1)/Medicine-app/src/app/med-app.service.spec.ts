import { TestBed } from '@angular/core/testing';
import { MedAppService } from './med-app.service';

describe('MedAppService', () => {
  let service: MedAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
