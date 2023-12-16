import { Component, OnInit } from '@angular/core';
import { ListadoClienteService } from "./listado-cliente.service";

@Component({
  standalone:true,
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css']
})
export class ListadoClienteComponent implements OnInit {
  public array_registros : any[] = [];
  constructor(public listadoClienteService: ListadoClienteService) {}

  ngOnInit() {
    this.array_registros = this.listadoClienteService.getRegistros();
  }
}