import { Component } from '@angular/core';
import { AuthLandingComponent } from '../../components/auth-landing/auth-landing.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    AuthLandingComponent,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }
  isUsernameInvalid: boolean = false;
  isPasswordInvalid: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.pattern('^[a-zA-Z0-9_]+(?<!_)$')]),
    password: new FormControl('', [Validators.required]),
  });

  onSignUpTap() {
    this.isUsernameInvalid = this.loginForm.controls.username.invalid;
    this.isPasswordInvalid = this.loginForm.controls.password.invalid;

    if (this.loginForm.valid) {
      const username = this.loginForm.controls.username.value!;
      const password = this.loginForm.controls.password.value!;

      this.authService.signIn(username, password);
    }
  }

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
