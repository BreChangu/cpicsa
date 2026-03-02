import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  isScrolled = signal(false);
  
  // QA Arquitectura: Señal para controlar el estado del menú móvil
  isMobileMenuOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  // Función táctica para abrir/cerrar el menú
  toggleMobileMenu() {
    this.isMobileMenuOpen.update(val => !val);
    
    // UX Premium: Bloqueamos el scroll de la página cuando el menú está abierto
    if (this.isMobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Función de limpieza para cuando el usuario hace clic en un enlace
  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    document.body.style.overflow = 'auto';
  }
}