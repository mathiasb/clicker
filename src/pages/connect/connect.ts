/* tslint:disable:component-selector component-class-suffix */
import { Component } from '@angular/core';

@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {
  public title: string;

  constructor() {
    this.title = 'Connect';
  }

  onConnectTictail() {
    alert('Connecting to Tictail at http://tictail.com');
  }
}
