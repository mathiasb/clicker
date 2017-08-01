import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ConnectPage } from './connect/connect';
import { OrdersPage } from './orders/orders';
import { DashboardPage } from './dashboard/dashboard';
import { TabsPage } from './tabs/tabs';
import { ConnectDonePage } from './connect-done/connect-done';

@NgModule({
  declarations: [
    ConnectPage,
    OrdersPage,
    DashboardPage,
    ConnectDonePage,
    TabsPage
  ],
  imports: [ IonicModule ],
  exports: [
    ConnectPage,
    OrdersPage,
    DashboardPage,
    ConnectDonePage,
    TabsPage
  ],
  entryComponents: [],
  providers: [ ],
})

export class PagesModule {}
