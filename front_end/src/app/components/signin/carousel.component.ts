// carousel.component.ts
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

interface CarouselItem {
    title: string;
    description: string;
}

@Component({
    selector: 'app-carousel',
    template: `
    <div class="carousel-container">
      <div class="progress-indicator">
        <div class="progress-bar" [style.width.%]="progressPercentage"></div>
      </div>
      <div class="carousel-content">
        <h2>{{ currentItem.title }}</h2>
        <p>{{ currentItem.description }}</p>
      </div>
    </div>
  `,
    styles: [`
    .carousel-container {
      position: relative;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
    .progress-indicator {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 50px;
      height: 5px;
      background-color: #ddd;
    }
    .progress-bar {
      height: 100%;
      background-color: #007bff;
      transition: width 0.1s linear;
    }
    .carousel-content {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class CarouselComponent implements OnInit, OnDestroy {
    @Input() items: CarouselItem[] = [];
    @Input() interval: number = 5000; // Intervallo in millisecondi

    currentIndex: number = 0;
    progressPercentage: number = 0;
    private subscription: Subscription | undefined;

    get currentItem(): CarouselItem {
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