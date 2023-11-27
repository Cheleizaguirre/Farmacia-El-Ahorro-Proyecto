import { Component,OnInit } from '@angular/core';
import { medicina, proveedor } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.css']
})
export class ProveedorEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: proveedor = {
    idproveedor:null,
    nombre:null,
    telefono:null,
    sexo:null,
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/proveedor')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idproveedor!, this.user,'/proveedor')
        .subscribe(
          res => {
  
            this.router.navigate(['/proveedor']);
          },
  
          err => console.error(err)
        );
    } 

}
