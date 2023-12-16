import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarFormularioDeContactoService {
  registros: any[] = [["Sergi","sergidpm@hotmail.com","Hola que tal?"],["Nerea","correo@correo.com","Bien, y tu?"],["Sergi","sergidpm@hotmail.com","También"]];
  add(registro: any[]){
    this.registros.push(registro);
  }
  getRegistros(){
    return this.registros;
  }
}

