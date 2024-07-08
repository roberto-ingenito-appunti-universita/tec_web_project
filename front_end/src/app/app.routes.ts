import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    { path: "signin", component: SigninComponent },
    { path: "signup", component: SignupComponent },
    { path: "", redirectTo: "/signin", pathMatch: "full" },
    { path: '**', component: PageNotFoundComponent },
];
