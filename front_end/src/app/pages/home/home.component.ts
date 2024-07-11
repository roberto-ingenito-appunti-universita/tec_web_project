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
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaaaaaaaaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaaaaaaaaaaaaaaaaaaaaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaaaaaaaaaaaaaaaaaaaaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaaaaaaaaaaaaaaaaaaaaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaaaaaaaaaaaaaaaaaaaaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaa", title: "aaaa", id: 1 },
    { createdAt: new Date(), description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", title: "aaaa", id: 1 },
  ];

}
