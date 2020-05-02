import { Component, OnInit } from "@angular/core";
import { CoreServiceService } from "../services/core-service.service";
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {


  constructor(private menu: MenuController) {}

  ngOnInit() {
    
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  shareApp() {
    window.open('https://rgsmani.github.io/covid19/', '_system', 'location=yes'); 
    return false;
  }


}
