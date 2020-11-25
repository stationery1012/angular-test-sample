import { TestBed } from '@angular/core/testing';

import { AService } from './a.service';
import { BService } from './b.service';

describe('AService', () => {
  let service: AService;
  let bService: jasmine.SpyObj<BService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('BService', ['getValue']);
    TestBed.configureTestingModule({
      providers: [AService, { provide: BService, useValue: spy }],
    });
    service = TestBed.inject(AService);
    bService = TestBed.inject(BService) as jasmine.SpyObj<BService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getValue', () => {
    it('value is set', () => {
      bService.getValue.and.returnValue('angular-test-sample');
      expect(service.getValue()).toEqual('angular-test-sample');
    });
  });
});
