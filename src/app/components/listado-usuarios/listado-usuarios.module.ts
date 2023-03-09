import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './listado-usuarios.component';
import { VisualizarUsuarioComponent } from './components/visualizar-usuario/visualizar-usuario.component';
import { UsuarioCardComponent } from './components/usuario-card/usuario-card.component';
import { EliminarUsuarioComponent } from './components/eliminar-usuario/eliminar-usuario.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListadoUsuariosRoutingModule } from './listado-usuarios-routing.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ListadoUsuariosComponent,
    VisualizarUsuarioComponent,
    UsuarioCardComponent,
    EliminarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ListadoUsuariosRoutingModule,
    NgbTooltipModule,
  ],
})
export class ListadoUsuariosModule {}
