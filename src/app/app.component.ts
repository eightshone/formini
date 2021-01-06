import { Component, OnInit } from '@angular/core';

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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === path.toLowerCase());
    }
  }
}
