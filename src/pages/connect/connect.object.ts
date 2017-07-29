import {element, By} from 'protractor';

export class ConnectPageObject {
  public addTictailButton: any;

  constructor() {
    this.addTictailButton = element(By.id('add-tictail-button'));
  }

  public submitForm() {
  }
}
