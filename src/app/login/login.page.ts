import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public pageName: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const pageId = this.activatedRoute.snapshot.paramMap.get('id');
    if(pageId === 'c') {
      this.pageName = 'Espace candidat'
    } else {
      this.pageName = 'Espace formateur'
    }
  }

}
