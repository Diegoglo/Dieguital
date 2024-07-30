import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:3000'; // Aquí debes colocar la URL de tu backend

  constructor(private http: HttpClient) {}

  enviarMensaje(nombre: string, email: string, mensaje: string): Observable<any> {
    const url = `${this.baseUrl}/api/contact`; // Aquí debes definir la ruta de tu API en el backend
    const body = { nombre, email, mensaje };
    return this.http.post(url, body);
  }
  
  obtenerMensajes(): Observable<any[]> {
    const url = `${this.baseUrl}/api/messages`; // URL del endpoint para obtener mensajes
    return this.http.get<any[]>(url);
  }
}
