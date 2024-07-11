import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../model/login_response.type';
import LocalStorageKeys from '../local_storage_keys';
import { Idea } from '../model/idea.type';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IdeaService {
    private apiUrl = 'http://localhost:3000/api/v1/idea';
    private httpOptions = { headers: { "Content-Type": "application/json" } };

    constructor(private http: HttpClient, private router: Router) { }

    async getIdea() {
        return await firstValueFrom(this.http.get<Idea[]>(`${this.apiUrl}/load`));
    }
}
