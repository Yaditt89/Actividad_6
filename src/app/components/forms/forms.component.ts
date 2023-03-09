import { Component, OnInit } from '@angular/core';
import { Users } from '../../interfaces/users.interface';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  public form!: FormGroup;
  public usuario!: Users;
  public actualizar: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuariosService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      image: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      _id: [null],
    });
    if (this.router.url.includes('editarUsuario')) {
      this.actualizar = true;
      this.activatedRoute.params.subscribe((params) =>
        this.usuarioService.getUserByID(params['id']).subscribe((user) => {
          (this.usuario = user),
            (this.form = this.fb.group({
              first_name: [this.usuario.first_name, Validators.required],
              last_name: [this.usuario.last_name, Validators.required],
              email: [
                this.usuario.email,
                [
                  Validators.required,
                  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
                ],
              ],
              image: [
                this.usuario.image,
                [Validators.required, Validators.pattern('https?://.*')],
              ],
              _id: [this.usuario._id],
            }));
        })
      );
    }
  }
  checkCampo(campo: string, valida: string): boolean {
    if (
      this.form.get(campo)?.hasError(valida) &&
      this.form.get(campo)?.touched
    ) {
      return true;
    }
    return false;
  }

  regresar() {
    this.router.navigate(['/home']);
  }
  guardar() {
    if (!this.actualizar) {
      this.usuarioService.createUser(this.form.value).subscribe((x) => {
        Swal.fire({
          icon: 'success',
          text: `El usuario se ha registrado correctamente`,
        });
        this.form.reset();
      });
    } else {
      this.usuarioService.updateUser(this.form.value).subscribe((x) => {
        if (x.error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: x.error,
          });
        } else {
          Swal.fire({
            icon: 'success',
            text: `El usuario ${this.form.get('first_name')?.value} ${
              this.form.get('last_name')?.value
            } se ha actualizado correctamente`,
          });
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
