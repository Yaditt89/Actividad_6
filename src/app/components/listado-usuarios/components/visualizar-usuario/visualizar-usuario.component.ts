import { Component, OnInit } from '@angular/core';
import { Users } from '../../../../interfaces/users.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../../../services/usuarios.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EliminarUsuarioComponent } from '../eliminar-usuario/eliminar-usuario.component';

@Component({
  selector: 'app-visualizar-usuario',
  templateUrl: './visualizar-usuario.component.html',
  styleUrls: ['./visualizar-usuario.component.css'],
})
export class VisualizarUsuarioComponent implements OnInit {
  public usuario: Users | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuariosService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.usuarioService.getUserByID(params['id']).subscribe((user) => {
        this.usuario = user;
      })
    );
  }

  actualizar() {
    this.router.navigate(['/editarUsuario', this.usuario._id]);
  }
  regresar() {
    this.router.navigate(['/home']);
  }

  eliminarUser() {
    const modalRef = this.modalService.open(EliminarUsuarioComponent, {
      centered: true,
    });
    modalRef.componentInstance.usuario = this.usuario;
    modalRef.result.then((result) => {
      if (result) {
        this.router.navigate(['/home']);
      }
    });
  }
}
