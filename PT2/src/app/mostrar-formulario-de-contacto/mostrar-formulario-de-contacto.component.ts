import { Component, OnInit } from '@angular/core';
import { MostrarFormularioDeContactoService } from './mostrar-formulario-de-contacto.service';

@Component({
  selector: 'app-mostrar-formulario-de-contacto',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-formulario-de-contacto.component.html',
  styleUrl: './mostrar-formulario-de-contacto.component.css'
})
export class MostrarFormularioDeContactoComponent implements OnInit{
  public array_registros : any[] = [];
  constructor(public mostrarFormularioDeContactoService: MostrarFormularioDeContactoService) {}
  ngOnInit() {
    this.array_registros = this.mostrarFormularioDeContactoService.getRegistros();
  }
}
