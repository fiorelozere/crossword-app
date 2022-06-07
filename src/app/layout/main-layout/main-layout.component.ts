import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../pages/auth/services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private nav: NavController
  ) { }

  ngOnInit() {}

  signOut() {
    this.authService.signOut().then(() => this.nav.navigateBack('/auth'));
  }

}
