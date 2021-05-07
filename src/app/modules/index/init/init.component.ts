import { Component, OnInit } from '@angular/core';
import { usuarioModel } from '../../../models/usuario';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {
  listaUsuariosInputFooter : usuarioModel[] = [];
  constructor() { }

  ngOnInit(): void {
    this.obtenerUsuariosBackEnd();
  }

  obtenerUsuariosBackEnd(){
    this.listaUsuariosInputFooter = [
      {
        nombre : "Pepeito",
        apellido : "Perez",
        edad : 18,
        cedula : "1023004435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Brayan",
        apellido : "Camargo",
        edad : 20,
        cedula : "102300334435"
      },
      {
        nombre : "Luisa",
        apellido : "Mora",
        edad : 27,
        cedula : "102300334435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
      {
        nombre : "Yeni",
        apellido : "Maria",
        edad : 32,
        cedula : "10232104435"
      },
    ]
  }

  actualizarUsuario(usuarioAEditar : usuarioModel){ 
    console.log(usuarioAEditar);
  }

}
