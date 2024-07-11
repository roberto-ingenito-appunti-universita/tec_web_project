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
  items: Idea[] = [];

}
