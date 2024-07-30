import { Routes } from '@angular/router';
import { ContactComponent } from './layout/contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiciosComponent } from './layout/servicios/servicios.component';
import { NavbarComponent} from './navbar/navbar.component'
import { MessageListComponent} from '../app/admin/message-list/message-list.component';
import { AdminGuard} from '../core/guard/admin.guard';
import { LoginComponent} from './auth/login/login.component';
import { RegisterComponent} from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
// import { MapComponent} from '../app/map/map.component';
import { PrototiposLandingComponent} from '../app/layout/prototipos-landing/prototipos-landing.component'


export const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta inicial redirige a /home
  { path: 'home', component:HomeComponent },
  // { path: '', component: }
  { path: 'about', component: AboutUsComponent }, // Ruta /about carga AboutUsComponent
  { path: 'services', component: PrototiposLandingComponent }, // Ruta /servicios carga ServiciosComponent
  { path: 'messages', component: MessageListComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent }, // Asegúrate de tener un componente de inicio de sesión
  { path: 'register', component: RegisterComponent }, // Asegúrate de tener un componente de inicio de sesión
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: 'home' }, //ruta por defecto
  // Puedes agregar más rutas según sea necesario
];
