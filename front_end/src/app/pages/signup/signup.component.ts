import { Component } from '@angular/core';
import { AuthLandingComponent } from '../../components/auth-landing/auth-landing.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [AuthLandingComponent, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  navigateToSigninPage() {
    this.router.navigate(['/signin'], { fragment: 'scrollDown' });
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment === "scrollDown") {
        document.getElementById("signUpForm")?.scrollIntoView({ behavior: 'instant' });
      }
    })
  }
}
