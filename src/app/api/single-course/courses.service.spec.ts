import { TestBed } from '@angular/core/testing';

import { SingleCourseService } from './courses.service';

describe('CoursesService', () => {
  let service: SingleCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
