import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  mensajes: any[] = []; // Array para almacenar los mensajes obtenidos
  error: string = ''; // Variable para almacenar los errores

  private baseUrl = 'http://localhost:3000'; // URL de tu backend

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.obtenerMensajes();
    } else {
      this.error = 'No estás autenticado. Por favor, inicia sesión.';
    }
  }

  obtenerMensajes() {
    const token = this.authService.getToken();

    if (!token) {
      this.error = 'Token de autenticación no disponible.';
      return;
    }

    this.http.get<any[]>(`${this.baseUrl}/api/messages`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).subscribe(
      data => {
        this.mensajes = data;
      },
      err => {
        console.error('Error al obtener los mensajes:', err);
        this.error = 'No se pudo obtener los mensajes. Por favor, inténtalo nuevamente.';
      }
    );
  }
}
