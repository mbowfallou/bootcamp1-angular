import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('Authentication OK', () => {
    expect(service.login('falloumbow@gmail.com', 'passer')).toBeTrue();
  });

  it('Authentication KO', () => {
    expect(service.login('falloumbow@gmail.com', 'wrongPassword')).toBeFalse();
  });

  it('CALCUL OK', () => {
    expect(10+10).toBe(20);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
