import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { AnadirNuevoComponent } from './anadir-nuevo/anadir-nuevo.component';


const routes: Routes = [
  { path: 'libros', component: LibrosComponent}, 
  { path: 'anadirNuevo', component: AnadirNuevoComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ LibrosComponent, AnadirNuevoComponent]
