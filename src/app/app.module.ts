import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ZingAppComponent } from './app.component';
import {
  PagesModule,
  ConnectPage,
  OrdersPage,
  DashboardPage,
  ConnectDonePage,
  TabsPage
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
    HttpModule,
    PagesModule,
    IonicModule.forRoot(ZingAppComponent),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ZingAppComponent,
    ConnectPage,
    OrdersPage,
    DashboardPage,
    ConnectDonePage,
    TabsPage
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
