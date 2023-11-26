import { Component, OnInit } from '@angular/core';
import { medicina } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-medicina-report',
  templateUrl: './medicina-report.component.html',
  styleUrls: ['./medicina-report.component.css']
})
export class MedicinaReportComponent implements OnInit{

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

  name = 'Reporte de Medicinas.xlsx';
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
      PDF.save('Reporte de Medicinas.pdf');
    });
  }

}
