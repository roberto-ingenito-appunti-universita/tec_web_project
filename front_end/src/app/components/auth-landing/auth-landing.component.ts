import { Component, Input } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';

@Component({
  selector: 'app-auth-landing',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './auth-landing.component.html',
  styleUrl: './auth-landing.component.scss'
})
export class AuthLandingComponent {

  @Input({ required: true })
  formElementId!: string;

  @Input({ required: true })
  isSignin!: boolean;

  scrollToForm(behavior: "smooth" | "instant") {
    document.getElementById(this.formElementId)?.scrollIntoView({ behavior: behavior });
  }
}
