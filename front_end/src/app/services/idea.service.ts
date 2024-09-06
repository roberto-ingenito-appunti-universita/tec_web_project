import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idea } from '../model/idea.type';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { HomePageIdea } from '../model/home_page_idea.type';
import { BackendService } from './backend.service';
import { HomeComponent } from '../pages/home/home.component';

@Injectable({ providedIn: 'root' })
export class IdeaService {
    constructor(private http: HttpClient, private backendService: BackendService) { }

    private apiUrl = `${this.backendService.apiUrl}/idea`;
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
        this.sortIdeas(this.sortType);
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

        let pagesQuantity = Math.ceil(this.ideas.length / 10);
        sessionStorage.setItem('pagesQuantity', pagesQuantity.toString());
    }

    sortIdeas(type: 'default' | 'unpopular' | 'mainstream') {
        this.sortType = type;

        switch (type) {
            case 'default':
                this.sortType = 'default';
                this.ideas = this.multiSort(this.ideas, [
                    // somma decrescente
                    (a, b) => (b.up_vote_quantity + b.down_vote_quantity) - (a.up_vote_quantity + a.down_vote_quantity),

                    // saldo prossimo allo zero crescente
                    (a, b) => Math.abs(a.up_vote_quantity - a.down_vote_quantity) - Math.abs(b.up_vote_quantity - b.down_vote_quantity),
                ]);
                break;
            case 'unpopular':
                this.sortType = 'unpopular';
                this.ideas = this.ideas.sort((a, b) => (b.down_vote_quantity - b.up_vote_quantity) - (a.down_vote_quantity - a.up_vote_quantity));
                break;
            case 'mainstream':
                this.sortType = 'mainstream';
                this.ideas = this.ideas.sort((a, b) => (b.up_vote_quantity - b.down_vote_quantity) - (a.up_vote_quantity - a.down_vote_quantity));
                break;
        }
    }

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
}
