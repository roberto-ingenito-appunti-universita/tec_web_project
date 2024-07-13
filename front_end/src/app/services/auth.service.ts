import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../model/login_response.type';
import LocalStorageKeys from '../local_storage_keys';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'http://localhost:3000/api/v1/auth';
    private httpOptions = { headers: { "Content-Type": "application/json" } };

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
            this.httpOptions
        ).subscribe({
            next: (response) => {
                localStorage.setItem(LocalStorageKeys.jwtToken, response.token);
                localStorage.setItem(LocalStorageKeys.userData, JSON.stringify(response.user));
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
            this.httpOptions
        ).subscribe({
            next: (response) => {
                localStorage.setItem(LocalStorageKeys.jwtToken, response.token);
                localStorage.setItem(LocalStorageKeys.userData, JSON.stringify(response.user));
                this.router.navigate(['/home']);
            },
            error: errorCallback,
        });
    }

    signOut() {
        localStorage.removeItem(LocalStorageKeys.jwtToken);
        localStorage.removeItem(LocalStorageKeys.userData);
        this.router.navigate(['/signin']);
    }

    getToken(): string | null {
        return localStorage.getItem(LocalStorageKeys.jwtToken);
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}
