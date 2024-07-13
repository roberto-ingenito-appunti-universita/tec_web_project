import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Idea } from '../model/idea.type';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { HomePageIdea } from '../model/home_page_idea.type';

@Injectable({ providedIn: 'root' })
export class IdeaService {
    private apiUrl = 'http://localhost:3000/api/v1/idea';
    private httpOptions = { headers: { "Content-Type": "application/json" } };
    private userService = inject(UserService);

    constructor(private http: HttpClient, private router: Router) { }

    async getIdea() {
        const user = this.userService.getUser();

        return await firstValueFrom(
            this.http.get<HomePageIdea[]>(
                `${this.apiUrl}/load`,
                { params: { username: user.username } }
            )
        );
    }

    async upVote(idea: Idea) {
        const user = this.userService.getUser();
        const apiCall = this.http.post(
            `${this.apiUrl}/up-vote`,
            { username: user.username, ideaID: idea.id },
            this.httpOptions
        );
        await firstValueFrom(apiCall);
    }

    async downVote(idea: Idea) {
        const user = this.userService.getUser();
        const apiCall = this.http.post(
            `${this.apiUrl}/down-vote`,
            { username: user.username, ideaID: idea.id },
            this.httpOptions
        );
        await firstValueFrom(apiCall);
    }
}
