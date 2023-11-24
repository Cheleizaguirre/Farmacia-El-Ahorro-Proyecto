import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent} from './Components/navegacion/navegacion.component';

import { ClienteComponent } from './Components/cliente/cliente.component';
import { ClienteEditComponent } from './Components/cliente-edit/cliente-edit.component';
import { MedicinaComponent } from './Components/medicina/medicina.component';
import { MedicinaEditComponent } from './Components/medicina-edit/medicina-edit.component';

const routes: Routes = [
  {
    path: 'navegacion',
    component:NavegacionComponent
  },
  {
    path: 'cliente',
    component:ClienteComponent
  },
  {
    path: 'cliente/edit/:id',
    component:ClienteEditComponent
  },
  {
    path: 'medicina',
    component:MedicinaComponent
  },
  {
    path: 'medicina/edit/:id',
    component:MedicinaEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
