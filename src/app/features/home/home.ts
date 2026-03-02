// 1. Añade OnInit e inject a tus importaciones de Angular
import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo';
// 2. Importa el servicio que acabamos de crear

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  // 3. Inyectamos el servicio (Sintaxis moderna de Angular 18)
  private seoService = inject(SeoService);

  // 4. Ejecutamos el SEO cuando el componente nace
  ngOnInit() {
    // Cambiamos la pestaña y la descripción
    this.seoService.setMetaData({
      title: 'Líderes en Bioseguridad Corporativa',
      description: 'Protegemos la integridad operativa de su industria con 30 años de maestría en control de plagas y estándares internacionales. No fumigamos; controlamos.',
      keywords: 'control de plagas corporativo, bioseguridad, fumigación industrial, CPICSA, certificación sanitaria'
    });

    // Inyectamos el código oculto para Google Local Business
    this.seoService.setLocalBusinessSchema();
  }
}