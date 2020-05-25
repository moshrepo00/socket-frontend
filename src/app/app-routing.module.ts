import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SocketAppComponent} from './socket-app/socket-app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'socket'
  },
  {
    path: 'socket',
    component: SocketAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
