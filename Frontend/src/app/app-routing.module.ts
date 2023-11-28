import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent} from './Components/navegacion/navegacion.component';

import { ClienteComponent } from './Components/cliente/cliente.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { ClienteEditComponent } from './Components/cliente-edit/cliente-edit.component';
import { MedicinaComponent } from './Components/medicina/medicina.component';
import { MedicinaEditComponent } from './Components/medicina-edit/medicina-edit.component';
import { ClienteConsultationComponent } from './Consultations/cliente-consultation/cliente-consultation.component';
import { MedicinaConsultationComponent } from './Consultations/medicina-consultation/medicina-consultation.component';
import { MedicinaReportComponent } from './Reports/medicina-report/medicina-report.component';
import { ClienteReportComponent } from './Reports/cliente-report/cliente-report.component';
import { ProveedorEditComponent } from './Components/proveedor-edit/proveedor-edit.component';
import { OrdenEntregaComponent } from './Components/orden-entrega/orden-entrega.component';

const routes: Routes = [
  {
    path: 'navegacion',
    component:NavegacionComponent
  },
  {
    path: 'proveedor',
    component:ProveedorComponent
  },
  {
    path: 'cliente',
    component:ClienteComponent
  },
  {
    path: 'orden_entrega',
    component:OrdenEntregaComponent
  },
  {
    path: 'cliente/edit/:id',
    component:ClienteEditComponent
  },
  {
    path: 'proveedor/edit/:id',
    component:ProveedorEditComponent
  },
  {
    path: 'cliente_consultation',
    component:ClienteConsultationComponent
  },
  {
    path: 'cliente_report',
    component:ClienteReportComponent
  },
  {
    path: 'medicina',
    component:MedicinaComponent
  },
  {
    path: 'medicina/edit/:id',
    component:MedicinaEditComponent
  },
  {
    path: 'medicina_consultation',
    component:MedicinaConsultationComponent
  },
  {
    path: 'medicina_report',
    component:MedicinaReportComponent
  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
