import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCrearComponent } from './student-crear/student-crear.component';
import { StudentDetallesComponent } from './student-detalles/student-detalles.component';
import { StudentListadoComponent } from './student-listado/student-listado.component';
import { StudentActualizarComponent } from './student-actualizar/student-actualizar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentCrearComponent,
    StudentDetallesComponent,
    StudentListadoComponent,
    StudentActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
