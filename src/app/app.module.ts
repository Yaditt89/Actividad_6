import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoUsuariosModule } from './components/listado-usuarios/listado-usuarios.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { C404Component } from './components/c404/c404.component';
import { NavbarComponent } from './components/theme/navbar/navbar.component';
import { FooterComponent } from './components/theme/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    C404Component,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListadoUsuariosModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
