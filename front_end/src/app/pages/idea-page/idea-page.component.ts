import { Component, ElementRef, inject, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HomePageIdea } from '../../model/home_page_idea.type';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService } from '../../services/idea.service';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../model/comment.type';
import { DomSanitizer } from '@angular/platform-browser';

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
  sanitizer = inject(DomSanitizer);

  public idea: HomePageIdea | undefined;
  private ideaID: number | undefined;

  public comments: Comment[] = [];

  @ViewChild('comment')
  public comment!: ElementRef;

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ideaID = params['id'];
    });

    if (this.ideaService.ideas.length == 0) {
      await this.ideaService.loadIdeas();
    }

    if (this.ideaID === undefined || !Number.isInteger(Number(this.ideaID))) {
      this.router.navigate(['home']);
    } else {
      this.idea = this.ideaService.ideas.find((idea) => idea.id == this.ideaID);

      if (this.idea === undefined) this.router.navigate(['home']);

      this.comments = await this.commentService.loadComments(this.ideaID);
    }
  }


  async publishComment() {
    const comment = this.comment.nativeElement.value;

    if (comment !== '') {
      try {
        const newComment = await this.commentService.publishComment({ ideaID: this.idea!.id, text: comment });
        alert("Commento pubblicato!");
        this.comments.unshift(newComment);
        this.idea!.comment_quantity++;
      } catch (error) {
        alert(`Errore nella pubblicazione del commento\nErrore: ${JSON.stringify(error)}`);
      }
    } else {
      alert("Scrivi qualcosa!");
    }

  }

}