import { Component, OnInit } from '@angular/core';
import { laboratorio } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-laboratorio-consultations',
  templateUrl: './laboratorio-consultations.component.html',
  styleUrls: ['./laboratorio-consultations.component.css']
})
export class LaboratorioConsultationsComponent implements OnInit{
    @ViewChild('htmlData') htmlData!: ElementRef;
    filterPost = '';
  
  
    TUser: any = [];
    user: laboratorio = {
      idlaboratorio:null,
      nombre:null,
      direccion:null,
      telefono:null,
      estado: 'Activo'
    }


    constructor(private Data: DataService) { }
  
    ngOnInit(): void {
      this.getUser();
    }

    getUser() {
      this.Data.getAll('/laboratorio')
        .subscribe(res => {
            this.TUser = res;
          
          }, err => console.error(err));
    }
  }
