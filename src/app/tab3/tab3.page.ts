import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private menu: MenuController) {}

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openProfileLink(link) {
    window.open(link, '_system', 'location=yes'); 
    return false;
  }

  
  shareApp() {
    window.open('https://rgsmani.github.io/covid19/', '_system', 'location=yes'); 
    return false;
  }

}
