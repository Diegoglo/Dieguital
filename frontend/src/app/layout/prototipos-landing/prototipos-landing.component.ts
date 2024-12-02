
import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any; // Importamos Bootstrap para usar la API de modal

@Component({
  selector: 'app-prototipos-landing',
  templateUrl: './prototipos-landing.component.html',
  styleUrls: ['./prototipos-landing.component.css']
})
export class PrototiposLandingComponent implements AfterViewInit {

  images = [
    { 
      src: 'images/Accion.png', 
      title: 'Barbería', 
      comment: 'Descripción de barbería.',
      large: false,
      carouselImages: [
        { src: 'images/Accion.png' },
        { src: 'images/servicios.png' },
        { src: 'images/agendar.png' }
      ]
    },
    { 
      src: 'images/retail/callToAction.png', 
      title: 'Foodtruck', 
      comment: 'Descripción de foodtruck.',
      large: false,
      carouselImages: [
        { src: 'images/retail/callToAction.png' },
        { src: 'images/retail/acercaNosotros.png' },
        { src: 'images/retail/productos.png' },
        { src: 'images/retail/Contacto.png' }
      ]
    },
    { 
      src: 'images/main3.jpg', 
      title: 'Clínica Dental', 
      comment: 'Descripción de clínica dental.',
      large: false,
      carouselImages: [
        { src: 'images/clinicadental1.jpg' },
        { src: 'images/clinicadental2.jpg' },
        { src: 'images/clinicadental3.jpg' }
      ]
    }
  ];

  selectedCarouselImages: any[] = [];

  // Abre el modal y carga las imágenes del carrusel correspondiente
  openCarousel(index: number): void {
    const selectedImage = this.images[index];
    this.selectedCarouselImages = selectedImage.carouselImages;

    // Abre el modal usando la API de Bootstrap
    const modalElement = document.getElementById('carouselModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  // Cierra el modal
  closeModal(): void {
    const modalElement = document.getElementById('carouselModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  constructor() { }

  // openCarousel(index: number): void {
  //   this.activeIndex = index;
  //   const carousel = new bootstrap.Carousel('#carouselExampleControls');
  //   carousel.to(index);  // Cambia al índice correspondiente
  //   const modal = new bootstrap.Modal(document.getElementById('carouselModal'));
  //   modal.show(); // Abre el modal
  // }
  // Variable para almacenar las imágenes del carrusel seleccionada

  toggleSize(image: any) {
    image.large = !image.large;
  }
  ngAfterViewInit(): void {
    // Aquí puedes realizar acciones después de que las vistas estén inicializadas
  }
}

