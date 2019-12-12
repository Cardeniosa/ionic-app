import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WifiConfirmation } from '../wifiConfirmation/wifiConfirmation';

@Component({
  selector: 'page-oauthFlow',
  templateUrl: 'oauthFlow.html',
})
export class OauthFlow {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // TODO: REMOVE THIS NAVIGATE, AFTER IMPLEMENTS NAVIGATION FROM PAGES
  async navigateTo() {
    await this.navCtrl.push(WifiConfirmation);
  }
}
