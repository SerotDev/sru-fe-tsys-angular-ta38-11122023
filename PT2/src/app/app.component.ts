import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EnviarFormularioDeContactoComponent } from './enviar-formulario-de-contacto/enviar-formulario-de-contacto.component';
import { MostrarFormularioDeContactoComponent } from './mostrar-formulario-de-contacto/mostrar-formulario-de-contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EnviarFormularioDeContactoComponent, MostrarFormularioDeContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PT2';
}
