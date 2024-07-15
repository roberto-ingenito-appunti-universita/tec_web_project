import { Component, inject, Input, OnInit } from '@angular/core';
import { HomePageIdea } from '../../model/home_page_idea.type';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService } from '../../services/idea.service';

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

  public idea: HomePageIdea | null = null;


  async ngOnInit() {
    let index: number | undefined;

    this.route.queryParams.subscribe(params => {
      index = params['index'];
    });

    if (this.ideaService.ideas.length == 0) {
      await this.ideaService.loadIdeas();
    }

    if (!(index !== undefined && Number.isInteger(Number(index)) && index >= 0 && index < this.ideaService.ideas.length)) {
      this.router.navigate(['home']);
    } else {
      this.idea = this.ideaService.ideas[index];
    }
  }

}