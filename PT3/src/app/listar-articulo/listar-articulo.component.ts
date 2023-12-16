import { Component, OnInit } from '@angular/core';
import { ListarArticuloService } from './listar-articulo.service';

@Component({
  selector: 'app-listar-articulo',
  standalone: true,
  imports: [],
  templateUrl: './listar-articulo.component.html',
  styleUrl: './listar-articulo.component.css'
})
export class ListarArticuloComponent implements OnInit {
  public array_registros : any[] = [];
  constructor(public listarArticuloService: ListarArticuloService) {}

  edit(codigo:string){
    this.listarArticuloService.edit(codigo)
  }

  delete_data(codigo_eliminar:string){
    this.listarArticuloService.delete(codigo_eliminar)
  }

  ngOnInit() {
    this.array_registros = this.listarArticuloService.getRegistros();
  }
}
