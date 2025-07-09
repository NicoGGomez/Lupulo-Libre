import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    {path: 'inicio', component: BodyComponent},
    {path: 'productos', component: CervezasComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '', component: BodyComponent}
];
