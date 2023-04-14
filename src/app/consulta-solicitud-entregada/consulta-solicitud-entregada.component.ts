import { Component, OnInit, ViewChild } from '@angular/core';
import { IItem, ISolicitudMaterial } from '../ISolicitudMaterial';
import { SolicitudMaterialComponent } from '../solicitud-material/solicitud-material.component';
import { MatPaginator } from '@angular/material/paginator';
import { DatosService } from '../datos.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-solicitud-entregada',
  templateUrl: './consulta-solicitud-entregada.component.html',
  styleUrls: ['./consulta-solicitud-entregada.component.css']
})
export class ConsultaSolicitudEntregadaComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

}
