import { Component, inject } from '@angular/core';
import { Idea } from '../../model/idea.type';
import { IdeaService } from '../../services/idea.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ideas: Idea[] = [];
  ideaService = inject(IdeaService);

  ngOnInit() {
    this.ideaService.getIdea().then((value) => { this.ideas.push(...value) });
  }

  deleteIdea(idea: Idea): void {
    const index = this.ideas.indexOf(idea);
    if (index > -1) {
      this.ideas.splice(index, 1);
    }
  }

}
