import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, HttpClientModule, RouterModule]
})
export class ApiPage implements OnInit {
  catFact: string = '';
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCatFact();
  }

  getCatFact() {
    this.loading = true;
    this.http.get<any>('https://catfact.ninja/fact').subscribe({
      next: (data) => {
        this.catFact = data.fact;
        this.loading = false;
      },
      error: () => {
        this.catFact = 'Erro ao buscar fato.';
        this.loading = false;
      }
    });
  }
}
