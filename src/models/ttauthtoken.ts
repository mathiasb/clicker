export class TtAuthToken {
  public access_token: string;
  public token_type: string;
  public expires_in: number;
  public store: TtStore;

  constructor(response: any) {
    this.access_token = response.access_token;
    this.token_type = response.token_type;
    this.expires_in = response.expires_in;
    this.store = new TtStore(response.store);
  }
}

export class TtStore {
  id: string;
  name: string;
  language: string;
  url: string;
  storekeeper_email: string;
  created_at: string;
  modified_at: string;

  constructor(rsp_store: any) {
    this.id = rsp_store.id;
    this.name = rsp_store.name;
    this.language = rsp_store.language;
    this.url = rsp_store.url;
    this.storekeeper_email = rsp_store.storekeeper_email;
    this.created_at = rsp_store.created_at;
    this.modified_at = rsp_store.modified_at;
  }
}
