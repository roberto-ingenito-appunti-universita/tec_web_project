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

    async publishComment({ text, ideaID }: { text: string, ideaID: number }) {
        const username = this.userService.getUser().username;

        const apiCall = this.http.post<Comment>(
            `${this.apiUrl}/publish`,
            { ideaID, username, text },
            this.httpOptions
        );
        return await firstValueFrom(apiCall);
    }
}
