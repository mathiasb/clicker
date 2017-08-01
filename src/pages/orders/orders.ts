/* tslint:disable:component-selector component-class-suffix */
import { Component } from '@angular/core';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  public title: string;

  constructor() {
    this.title = 'Sales';
  }
}
