import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient, private router: Router) { }

    login(username: string, password: string) {
        return this.http.post<{ token: string }>(
            `${this.apiUrl}/login`, // url
            { username: username, password: password } // body 
        ).subscribe((response) => {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/home']);
        });
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/signin']);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}
