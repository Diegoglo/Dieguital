import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prototipos-landing',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './prototipos-landing.component.html',
  styleUrl: './prototipos-landing.component.css'
})
export class PrototiposLandingComponent {
  images = [
    { src: 'images/mockup.jpg', title: 'Barbería', comment: 'Una landing page de barbería incluye información sobre servicios de cortes de cabello, estilos disponibles, testimonios de clientes, y una llamada a la acción para reservar citas o contactar con el barbero, todo presentado de manera atractiva y persuasiva.', large: false },
    { src: 'images/mockup.jpg', title: 'Foodtruck', comment: 'Una landing page de foodtruck presenta menús y especialidades culinarias, detalles sobre ubicaciones y horarios de servicio, invitaciones a eventos y la opción de contacto para reservas o consultas, todo diseñado para captar y convertir visitantes interesados en experiencias gastronómicas móviles.', large: false },
    { src: 'images/mockup.jpg', title: 'Clinica Dental', comment: 'Una landing page de una clínica dental incluye información sobre servicios odontológicos, tratamientos disponibles, testimonios de pacientes satisfechos, y un formulario de contacto para citas y consultas, diseñado para atraer y convertir visitantes interesados en cuidado dental profesional.', large: false }
    // Añade más imágenes según necesites
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSize(image: any) {
    image.large = !image.large;
  }
}
