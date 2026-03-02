import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  // 1. Método para SEO Dinámico (Cambia las pestañas y descripciones)
  setMetaData(config: { title: string; description: string; keywords?: string }) {
    // Añadimos siempre la marca al final del título
    this.title.setTitle(`${config.title} | CPICSA`);
    
    // Metaetiquetas estándar para Google
    this.meta.updateTag({ name: 'description', content: config.description });
    
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph (Vital para cuando manden la página por WhatsApp o LinkedIn)
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }

  // 2. Método para SEO Semántico (El código oculto para los robots de Google)
  setLocalBusinessSchema() {
    // Validamos que no exista ya para no duplicarlo al navegar
    if (this.document.getElementById('cpicsa-schema')) return;

    const script = this.document.createElement('script');
    script.id = 'cpicsa-schema';
    script.type = 'application/ld+json';
    
    // Diccionario de Entidad de Google
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "PestControlService", /* Categoría exacta que busca Google */
      "name": "CPICSA - Control de Plagas Internacional Centinela",
      "image": "https://www.cpicsa.com.mx/assets/images/logo.png", 
      "url": "https://www.cpicsa.com.mx",
      "telephone": "+525565075059", /* Tomé el teléfono de tu captura de pantalla antigua */
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MX"
      },
      "priceRange": "$$$", /* Indica servicio Premium B2B */
      "sameAs": [
        "https://www.facebook.com/cpicsa",
        "https://www.instagram.com/cpicsa"
      ]
    });
    
    // Inyectamos el script en el Head
    this.document.head.appendChild(script);
  }
}