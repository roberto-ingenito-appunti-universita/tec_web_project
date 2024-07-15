import { Component, inject, OnInit } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
import { HomePageIdea } from '../../model/home_page_idea.type';
import { UserService } from '../../services/user.service';
import { ChipComponent } from "./components/chip/chip.component";
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChipComponent, RichTextEditorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ideaService = inject(IdeaService);
  userService = inject(UserService);
  router = inject(Router);

  ngOnInit() {
    if (this.ideaService.ideas.length == 0) {
      this.ideaService.loadIdeas();
    }
  }

  sortIdeas(sortType: 'default' | 'unpopular' | 'mainstream') {
    this.ideaService.sortIdeas(sortType);
  }

  onCommentClick(index: number) {
    this.router.navigate(['idea'], { queryParams: { index: index } })
  }

  upVote(index: number) {
    const user = this.userService.getUser();

    // user can't upvote himself
    if (user.username === this.ideaService.ideas[index].userFK) return;

    this.ideaService.upVote(this.ideaService.ideas[index]);
    const isUpVote = this.ideaService.ideas[index].is_up_vote;

    if (isUpVote == null) {
      this.ideaService.ideas[index].is_up_vote = true;
      this.ideaService.ideas[index].up_vote_quantity++;
    } else if (isUpVote) {
      this.ideaService.ideas[index].is_up_vote = null;
      this.ideaService.ideas[index].up_vote_quantity--;
    } else {
      this.ideaService.ideas[index].is_up_vote = true;
      this.ideaService.ideas[index].up_vote_quantity++;
      this.ideaService.ideas[index].down_vote_quantity--;
    }
  }

  downVote(index: number) {
    const user = this.userService.getUser();

    // user can't downvote himself
    if (user.username === this.ideaService.ideas[index].userFK) return;

    this.ideaService.downVote(this.ideaService.ideas[index]);
    const isUpVote = this.ideaService.ideas[index].is_up_vote;

    if (isUpVote == null) {
      this.ideaService.ideas[index].is_up_vote = false;
      this.ideaService.ideas[index].down_vote_quantity++;
    } else if (!isUpVote) {
      this.ideaService.ideas[index].is_up_vote = null;
      this.ideaService.ideas[index].down_vote_quantity--;
    } else {
      this.ideaService.ideas[index].is_up_vote = false;
      this.ideaService.ideas[index].down_vote_quantity++;
      this.ideaService.ideas[index].up_vote_quantity--;
    }
  }


}
