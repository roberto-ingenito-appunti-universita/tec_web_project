import { Component, inject } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
import { HomePageIdea } from '../../model/home_page_idea.type';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ideas: HomePageIdea[] = [];
  ideaService = inject(IdeaService);
  userService = inject(UserService);

  ngOnInit() {
    this.ideaService.getIdea().then((value) => { this.ideas.push(...value) });
  }

  upVote(index: number) {
    const user = this.userService.getUser();

    // user can't upvote himself
    if (user.username === this.ideas[index].userFK) return;

    this.ideaService.upVote(this.ideas[index]);
    const isUpVote = this.ideas[index].is_up_vote;

    if (isUpVote == null) {
      this.ideas[index].is_up_vote = true;
      this.ideas[index].up_vote_quantity++;
    } else if (isUpVote) {
      this.ideas[index].is_up_vote = null;
      this.ideas[index].up_vote_quantity--;
    } else {
      this.ideas[index].is_up_vote = true;
      this.ideas[index].up_vote_quantity++;
      this.ideas[index].down_vote_quantity--;
    }
  }

  downVote(index: number) {
    const user = this.userService.getUser();

    // user can't downvote himself
    if (user.username === this.ideas[index].userFK) return;

    this.ideaService.downVote(this.ideas[index]);
    const isUpVote = this.ideas[index].is_up_vote;

    if (isUpVote == null) {
      this.ideas[index].is_up_vote = false;
      this.ideas[index].down_vote_quantity++;
    } else if (!isUpVote) {
      this.ideas[index].is_up_vote = null;
      this.ideas[index].down_vote_quantity--;
    } else {
      this.ideas[index].is_up_vote = false;
      this.ideas[index].down_vote_quantity++;
      this.ideas[index].up_vote_quantity--;
    }
  }
}
