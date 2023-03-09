import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Users } from '../../interfaces/users.interface';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css'],
})
export class ListadoUsuariosComponent implements OnInit {
  public actualizar: boolean = false;
  public usuarios: Users[] = [];
  public usuario!: Users;
  public allPage!: number;
  public pageSize = 3; // número de elementos a mostrarse por página
  public currentPage: number = 1; // número de página actual
  public totalItems!: number; // número total de elementos

  constructor(private userService: UsuariosService) {}

  ngOnInit(): void {
    this.getUser();
  }
  actualizarUser(usuario: any) {
    this.actualizar = true;
    this.usuario = usuario;
  }

  pageChanged(event: any): void {
    this.currentPage = event;
    if (
      this.allPage >= this.currentPage &&
      this.totalItems > this.usuarios.length
    ) {
      this.getUser();
    }
  }

  getUser() {
    this.userService.getAll(this.currentPage).subscribe((x) => {
      (this.allPage = x.total_pages), (this.currentPage = x.page);
      this.totalItems = x.total;
      this.usuarios.push(...x.results);
    });
  }
}
