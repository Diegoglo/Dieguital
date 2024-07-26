import { Component } from '@angular/core';
import { MapGeocoder, MapGeocoderResponse } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 40.730610, lng: -73.935242 }; // Coordenadas iniciales (ej. Nueva York)

  constructor(private geocoder: MapGeocoder) {}

  mapClicked(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.center = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
    }
  }
}
