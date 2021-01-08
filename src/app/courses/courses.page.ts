import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../api/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  public courses: Array<any>;

  constructor(private coursesService:  CoursesService) { }

  ngOnInit() {
    this.coursesService.getData().subscribe((res) => {
      if (res) {
        this.courses = res.data.courses;
        
      }
    })
  }

}
