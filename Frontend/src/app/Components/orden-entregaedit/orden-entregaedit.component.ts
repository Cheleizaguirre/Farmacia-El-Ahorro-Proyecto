import { Component, OnInit } from '@angular/core';
import { orden_entrega } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orden-entregaedit',
  templateUrl: './orden-entregaedit.component.html',
  styleUrls: ['./orden-entregaedit.component.css']
})
export class OrdenEntregaeditComponent implements OnInit{

  valorInput: number | undefined;
  TUser: any = [];
  user: orden_entrega = {
    idorden_entrega:null,
    idlaboratorio:null,
    idproveedor:null,
    idmedicina:null,
    cantidad_medicina:null,
    fecha:null,
    estado: 'Activo'
  }

  listorden_entrega : any;
  listalabo : any;
  listaprov : any;
  listamed :any;

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/orden_entrega')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idorden_entrega!, this.user,'/orden_entrega')
        .subscribe(
          res => {
  
            this.router.navigate(['/orden_entrega']);
          },
  
          err => console.error(err)
        );
    } 

    getDropOrden_entrega() {
      this.Data.getDropListOrden_entrega().subscribe((data:any)=>{
        this.listorden_entrega=data;
      })
    }

    getDroplaboratorio() {
      this.Data.getDropListidlaboratorio().subscribe((data:any)=>{
        this.listalabo=data;
      })
    }
    getDropProveedor() {
      this.Data.getDropListProveedor().subscribe((data:any)=>{
        this.listaprov=data;
      })
    }
    getDropMedicina() {
      this.Data.getDropListidmedicina().subscribe((data:any)=>{
        this.listamed=data;
      })
    }
}