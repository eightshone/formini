import { Component, OnInit } from '@angular/core';
import { HomeService } from '../api/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public description: string;
  public courses: Array<any>;

  constructor(private homeService:  HomeService) { }

  ngOnInit() {
    this.homeService.getData().subscribe((res) => {
      if(res) {
        this.description = res.data.description;
        this.courses = res.data.courses;
      }
      
    })
  }

}
