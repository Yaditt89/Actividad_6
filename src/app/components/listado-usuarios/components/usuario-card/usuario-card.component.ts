import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../../../interfaces/users.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EliminarUsuarioComponent } from '../eliminar-usuario/eliminar-usuario.component';
import { UsuariosService } from '../../../../services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css'],
})
export class UsuarioCardComponent implements OnInit {
  @Input() usuario!: Users;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {}

  actualizar() {
    this.router.navigate(['/editarUsuario', this.usuario._id]);
  }
  verDetalle() {
    this.router.navigate(['/home/visualizar-usuario', this.usuario._id]);
  }

  eliminarUser() {
    const modalRef = this.modalService.open(EliminarUsuarioComponent, {
      centered: true,
    });
    modalRef.componentInstance.usuario = this.usuario;
  }
}
