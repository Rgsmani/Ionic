import { Component, OnInit } from "@angular/core";

import { Platform, MenuController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { CoreServiceService } from "./services/core-service.service";
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private coreService: CoreServiceService,
    private menu: MenuController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  navigateLink(navigateTo) {
    this.router.navigate([navigateTo]);
    this.menu.close('first');
  }

  openSearchList(searchBy) {
    const searchName = searchBy !== 'country' ? searchBy === 'state' ? 'India' : 'Tamil Nadu' : 'Global';
    const navigationExtras: NavigationExtras = {
      queryParams: {
        searchName,
        searchBy
      },
      relativeTo: this.activatedRoute
    };
    this.router.navigate(['./tabs/tab1/', searchBy], navigationExtras);
    this.menu.close('first');
  }

 
}
