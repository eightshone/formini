import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public menus = []
  public appPages = [
    {
      title: 'Acceuil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Rechercher une formation',
      url: '/courses',
      icon: 'newspaper'
    },
    {
      title: 'Espace candidat',
      url: '/login/c',
      icon: 'person'
    },
    {
      title: 'Esapce formateur',
      url: '/login/f',
      icon: 'person'
    }
  ];
  public connectedAppPages = [
    {
      title: 'Acceuil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Rechercher une formation',
      url: '/courses',
      icon: 'newspaper'
    },
    {
      title: 'Mes formations',
      url: '/training',
      icon: 'albums'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private  authService:  AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname;
    
    if (path !== undefined) {
      this.authService.isLoggedIn().subscribe(res => {
        if (res) {
          this.menus = this.connectedAppPages;
        } else {
          this.menus = this.appPages;
        }
        this.selectedIndex = this.menus.findIndex(page => page.url.toLowerCase() === path.toLowerCase());
      });
    }
  }
}
