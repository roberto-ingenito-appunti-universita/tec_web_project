import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  scrollToForm(behavior: "smooth" | "instant") {
    document.getElementById("signInForm")?.scrollIntoView({ behavior: behavior });
  }
}
