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
    {
      title: "titolo",
      description: "description",
    },
    {
      title: "aaa",
      description: "aaa",
    },
    {
      title: "bbb",
      description: "bbb",
    },
    {
      title: "ccc",
      description: "ccc",
    },
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
