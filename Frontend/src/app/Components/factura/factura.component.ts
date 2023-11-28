import { Component, OnInit } from '@angular/core';
import { factura } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit{
  @ViewChild('htmlData') htmlData!: ElementRef;
    filterPost = '';

    TUser: any = [];
    user: factura = {
      idfactura: null,
      idcliente: null,
      idcajero: null,
      total: null,
      impuesto: null,
      fecha: undefined
    }
    constructor(private Data: DataService) { }
    
    getUser() {
      this.Data.getAll('/factura')
        .subscribe(res => {
            this.TUser = res;
          
          }, err => console.error(err));
    }

    ngOnInit(): void {
      this.getUser();
      this.getDropListCajero();
      this.getDropListCliente();
    }
    
    name = 'Factura.xlsx';
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
        PDF.save('Factura.pdf');
      });
    }

    Cajerolist: any;
    Clientelist: any;
    getDropListCajero() {
      this.Data.getDropListCajero().subscribe((data:any)=>{
        this.Cajerolist=data;
      })
    }
    getDropListCliente() {
      this.Data.getDropListCliente().subscribe((data:any)=>{
        this.Clientelist=data;
      })
    }

}
