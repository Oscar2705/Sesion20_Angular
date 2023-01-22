import { TestBed } from '@angular/core/testing';

import { PermisesGuard } from './permises.guard';

describe('PermisesGuard', () => {
  let guard: PermisesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
