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

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ClienteComponent,
    ClienteEditComponent,
    FilterclientePipe,
    MedicinaComponent,
    MedicinaEditComponent,
    FiltermedicinaPipe
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
