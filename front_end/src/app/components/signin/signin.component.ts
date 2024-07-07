import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  scrollToForm(behavior: "smooth" | "instant") {
    document.getElementById("signInForm")?.scrollIntoView({ behavior: behavior });
  }
}
