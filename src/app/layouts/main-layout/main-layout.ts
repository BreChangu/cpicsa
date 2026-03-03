import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';

// 1. Importamos la clase del Header desde su ruta relativa
import { HeaderComponent } from '../header/header'; 

@Component({
  selector: 'app-main-layout',
  standalone: true,
  // 2. Aquí le decimos al Layout: "Vas a necesitar renderizar el Header y el Router"
  imports: [CommonModule, RouterModule, HeaderComponent, Footer], 
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayoutComponent {
  // Lógica del layout (si se requiere a futuro)
}