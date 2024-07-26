// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';


// // import { ContactComponent } from './contact/contact.component';
// // import { NavbarComponent } from './navbar/navbar.component';
// // import { ProductInfoComponent } from './product-info/product-info.component';
// // import { ServiciosComponent } from './servicios/servicios.component';
// // import { AboutUsComponent } from './about-us/about-us.component';
// // import { PrototiposLandingComponent } from './prototipos-landing/prototipos-landing.component';

// @Component({
//   selector: 'app-root',
//   // standalone: true,
//   // imports: [RouterOutlet, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'diegital';
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diegital';
  pato:boolean=false;
}
