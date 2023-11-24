import { Component,OnInit } from '@angular/core';
import { medicina } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicina-edit',
  templateUrl: './medicina-edit.component.html',
  styleUrls: ['./medicina-edit.component.css']
})
export class MedicinaEditComponent implements OnInit{

  valorInput: number | undefined;
  TUser: any = [];
  user: medicina = {
    idmedicina:null,
    nombre:null,
    precio: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/medicina')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idmedicina!, this.user,'/medicina')
        .subscribe(
          res => {
  
            this.router.navigate(['/medicina']);
          },
  
          err => console.error(err)
        );
    } 
}
