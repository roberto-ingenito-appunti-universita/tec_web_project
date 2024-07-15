import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard, AuthRedirectGuard } from './services/auth_guard.service';
import { HomeComponent } from './pages/home/home.component';
import { CreateIdeaComponent } from './pages/create-idea/create-idea.component';
import { IdeaPageComponent } from './pages/idea-page/idea-page.component';

export const routes: Routes = [
    { path: "signin", component: SigninComponent, canActivate: [AuthRedirectGuard] },
    { path: "signup", component: SignupComponent, canActivate: [AuthRedirectGuard] },
    { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "create-idea", component: CreateIdeaComponent, canActivate: [AuthGuard] },
    { path: "idea", component: IdeaPageComponent, canActivate: [AuthGuard] },
    { path: "", redirectTo: "/signin", pathMatch: "full" },
    { path: '**', component: PageNotFoundComponent },
];
