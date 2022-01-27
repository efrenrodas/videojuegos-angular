import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private ClienteServicio:ClientesService) { }

  ngOnInit(): void {
    this.ClienteServicio.obtenerClientes().subscribe(data=>{
      console.log(data);
    },err=>{
      console.log("error en el servicio");
    })
  }

}
