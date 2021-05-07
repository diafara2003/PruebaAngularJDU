import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { usuarioModel } from '../../../models/usuario';
@Component({
  selector: 'app-footer-index',
  templateUrl: './footer-index.component.html',
  styleUrls: ['./footer-index.component.scss']
})
export class FooterIndexComponent implements OnInit {
  @Input() listaUsuarios: usuarioModel[] = [];
  @Output() usuarioEditar = new EventEmitter<usuarioModel>();
  constructor() { }

  ngOnInit(): void {
  }

  EventoEditarUsuario(usuario : usuarioModel){
    this.usuarioEditar.emit(usuario);
  }
}
