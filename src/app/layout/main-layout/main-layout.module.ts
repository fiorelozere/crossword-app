import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../routes';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: appRoutes.mainLayoutRoutes
  }
];

@NgModule({
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class MainLayoutModule { }
