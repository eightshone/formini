import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleCoursePage } from './single-course.page';

describe('SingleCoursePage', () => {
  let component: SingleCoursePage;
  let fixture: ComponentFixture<SingleCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
