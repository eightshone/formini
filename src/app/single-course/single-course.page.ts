import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Storage } from  '@ionic/storage';

import { SingleCourseService } from '../api/single-course/courses.service';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.page.html',
  styleUrls: ['./single-course.page.scss'],
})
export class SingleCoursePage implements OnInit {
  public course = {
    instructors: [],
    participants: []
  };
  public isJoined = false;
  public connectedUser = {
    email: ''
  };

  constructor(private courseService:  SingleCourseService, private  authService:  AuthService, private  storage:  Storage) { }

  ngOnInit() {
    const path = window.location.pathname.split('/');
    const slug = path[path.length - 1];
    this.storage.get("EMAIL").then(e => this.connectedUser['email'] = e);

    this.courseService.getData(slug).subscribe((res) => {
      if (res) {
        this.course = res.data.courses;
        this.isJoined = res.data.courses.participants.filter(e => e.email === this.connectedUser.email).length === 1;
      }
    })
  }

  async joinCourse(id: string) {
    console.log(id);
    
    await this.courseService.joinClass(id);
    this.isJoined = true;
  }

  async unjoinCourse(id: string) {
    await this.courseService.unjoinClass(id);
    this.isJoined = false;
  }

}
