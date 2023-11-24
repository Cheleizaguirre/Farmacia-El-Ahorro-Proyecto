import { Component, OnInit } from '@angular/core';
import { medicina } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-medicina',
  templateUrl: './medicina.component.html',
  styleUrls: ['./medicina.component.css']
})
export class MedicinaComponent implements OnInit {
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

  //Almacenar Registros
  AgregarValor(){
    delete this.user.idmedicina;   
    this.Data.save(this.user,'/medicina')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}

//Eliminar Registros
  EliminarData(id: number){
    this.Data.delete(id, '/medicina')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  name = 'Medicina.xlsx';
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
      PDF.save('Medicina.pdf');
    });
  }

}

