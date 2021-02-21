import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentActualizarComponent } from './student-actualizar/student-actualizar.component';
import { StudentCrearComponent } from './student-crear/student-crear.component';
import { StudentDetallesComponent } from './student-detalles/student-detalles.component';
import { StudentListadoComponent } from './student-listado/student-listado.component';

const routes: Routes = [
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'students', component: StudentListadoComponent},
  {path: 'agregar', component: StudentCrearComponent},
  {path: 'actualizar/:id', component: StudentActualizarComponent},
  {path: 'detalles/:id', component: StudentDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
