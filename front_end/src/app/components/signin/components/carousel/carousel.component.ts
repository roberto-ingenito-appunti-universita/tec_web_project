import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  items = [
    { title: 'Sistema di Raccomandazione', description: 'Un sistema che suggerisce articoli in base alle preferenze dell\'utente.' },
    { title: 'App di Ricette', description: 'Una app mobile che offre ricette personalizzate in base agli ingredienti disponibili.' },
    { title: 'Piattaforma di E-learning', description: 'Una piattaforma per la creazione e la condivisione di corsi online.' },
    { title: 'Servizio di Car Sharing', description: 'Un servizio che permette agli utenti di noleggiare auto a breve termine in città.' },
    { title: 'Social Network per Animali', description: 'Un social network dedicato agli amanti degli animali domestici.' },
  ];
  interval: number = 5000; // Intervallo in millisecondi

  currentIndex: number = 0;
  progressPercentage: number = 0;
  private subscription: Subscription | undefined;

  get currentItem() {
    return this.items[this.currentIndex];
  }


  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private startCarousel() {
    this.subscription = interval(100).subscribe(() => {
      this.progressPercentage += (100 / (this.interval / 100));
      if (this.progressPercentage >= 100) {
        this.progressPercentage = 0;
        this.moveToNextItem();
      }
    });
  }

  private moveToNextItem() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }
}
