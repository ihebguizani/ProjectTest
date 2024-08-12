import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public router:Router) {
  }

  goToWhoAreWe1() {
      this.router.navigateByUrl('/whoAreWe1');
  }

  goToWhoAreWe2() {
    this.router.navigateByUrl('/whoAreWe2');
  }
}
