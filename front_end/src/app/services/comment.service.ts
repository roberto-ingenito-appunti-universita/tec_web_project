import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { Comment } from '../model/comment.type';

@Injectable({ providedIn: 'root' })
export class CommentService {
    constructor(private http: HttpClient) { }

    private apiUrl = 'http://localhost:3000/api/v1/comment';
    private httpOptions = { headers: { "Content-Type": "application/json" } };
    private userService = inject(UserService);

    async loadComments(ideaID: number) {

        const comments = await firstValueFrom( 
            this.http.get<Comment[]>(`${this.apiUrl}/load/${ideaID}`) 
        );

        return comments;
    }

    async publishComment({ title, ideaID }: { title: string, ideaID: number }) {
        const user = this.userService.getUser();

        const apiCall = this.http.post(
            `${this.apiUrl}/publish`,
            { ideaFK: ideaID, userFK: user.username, title: title, },
            this.httpOptions
        );
        await firstValueFrom(apiCall);
    }
}
