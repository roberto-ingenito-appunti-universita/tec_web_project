import { Component, inject, OnInit } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
import { UserService } from '../../services/user.service';
import { ChipComponent } from "./components/chip/chip.component";
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HomePageIdea } from '../../model/home_page_idea.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChipComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  sanitizer = inject(DomSanitizer);
  ideaService = inject(IdeaService);
  userService = inject(UserService);
  router = inject(Router);


  previousPage() {
    if (this.ideaService.currentPage > 1) {
      this.ideaService.currentPage--;
    }
  }
  nextPage() {
    if (this.ideaService.currentPage < this.ideaService.pagesQuantity) {
      this.ideaService.currentPage++;
    }
  }


  public get paginatedIdeas(): HomePageIdea[] | undefined {
    let start = (this.ideaService.currentPage - 1) * 10;
    let end = start + 10;
    return this.ideaService.ideas.slice(start, end);
  }


  ngOnInit() {
    if (this.ideaService.ideas.length === 0) this.ideaService.loadIdeas();
  }

  sortIdeas(sortType: 'default' | 'unpopular' | 'mainstream') {
    this.ideaService.sortIdeas(sortType);
  }

  onCommentClick(ideaID: number) {
    this.router.navigate(['idea'], { queryParams: { id: ideaID } })
  }

  upVote(ideaID: number) {
    const user = this.userService.user;
    const idea = this.ideaService.ideas.find((idea) => idea.id == ideaID);

    if (idea === undefined) return;

    const isUpVote = idea.is_up_vote;

    // user can't upvote himself
    if (user.username === idea.userFK) return;

    this.ideaService.upVote(idea);

    if (isUpVote == null || !isUpVote) {
      idea.is_up_vote = true;
      idea.up_vote_quantity++;
      if (isUpVote === false) idea.down_vote_quantity--; // Se era un downvote, lo annulla
    } else {
      idea.is_up_vote = null;
      idea.up_vote_quantity--;
    }
  }

  downVote(ideaID: number) {
    const user = this.userService.user;
    const idea = this.ideaService.ideas.find((idea) => idea.id == ideaID);

    if (idea === undefined) return;

    const isUpVote = idea.is_up_vote;

    // user can't downvote himself
    if (user.username === idea.userFK) return;

    this.ideaService.downVote(idea);

    if (isUpVote == null || isUpVote) {
      idea.is_up_vote = false;
      idea.down_vote_quantity++;
      if (isUpVote === true) idea.up_vote_quantity--; // Se era un upvote, lo annulla
    } else {
      idea.is_up_vote = null;
      idea.down_vote_quantity--;
    }
  }
}
