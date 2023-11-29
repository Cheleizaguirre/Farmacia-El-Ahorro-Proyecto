import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';

import { ClienteComponent } from './Components/cliente/cliente.component';
import { ClienteEditComponent } from './Components/cliente-edit/cliente-edit.component';
import { FilterclientePipe } from './pipes/filtercliente/filtercliente.pipe';
import { MedicinaComponent } from './Components/medicina/medicina.component';
import { MedicinaEditComponent } from './Components/medicina-edit/medicina-edit.component';
import { FiltermedicinaPipe } from './pipes/filtermedicina/filtermedicina.pipe';
import { ClienteConsultationComponent } from './Consultations/cliente-consultation/cliente-consultation.component';
import { MedicinaConsultationComponent } from './Consultations/medicina-consultation/medicina-consultation.component';
import { MedicinaReportComponent } from './Reports/medicina-report/medicina-report.component';
import { ClienteReportComponent } from './Reports/cliente-report/cliente-report.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { ProveedorEditComponent } from './Components/proveedor-edit/proveedor-edit.component';
import { OrdenEntregaComponent } from './Components/orden-entrega/orden-entrega.component';
import { Filter_orden_entregaPipe } from './pipes/filtro-orden-entrega.pipe';
import { OrdenEntregaeditComponent } from './Components/orden-entregaedit/orden-entregaedit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ClienteComponent,
    ClienteEditComponent,
    FilterclientePipe,
    MedicinaComponent,
    MedicinaEditComponent,
    FiltermedicinaPipe,
    ClienteConsultationComponent,
    MedicinaConsultationComponent,
    MedicinaReportComponent,
    ClienteReportComponent,
    ProveedorComponent,
    ProveedorEditComponent,
    OrdenEntregaComponent,
    Filter_orden_entregaPipe,
    OrdenEntregaeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
