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

  ideas: HomePageIdea[] = [];
  ideaService = inject(IdeaService);
  userService = inject(UserService);
  router = inject(Router);

  sortType: 'default' | 'unpopular' | 'mainstream' = 'default';

  ngOnInit() {
    const ideas = this.ideaService.ideas;
    this.sortType = this.ideaService.sortType;

    if (ideas.length == 0) {
      this.ideaService.loadIdeas().then((value) => {
        this.ideas.push(...value);
        this.sortIdeas(this.sortType);
      });
    } else {
      this.ideas.push(...ideas);
      this.sortIdeas(this.sortType);
    }
  }

  onCommentClick(index: number) {
    this.router.navigate(['idea'], { queryParams: { index: index } })
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

  sortIdeas(type: 'default' | 'unpopular' | 'mainstream') {
    this.ideaService.sortType = type;

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
