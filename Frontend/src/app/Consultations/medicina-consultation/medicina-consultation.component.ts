import { Component, OnInit } from '@angular/core';
import { medicina } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-medicina-consultation',
  templateUrl: './medicina-consultation.component.html',
  styleUrls: ['./medicina-consultation.component.css']
})

export class MedicinaConsultationComponent implements OnInit{
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';


TUser: any = [];
  user: medicina = {
    idmedicina:null,
    nombre:null,
    precio: null,
    estado: 'Activo'
  }
  
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }


  getUser() {
    this.Data.getAll('/medicina')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
}
