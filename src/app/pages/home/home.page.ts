import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public authService: AuthService,
    public nav: NavController
  ) { }

  ngOnInit() {
  }

}
