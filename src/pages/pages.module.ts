import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Page2 } from './page2/page2';
import { ConnectPage } from './connect/connect';
import { OrdersPage } from './orders/orders';
import { DashboardPage } from './dashboard/dashboard';
import { TabsPage } from './tabs/tabs';
import { ConnectDonePage } from './connect-done/connect-done';

@NgModule({
  declarations: [
    Page2,
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
    // Page2,
  ],
  entryComponents: [],
  providers: [ ],
})

export class PagesModule {}
