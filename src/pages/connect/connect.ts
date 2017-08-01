/* tslint:disable:component-selector component-class-suffix */
import { Component } from '@angular/core';
import { ConnectService } from '../../services';

@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {
  public title: string;

  constructor(private connectService: ConnectService) {
    this.title = 'Connect';
  }

  onConnectTictail() {
    alert('Connecting to Tictail at ' + this.connectService.connectToTictailUrl());
  }
}
