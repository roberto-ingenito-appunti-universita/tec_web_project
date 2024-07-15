import { Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { HomePageIdea } from '../../model/home_page_idea.type';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService } from '../../services/idea.service';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../model/comment.type';

@Component({
  selector: 'app-idea-page',
  standalone: true,
  imports: [],
  templateUrl: './idea-page.component.html',
  styleUrl: './idea-page.component.scss'
})
export class IdeaPageComponent implements OnInit {

  router = inject(Router);
  route = inject(ActivatedRoute);
  ideaService = inject(IdeaService);
  commentService = inject(CommentService);

  public idea: HomePageIdea | null = null;
  private ideaIndex: number | undefined;

  public comments: Comment[] = [];


  @ViewChild('comment')
  public comment!: ElementRef;

  async ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.ideaIndex = params['index'];
    });


    if (this.ideaService.ideas.length == 0) {
      await this.ideaService.loadIdeas();
    }

    if (!(this.ideaIndex !== undefined && Number.isInteger(Number(this.ideaIndex)) && this.ideaIndex >= 0 && this.ideaIndex < this.ideaService.ideas.length)) {
      this.router.navigate(['home']);
    } else {
      this.idea = this.ideaService.ideas[this.ideaIndex];
      this.comments = await this.commentService.loadComments(this.idea.id);
    }
  }


  async publishComment() {
    const comment = this.comment.nativeElement.value;

    if (comment !== '') {
      try {
        const newComment = await this.commentService.publishComment({ ideaID: this.idea!.id, text: comment });
        alert("Commento pubblicato!");
        this.comments.unshift(newComment);
        this.ideaService.ideas[this.ideaIndex!].comment_quantity++;
      } catch (error) {
        alert(`Errore nella pubblicazione del commento\nErrore: ${JSON.stringify(error)}`);
      }
    } else {
      alert("Scrivi qualcosa!");
    }

  }

}