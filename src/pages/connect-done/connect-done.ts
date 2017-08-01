/* tslint:disable:component-selector component-class-suffix */
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavParams } from 'ionic-angular';
import { TtAuthToken } from '../../models';

@Component({
  selector: 'page-connect-done',
  templateUrl: 'connect-done.html',
})
export class ConnectDonePage implements OnInit {
  public title: string;
  public authcode = 'code=authcode_nlTtIxkZQUDibsrfakCKLub99HfQjN';
  private appId = 'Uz';
  private ClientId = 'client_id=clientid_KXwOIyaQv2AwvBm8SU06cxZrFq09Yv';
  private ClientSecret = 'client_secret=clientsecret_jOvbo29NdmEOOP56EvGN8XgLDyfonU5FFOcWQqLU';
  private ttUrl = 'https://tictail.com/oauth/token';
  private ttAuthResponse: TtAuthToken;

  constructor(private http: Http) {
    this.title = 'Connection Done';
  }

  ngOnInit() {
    const code = this.getQueryVariable('code');
    if (code != null) {
      this.authcode = 'code=' + code;
    }
    this.getTictailAuth(this.authcode);
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

  getTictailAuth(code: string) {
    const uri = this.ttUrl + '?' + this.ClientId + '&' + this.ClientSecret + '&' + this.authcode + '&grant_type=authorization_code';
    return this.http.get(uri)
      .map(res => res.json().data as TtAuthToken)
      .subscribe(ttdata => this.ttAuthResponse = ttdata);
  }
}
