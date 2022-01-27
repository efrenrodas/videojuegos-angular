import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { clientes, cliente, mensaje } from '../interfaces/interface.clientes';

const url=environment.urlClientes;
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }
  obtenerClientes(){
    return this.http.get<clientes>(url);
  }
}
