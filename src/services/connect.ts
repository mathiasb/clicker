import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { TtAuthToken } from '../models';

@Injectable()
export class ConnectService {
  private authcode = 'code=authcode_nlTtIxkZQUDibsrfakCKLub99HfQjN';
  private appId = 'Uz';
  private ClientId = 'client_id=clientid_KXwOIyaQv2AwvBm8SU06cxZrFq09Yv';
  private ClientSecret = 'client_secret=clientsecret_jOvbo29NdmEOOP56EvGN8XgLDyfonU5FFOcWQqLU';
  private ttUrl = 'https://tictail.com/oauth/';
  private baseUrl = 'https://fallacious-stretch.surge.sh/';

  constructor(private http: Http) {}

  getTictailAuth(code: string): Observable<TtAuthToken> {
    const uri = this.ttUrl + 'token?' + this.ClientId + '&' + this.ClientSecret + '&' + code + '&grant_type=authorization_code';
    return this.http.get(uri)
      .map(res => res.json().data as TtAuthToken);
  }

  connectToTictailUrl(): string {
    return this.ttUrl + 'authorize?response_type=code&' + this.ClientId + '&redirect_uri=' + this.baseUrl;
  }
}
