import { Directive, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Directive({
  selector: '[appAdminOnly]'
})
export class AdminOnlyDirective implements OnInit {

  constructor(private el: ElementRef, private authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.isAdminUser()) {
      this.el.nativeElement.style.display = 'none'; // Oculta el elemento si el usuario no es administrador
    }
  }
}
