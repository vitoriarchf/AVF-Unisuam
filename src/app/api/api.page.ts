import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, HttpClientModule]
})
export class ApiPage implements OnInit {
  joke: any = null;
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.loading = true;
    this.http.get('https://official-joke-api.appspot.com/random_joke').subscribe({
      next: (data) => {
        this.joke = data;
        this.loading = false;
      },
      error: () => {
        this.joke = { setup: 'Erro ao buscar piada.', punchline: '' };
        this.loading = false;
      }
    });
  }
}
