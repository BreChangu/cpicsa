import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // 1. El Layout envuelve todo
    children: [
      {
        path: '', 
        // 2. Cargamos el Home de forma diferida para máximo performance (SEO)
        loadComponent: () => import('./features/home/home').then(m => m.HomeComponent)
      }
      // Aquí agregaremos 'sectores', 'contacto', etc., en el futuro
    ]
  },
  {
    path: '**', // Si el usuario escribe una URL que no existe, lo mandamos al inicio
    redirectTo: ''
  }
];