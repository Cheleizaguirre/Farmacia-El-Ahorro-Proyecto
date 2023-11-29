import { Component, OnInit } from '@angular/core';
import { orden_entrega } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-orden_entrega',
  templateUrl: './orden-entrega.component.html',
  styleUrls: ['./orden-entrega.component.css']
})
export class OrdenEntregaComponent implements OnInit {
    @ViewChild('htmlData') htmlData!: ElementRef;
    filterPost = '';
  
  
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
  
    orden_entrga: any;
  
    constructor(private Data: DataService) { }
  
    ngOnInit(): void {
      this.getUser();
      this.getDropListorden_entrega();
    }
  
    getDropListorden_entrega() {
      this.Data.getDropListOrden_entrega().subscribe((data:any)=>{
        this.orden_entrga=data;
      })
    }
  
    getUser() {
      this.Data.getAll('/orden_entrega')
        .subscribe(res => {
            this.TUser = res;
          
          }, err => console.error(err));
    }
  
    //Almacenar Registros
    AgregarValor(){
      delete this.user.idorden_entrega;   
      this.Data.save(this.user,'/orden_entrega')
         .subscribe(
           res => {
  
  this.getUser();
           },
           err => console.error(err)
         );
  }
  
  //Eliminar Registros
    EliminarData(id: number){
      this.Data.delete(id, '/orden_entrega')
        .subscribe(
          res => {
            this.getUser();
          },
          err => console.error(err)
        );
    }
  
    name = 'orden_entrega.xlsx';
    exportToExcel(): void {
      let element = document.getElementById('tabla');
      const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
      const book: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
      XLSX.writeFile(book, this.name);
    }
  
    public openPDF(): void {
      let DATA: any = document.getElementById('tabla');
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('orden_entrega.pdf');
      });
    }
  
  }
