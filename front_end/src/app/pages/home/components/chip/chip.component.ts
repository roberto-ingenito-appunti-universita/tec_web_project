import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  @Input({ required: true })
  label!: string;

  @Input({ required: true })
  selected!: boolean;

  @Output()
  click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
