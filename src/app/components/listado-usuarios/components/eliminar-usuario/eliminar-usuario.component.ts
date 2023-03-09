import { Component, Input } from '@angular/core';
import { Users } from '../../../../interfaces/users.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../../../services/usuarios.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css'],
})
export class EliminarUsuarioComponent {
  @Input() usuario: Users | any;
  constructor(
    public activeModal: NgbActiveModal,
    private userService: UsuariosService
  ) {}

  eliminar() {
    this.userService.deleteUser(this.usuario._id).subscribe((elimino) => {
      if (elimino.error) {
        this.activeModal.close(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: elimino.error,
        });
      } else {
        Swal.fire({
          icon: 'success',
          text: `El usuario ${this.usuario.first_name} ${this.usuario.last_name} se ha eliminado correctamente`,
        });
        this.activeModal.close(true);
      }
    });
  }
}
