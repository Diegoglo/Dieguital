import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../core/service/contact.service';

@Component({
  selector: 'app-contact', 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] 
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup; // Variable que contiene el grupo de controles del formulario

  // Inyección de dependencias en el constructor
  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  // método del ciclo de vida del componente que se llama automáticamente después de que Angular ha inicializado las propiedades vinculadas a datos del componente.
  ngOnInit() {
    this.initForm(); // Inicializa el formulario
  }

  // Método para configurar y crear el formulario reactivo
  initForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  // Método llamado al enviar el formulario
  onSubmit() {
    if (this.contactForm.invalid) {
      return; // Si el formulario es inválido, no hace nada
    }

    const { name, email, message } = this.contactForm.value;
    // Desestructura los valores del formulario

    this.contactService.enviarMensaje(name, email, message)
      .subscribe(() => {
          console.log('Mensaje enviado correctamente');
          alert('¡Mensaje enviado correctamente!');
          this.contactForm.reset(); // Resetea el formulario si el mensaje se envía con éxito
          
        },
        error => {
          console.error('Error al enviar el mensaje:', error);
          alert('Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.'); // Muestra un mensaje de error al usuario
          // Maneja el error en caso de que falle el envío
          // Aquí podrías mostrar un mensaje de error al usuario si lo deseas
        }
      );
  }

  // Getters para acceder a los campos del formulario de manera más fácil en la plantilla
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
