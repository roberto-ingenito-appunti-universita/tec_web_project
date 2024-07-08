import { Component } from '@angular/core';
import { AuthLandingComponent } from '../../components/auth-landing/auth-landing.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [AuthLandingComponent, RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  navigateToSignupPage() {
    this.router.navigate(['/signup'], { fragment: 'scrollDown' });
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment === "scrollDown") {
        document.getElementById("signInForm")?.scrollIntoView({ behavior: 'instant' });
      }
    })
  }
}
