import { Component, OnInit, ViewChild } from '@angular/core';
import { IItem, ISolicitudMaterial } from '../ISolicitudMaterial';
import { MatPaginator } from '@angular/material/paginator';
import { DatosService } from '../datos.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SolicitudMaterialComponent } from '../solicitud-material/solicitud-material.component';

@Component({
  selector: 'app-new-solicitud-entregada',
  templateUrl: './new-solicitud-entregada.component.html',
  styleUrls: ['./new-solicitud-entregada.component.css']
})
export class NewSolicitudEntregadaComponent implements OnInit {
  items: IItem[] = [];
  pageActual:number=1;
  //Material table columns
  displayedColumns: string[] = ['id', 'idPartida', 'idSubpartida', 'idCategoria', 'idProveedor', 'nameCategoria', 'nameSubpartida'];
  //Table Data Source
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //Dynamic Data Variable
  data: any;
  public totalRows = 0;
  peticiones: any;

   constructor(public datosServicio:DatosService,  public dialog: MatDialog, private Nav: Router) 
   {     
    this.datosServicio.getItemsCarrito$().subscribe((data: IItem[])=>{
      console.log(data);
      this.items = data;
    })

  }
                
   ngOnInit(): void {
                
    this.datosServicio.getItemsCarrito$().subscribe((data: IItem[])=>{
      console.log(data);
      this.items = data;
    })

  }



  
    
  agregaSolicitudMaterial()
  {
    var newSolicitud = <ISolicitudMaterial>{};
    
    newSolicitud.items = this.datosServicio.getItemsCarrito(); 
    
    this.datosServicio.enviaNewSolicitud(newSolicitud)
      .subscribe((peticion: ISolicitudMaterial) => {
        this.peticiones.push(peticion);
      });

      this.datosServicio.limpiaCarrito(); 

    const dialogRef = this.dialog.open(SolicitudMaterialComponent);
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
