import { Component } from '@angular/core';
import { Idea } from '../../model/idea.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items: Idea[] = [
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    ...Array(100).fill({ createdAt: new Date(), description: "desc", title: "title", id: 1 })
  ];

}
