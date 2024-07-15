import { Component, inject, Input, OnInit } from '@angular/core';
import { HomePageIdea } from '../../model/home_page_idea.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-page',
  standalone: true,
  imports: [],
  templateUrl: './idea-page.component.html',
  styleUrl: './idea-page.component.scss'
})
export class IdeaPageComponent implements OnInit {
  router = inject(Router);

  public idea!: HomePageIdea;


  ngOnInit() {
    console.log(this.router.getCurrentNavigation()?.extras);

  }
}
