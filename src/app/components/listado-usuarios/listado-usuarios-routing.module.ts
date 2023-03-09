import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarUsuarioComponent } from './components/visualizar-usuario/visualizar-usuario.component';
import { ListadoUsuariosComponent } from './listado-usuarios.component';

const routes: Routes = [
  { path: '', component: ListadoUsuariosComponent },
  {
    path: 'visualizar-usuario/:id',
    component: VisualizarUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoUsuariosRoutingModule {}
