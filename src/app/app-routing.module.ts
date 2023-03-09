import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { C404Component } from './components/c404/c404.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/listado-usuarios/listado-usuarios.module').then(
        (m) => m.ListadoUsuariosModule
      ),
  },
  { path: 'nuevoUsuario', component: FormsComponent },
  { path: 'editarUsuario/:id', component: FormsComponent },
  { path: '**', component: C404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
