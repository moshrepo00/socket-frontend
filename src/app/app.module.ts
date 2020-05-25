import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { SocketAppComponent } from './socket-app/socket-app.component';
import {HttpClientModule} from '@angular/common/http';

const config: SocketIoConfig = { url: 'https://fathomless-badlands-40049.herokuapp.com', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    SocketAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
