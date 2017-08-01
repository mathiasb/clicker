/* tslint:disable:component-selector component-class-suffix */
import { Component } from '@angular/core';
import { ConnectPage } from '../connect/connect';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  connectPage = ConnectPage;
  dashboardPage = DashboardPage;
}
