import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../model/login_response.type';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'http://localhost:3000/api/v1/auth';

    constructor(private http: HttpClient, private router: Router) { }

    signUp(
        username: string,
        password: string,
        firstName: string | null,
        lastName: string | null,
        errorCallback: (err: any) => void
    ) {
        this.http.post<LoginResponse>(
            `${this.apiUrl}/signup`, // url
            { username: username, password: password, firstName: firstName, lastName: lastName }, // body 
            { headers: { "Content-Type": "application/json" } }
        ).subscribe({
            next: (response) => {
                localStorage.setItem('token', response.token);
                this.router.navigate(['/home']);
            },
            error: errorCallback,
        });
    }

    signIn(
        username: string,
        password: string,
        errorCallback: (err: any) => void
    ) {
        this.http.post<LoginResponse>(
            `${this.apiUrl}/signin`, // url
            { username: username, password: password }, // body 
            { headers: { "Content-Type": "application/json" } }
        ).subscribe({
            next: (response) => {
                localStorage.setItem('token', response.token);
                this.router.navigate(['/home']);
            },
            error: errorCallback,
        });
    }

    signOut() {
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
