import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCoursePage } from './single-course.page';

const routes: Routes = [
  {
    path: '',
    component: SingleCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleCoursePageRoutingModule {}
