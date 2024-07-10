import { Component } from '@angular/core';
import { AuthLandingComponent } from '../../components/auth-landing/auth-landing.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    AuthLandingComponent,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  errorMessage: string | null = null;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.pattern('^[a-zA-Z0-9_]+(?<!_)$')]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSignUpTap() {
    const isPasswordInvalid = this.loginForm.controls.password.invalid;
    if (this.loginForm.controls.username.invalid) {
      this.errorMessage = "Username non valido";
    } else if (this.loginForm.controls.password.invalid) {
      this.errorMessage = "Password non valida";
    } else if (this.loginForm.valid) {
      const username = this.loginForm.controls.username.value!;
      const password = this.loginForm.controls.password.value!;
      const firstName = this.loginForm.controls.firstName.value;
      const lastName = this.loginForm.controls.lastName.value;

      this.authService.signUp(
        username,
        password,
        firstName,
        lastName,
        (err) => { this.errorMessage = "Username già utilizzato"; }
      );
    }
  }

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
