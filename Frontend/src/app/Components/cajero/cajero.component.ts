import { Component, OnInit } from '@angular/core';
import { cajero } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css']
})
export class CajeroComponent implements OnInit{
  @ViewChild('htmlData') htmlData!: ElementRef;
    filterPost = '';

    TUser: any = [];
    user: cajero = {
      idcajero: null,
      nombre: null,
      horario: null,
      salario: null,
      estado: 'Activo'
    }
    constructor(private Data: DataService) { }
    
    getUser() {
      this.Data.getAll('/cajero')
        .subscribe(res => {
            this.TUser = res;
          
          }, err => console.error(err));
    }

    ngOnInit(): void {
      this.getUser();
    }
    
    name = 'Cajero.xlsx';
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
        PDF.save('Cajero.pdf');
      });
    }
}
