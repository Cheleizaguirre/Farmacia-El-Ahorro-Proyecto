import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cliente-consultation',
  templateUrl: './cliente-consultation.component.html',
  styleUrls: ['./cliente-consultation.component.css']
})
export class ClienteConsultationComponent implements OnInit{
    @ViewChild('htmlData') htmlData!: ElementRef;
    filterPost = '';
  
  
  TUser: any = [];
    user: cliente = {
      idcliente:null,
      nombre:null,
      direccion:null,
      telefono:null,
      sexo:null,
      estado: 'Activo'
    }


    constructor(private Data: DataService) { }
  
    ngOnInit(): void {
      this.getUser();
    }

    getUser() {
      this.Data.getAll('/cliente')
        .subscribe(res => {
            this.TUser = res;
          
          }, err => console.error(err));
    }
  }
