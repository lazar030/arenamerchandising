import { Component } from "@angular/core";

import { Platform, MenuController, PopoverController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private menu: MenuController,
    private statusBar: StatusBar,
    public popoverController: PopoverController
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate = [
      {
        title: "Screen Burning ",
        icon: "SB",
        url: "https://shop.arenaprints.com/"
      },
      {
        title: "Arena Sewing",
        icon: "Sewing",
        url: "https://arenasewing.com/"
      },
      {
        title: "Arena Embroidery",
        icon: "Embroidery",
        url: "https://arenaembroidery.com/"
      },
      {
        title: "Arena Prints",
        icon: "PrintingOrder",
        url: "https://arenaprints.com/"
      }
    ]; 
  }

  open(url: string) {
    window.open(`${url}`, "_blank");
  }
}
