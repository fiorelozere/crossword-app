import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: [ './auth.page.scss' ],
})
export class AuthPage implements OnInit {

  credentialForm = this.fb.group({
    email: [ null, [ Validators.required, Validators.email ] ],
    password: [ null, [ Validators.required, Validators.minLength(6) ] ]
  });

  constructor(
    private fb: FormBuilder,
    private nav: NavController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AuthService
  ) {
  }


  get email() {
    return this.credentialForm.get('email');
  }

  get password() {
    return this.credentialForm.get('password');
  }

  ngOnInit() {
  }

  async signUp() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.signUp(this.credentialForm.value).then(user => {
      loading.dismiss();
      this.nav.navigateForward('/levels', { replaceUrl: true });
    }, async error => {
      console.log(error)
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Dicka shkoi gabim',
        message: error.message,
        buttons: [ 'Ok' ]
      });
      await alert.present();
    });
  }

  async signIn() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.signIn(this.credentialForm.value).then(user => {
      loading.dismiss();
      this.nav.navigateForward('/levels', { replaceUrl: true });
    }, async error => {
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Dicka shkoi gabim',
        message: error.message,
        buttons: [ 'Ok' ]
      });
      await alert.present();
    });
  }
}
