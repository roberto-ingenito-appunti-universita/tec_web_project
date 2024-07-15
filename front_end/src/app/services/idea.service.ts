import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idea } from '../model/idea.type';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { HomePageIdea } from '../model/home_page_idea.type';

@Injectable({ providedIn: 'root' })
export class IdeaService {
    constructor(private http: HttpClient) { }

    private apiUrl = 'http://localhost:3000/api/v1/idea';
    private httpOptions = { headers: { "Content-Type": "application/json" } };
    private userService = inject(UserService);


    public ideas: HomePageIdea[] = [];
    public sortType: 'default' | 'unpopular' | 'mainstream' = 'default';

    async loadIdeas() {
        const user = this.userService.getUser();

        this.ideas = await firstValueFrom(
            this.http.get<HomePageIdea[]>(
                `${this.apiUrl}/load`,
                { params: { username: user.username } }
            )
        );

        return this.ideas;
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

    async publishIdea(title: string, description: string) {
        const user = this.userService.getUser();
        const apiCall = this.http.post(
            `${this.apiUrl}/publish`,
            { username: user.username, title: title, description: description },
            this.httpOptions
        );
        await firstValueFrom(apiCall);
    }
}
