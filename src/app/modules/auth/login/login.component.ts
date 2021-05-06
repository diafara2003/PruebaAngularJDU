import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  valorInput: string = "";
  mensaje: string = "";
  numeros: number[] = [1,2,3,4];
  nombre : string = "Yeni";
  constructor() { }

  ngOnInit(): void {
  }

  validarTexto(valuee : any){

    this.mensaje = valuee.target.value
  }

  mostrarAlerta(){
    alert('Hola');
  }

  guardarInformacion()
  {
    if(this.nombre === "que")
    this.nombre = "";
    alert('entro a que');
  }
}
