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

    private multiSort<T>(array: T[], comparators: ((a: T, b: T) => number)[]): T[] {
        return array.sort((a, b) => {
            for (let comparator of comparators) {
                const result = comparator(a, b);
                if (result !== 0) {
                    return result;
                }
            }
            return 0;
        });
    }
    async getIdea() {
        const user = this.userService.getUser();

        const ideas = await firstValueFrom(
            this.http.get<HomePageIdea[]>(
                `${this.apiUrl}/load`,
                { params: { username: user.username } }
            )
        );


        this.multiSort(ideas, [
            // somma decrescente
            (a, b) => (b.up_vote_quantity + b.down_vote_quantity) - (a.up_vote_quantity + a.down_vote_quantity),

            // saldo prossimo allo zero crescente
            (a, b) => Math.abs(a.up_vote_quantity - a.down_vote_quantity) - Math.abs(b.up_vote_quantity - b.down_vote_quantity),
        ]);

        return ideas;
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
