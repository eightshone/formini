import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from  "@angular/router";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public pageName: string;

  constructor(private activatedRoute: ActivatedRoute, private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {
    const pageId = this.activatedRoute.snapshot.paramMap.get('id');
    if(pageId === 'c') {
      this.pageName = 'Espace candidat'
    } else {
      this.pageName = 'Espace formateur'
    }
  }

  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      this.router.navigateByUrl('home');
    });
  }

}
