import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: "signin", component: SigninComponent },
    { path: "signup", component: SignupComponent },
    { path: "", redirectTo: "/signin", pathMatch: "full" },
    { path: '**', component: PageNotFoundComponent },
];
