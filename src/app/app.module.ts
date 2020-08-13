import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { PrincipalComponent } from './principal/principal.component';
import { PerfildeusuarioComponent } from './perfildeusuario/perfildeusuario.component';
import { CarritodecomprassComponent } from './carritodecomprass/carritodecomprass.component';
import { DeportivaComponent } from './categorias/deportiva/deportiva.component';
import { FormalComponent } from './categorias/formal/formal.component';
import { FrioComponent } from './categorias/frio/frio.component';
import { InicioSesionComponent } from './categorias/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './categorias/inicio-sesion/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    PrincipalComponent,
    PerfildeusuarioComponent,
    CarritodecomprassComponent,
    DeportivaComponent,
    FormalComponent,
    FrioComponent,
    InicioSesionComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
