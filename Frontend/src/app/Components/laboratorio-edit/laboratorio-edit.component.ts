import { Component,OnInit } from '@angular/core';
import { laboratorio } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laboratorio-edit',
  templateUrl: './laboratorio-edit.component.html',
  styleUrls: ['./laboratorio-edit.component.css']
})
export class LaboratorioEditComponent implements OnInit {

valorInput: number | undefined;
TUser: any = [];
    user: laboratorio = {
      idlaboratorio:undefined,
      nombre:undefined,
      direccion:undefined,
      telefono:undefined,
      estado: 'Activo'
    };
  Laboratoriolist: any;

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.getDropListLaboratorio();

    if (params['id']) {
      this.Data.getOne(params['id'],'/laboratorio')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idlaboratorio!, this.user,'/laboratorio')
        .subscribe(
          res => {
  
            this.router.navigate(['/laboratorio']);
          },
  
          err => console.error(err)
        );
    }  

    getDropListLaboratorio() {
      this.Data.getDropListLaboratorio().subscribe((data:any)=>{
        this.Laboratoriolist=data;
      })
    }

  }
