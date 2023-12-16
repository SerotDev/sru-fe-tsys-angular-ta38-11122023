import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, formatPercent } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { ListadoClienteService } from "../listado-cliente/listado-cliente.service";

@Component({
  selector: 'app-alta-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css',
})
export class AltaClienteComponent {
  constructor(public listadoClienteService: ListadoClienteService) {}

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    cif: new FormControl(''),
    direccion: new FormControl(''),
    grupo: new FormControl(''),
  });

  send_data() {
    var tmp_arr: any = [];
    Object.keys(this.form.controls).forEach((controlName) => {
      let valor = this.form.get(controlName);
      let res = valor ? valor.value : '';
      console.log(res);
      tmp_arr.push(res);
    });
    this.listadoClienteService.add(tmp_arr);
  }
}
