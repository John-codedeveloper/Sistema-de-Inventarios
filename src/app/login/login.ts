import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  constructor(private router: Router) {

  }

  usuario: string = '';
  password: string = '';

  mensajeError: string = '';

  iniciarSesion(): void {

    this.mensajeError = '';

    if (!this.usuario || !this.password) {

      this.mensajeError = 
      'Por favor, ingrese el usuario y la contraseña.';

      return;
    }

    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.password)

    if (this.usuario === 'admin' && this.password === '123456') {

      console.log('Inicio de sesión exitoso');

      alert('Inicio de sesión exitoso');

      this.router.navigate(['/dashboard'])
      
    }else{

      this.mensajeError =
      'Usuario o contraseña incorrectos.';
    }

  }
}
