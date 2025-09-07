import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAvatar, RouterLink],
})
export class HomePage {
  constructor(private router: Router) {}

  irParaSobre() {
    this.router.navigate(['/sobre']);
  }
}
