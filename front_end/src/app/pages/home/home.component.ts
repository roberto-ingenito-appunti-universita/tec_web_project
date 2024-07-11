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
  items: Idea[] = [];
  ideaService = inject(IdeaService);

  ngOnInit() {
    this.ideaService.getIdea().then((value) => { this.items.push(...value) });
  }

}
