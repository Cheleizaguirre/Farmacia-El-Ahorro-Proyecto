import { Component, OnInit, OnDestroy } from '@angular/core';
import { orden_entrega } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orden-entrega',
  templateUrl: './orden-entrega.component.html',
  styleUrls: ['./orden-entrega.component.css']
})
export class OrdenEntregaComponent implements OnInit, OnDestroy {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';
  TUser: any = [];
  Orden_entregalist: any;
  user: orden_entrega = {
    idorden_entrega: null,
    idlaboratorio: null,
    idproveedor: null,
    idmedicina: null,
    cantidad_medicina: null,
    fecha: null,
    estado: 'Activo'
  };
  name = 'orden_entrega.xlsx';
  private subscriptions: Subscription[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListOrden_entrega();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to avoid memory leaks
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getDropListOrden_entrega() {
    this.subscriptions.push(
      this.dataService.getDropListOrden_entrega().subscribe((data: any) => {
        this.Orden_entregalist = data;
      })
    );
  }

  getUser() {
    this.subscriptions.push(
      this.dataService.getAll('/orden_entrega').subscribe(
        res => {
          this.TUser = res;
        },
        err => console.error(err)
      )
    );
  }

  AgregarValor() {
    delete this.user.idorden_entrega;
    this.subscriptions.push(
      this.dataService.save(this.user, '/orden_entrega').subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      )
    );
  }

  EliminarData(id: number) {
    this.subscriptions.push(
      this.dataService.delete(id, '/orden_entrega').subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      )
    );
  }

  exportToExcel(): void {
    const element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }

  openPDF(): void {
    const DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      const fileWidth = 208;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('orden_entrega.pdf');
    });
  }
}
