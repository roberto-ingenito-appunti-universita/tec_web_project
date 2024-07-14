import { Component, HostListener, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  router = inject(Router);

  signOut() { this.authService.signOut(); }

  navigateToHomePage() {
    const isHomePage = this.router.url === '/home';

    if (isHomePage) {
      window.location.reload();
    } else {
      this.router.navigate(['home']);
    }
  }

  navigate() {
    this.router.navigate(['create-idea']);
  }

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
