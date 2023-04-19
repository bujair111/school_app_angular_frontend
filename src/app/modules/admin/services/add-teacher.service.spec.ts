import { TestBed } from '@angular/core/testing';

import { AddTeacherService } from './add-teacher.service';

describe('AddTeacherService', () => {
  let service: AddTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
