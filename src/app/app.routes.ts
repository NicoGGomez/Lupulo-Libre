import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CervezasComponent } from './cervezas/cervezas.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {path: 'inicio', component: BodyComponent},
    {path: 'productos', component: CervezasComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '', component: BodyComponent}
];
