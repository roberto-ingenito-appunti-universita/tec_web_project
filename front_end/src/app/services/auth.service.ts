import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'http://localhost:3000/api/v1/auth';

    constructor(private http: HttpClient, private router: Router) { }

    signUp(
        username: string,
        password: string,
        firstName: string | null,
        lastName: string | null
    ) {
        this.http.post<{ token: string }>(
            `${this.apiUrl}/signup`, // url
            { username: username, password: password, firstName: firstName, lastName: lastName }, // body 
            { headers: { "Content-Type": "application/json" } }
        ).subscribe((response) => {
            /*   localStorage.setItem('token', response.token);
              this.router.navigate(['/home']); */
            console.log(response);
        });
    }

    signIn(username: string, password: string) {
        this.http.post<{ token: string }>(
            `${this.apiUrl}/signin`, // url
            { username: username, password: password }, // body 
            { headers: { "Content-Type": "application/json" } }
        ).subscribe((response) => {
            /*     localStorage.setItem('token', response.token);
                this.router.navigate(['/home']); */
            console.log(response);
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
