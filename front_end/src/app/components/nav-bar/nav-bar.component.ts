import { Component, HostListener, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isUserPopupOpen = false;
  authService = inject(AuthService);

  signOut() { this.authService.signOut(); }

  toggleUserPopup(event: MouseEvent): void {
    this.isUserPopupOpen = !this.isUserPopupOpen;
    event.stopPropagation(); // Previene la chiusura immediata
  }

  preventClose(event: MouseEvent): void {
    event.stopPropagation(); // Previene la chiusura quando si clicca all'interno della finestra
  }

  @HostListener('document:click', ['$event'])
  closePopup(event: MouseEvent): void {
    if (this.isUserPopupOpen) {
      this.isUserPopupOpen = false;
    }
  }
}
