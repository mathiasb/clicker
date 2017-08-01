import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectDonePage } from './connect-done';

@NgModule({
  declarations: [
    ConnectDonePage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectDonePage),
  ],
  exports: [
    ConnectDonePage
  ]
})
export class ConnectDonePageModule {}
