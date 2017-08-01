/* tslint:disable:component-selector component-class-suffix */
import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ConnectService } from '../../services';
import { TtAuthToken } from '../../models';

@Component({
  selector: 'page-connect-done',
  templateUrl: 'connect-done.html',
})
export class ConnectDonePage implements OnInit {
  public title: string;
  private ttAuthResponse: TtAuthToken;

  constructor(private connectService: ConnectService) {
    this.title = 'Connection Done';
  }

  ngOnInit() {
    const code = 'code=' + this.getQueryVariable('code');
    this.connectService.getTictailAuth(code)
      .subscribe(ttdata => { this.ttAuthResponse = ttdata; });
  }

  getQueryVariable(variable: string) {
      const query = window.location.search.substring(1);
      const vars = query.split('&');
      for (let i = 0; i < vars.length; i++) {
          const pair = vars[i].split('=');
          if (decodeURIComponent(pair[0]) === variable) {
              return decodeURIComponent(pair[1]);
          }
      }
      console.log('Query variable %s not found', variable);
  }
}
