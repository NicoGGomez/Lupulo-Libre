import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  user = ''
  password = ''
  logueado = false

  constructor(private router: Router) {}

  onLogin() {
    if(this.user == 'admin' && this.password == '1234'){
    this.router.navigate(['/productos'], {
      queryParams : { logueado : this.logueado }
    });
    this.logueado = true
    } else {
      alert('No tienes cuenta o permisos para modificar el contenido')
    }
  }

}
