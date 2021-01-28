import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  constructor (public router: Router) {

  }

  isHome() {
    if (this.router.url === '/home') {
      return "navbar-nav mr-auto home";
    } else {
      return "navbar-nav mr-auto feature";
    }
  }
}
