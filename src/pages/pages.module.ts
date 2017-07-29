import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Page2 } from './page2/page2';
import { ConnectPage } from './connect/connect';
import { OrdersPage } from './orders/orders';

@NgModule({
  declarations: [
    Page2,
    ConnectPage,
    OrdersPage
  ],
  imports: [ IonicModule ],
  exports: [
    ConnectPage,
    OrdersPage
    // Page2,
  ],
  entryComponents: [],
  providers: [ ],
})

export class PagesModule {}
