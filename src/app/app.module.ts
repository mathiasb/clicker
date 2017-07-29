import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ZingAppComponent } from './app.component';
import {
  PagesModule,
  ConnectPage,
  OrdersPage
 } from '../pages';
import {
  ClickersService,
  StorageService
} from '../services';

@NgModule({
  declarations: [
    ZingAppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    IonicModule.forRoot(ZingAppComponent),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ZingAppComponent,
    ConnectPage,
    OrdersPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ClickersService,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
})

export class AppModule {}
