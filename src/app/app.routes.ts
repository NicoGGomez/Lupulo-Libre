import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: 'inicio', component: BodyComponent},
    {path: 'productos', component: CervezasComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: BodyComponent}
];
