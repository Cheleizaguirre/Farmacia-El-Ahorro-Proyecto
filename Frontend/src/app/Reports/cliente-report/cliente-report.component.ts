import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-cliente-report',
  templateUrl: './cliente-report.component.html',
  styleUrls: ['./cliente-report.component.css']
})
export class ClienteReportComponent implements OnInit{

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

  name = 'Reporte De Clientes.xlsx';
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
        PDF.save('Reporte De Clientes.pdf');
      });
    }
}
