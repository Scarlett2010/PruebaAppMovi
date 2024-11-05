import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.initializeApp();
  }

  async initializeApp() {
    await SplashScreen.show();
    await new Promise(resolve => setTimeout(resolve, 3000)); // Ajusta el tiempo según sea necesario
    await SplashScreen.hide();
    this.router.navigate(['../app/tabs']); // Redirige a las tabs
  }
}
