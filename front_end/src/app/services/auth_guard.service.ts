import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/signin']); // Redirige alla home page se loggato
            return false;
        }
    }
}

@Injectable({ providedIn: 'root' })
export class AuthRedirectGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/home']); // Redirige alla home page se loggato
            return false;
        }
        return true;
    }
}