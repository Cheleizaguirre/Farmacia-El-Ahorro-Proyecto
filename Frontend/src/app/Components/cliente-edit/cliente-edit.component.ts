import { Component,OnInit } from '@angular/core';
import { cliente } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

valorInput: number | undefined;
TUser: any = [];
  user: cliente = {
    idcliente:null,
    nombre:null,
    direccion:null,
    telefono:null,
    sexo:null,
    estado: 'Activo'
  };
  Clientelist: any;

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.getDropListCliente();

    if (params['id']) {
      this.Data.getOne(params['id'],'/cliente')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idcliente!, this.user,'/cliente')
        .subscribe(
          res => {
  
            this.router.navigate(['/cliente']);
          },
  
          err => console.error(err)
        );
    }  

    getDropListCliente() {
      this.Data.getDropListCliente().subscribe((data:any)=>{
        this.Clientelist=data;
      })
    }

  }
