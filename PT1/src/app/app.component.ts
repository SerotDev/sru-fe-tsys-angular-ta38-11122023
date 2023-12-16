import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClienteComponent } from './listado-cliente/listado-cliente.component';
import { NgModule } from '@angular/core';


export class ListadoModule {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AltaClienteComponent,ListadoClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-formulario';
}
