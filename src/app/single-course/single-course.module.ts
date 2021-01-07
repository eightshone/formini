import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleCoursePageRoutingModule } from './single-course-routing.module';

import { SingleCoursePage } from './single-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleCoursePageRoutingModule
  ],
  declarations: [SingleCoursePage]
})
export class SingleCoursePageModule {}
