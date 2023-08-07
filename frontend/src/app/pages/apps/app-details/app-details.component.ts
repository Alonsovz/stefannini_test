import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IgxCarouselComponent } from 'igniteui-angular';
import { AddValoracionComponent } from '../add-valoracion/add-valoracion.component';
import { AddCalificacionComponent } from '../add-calificacion/add-calificacion.component';
import { AppsService } from 'src/app/services/apps.service';


@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.scss'],
 
})
export class AppDetailsComponent implements OnInit {

  app_detail!:any;
  @ViewChild('carousel', { static: true }) public carousel: IgxCarouselComponent | undefined;

  public slides: any[] = [];
  public animations = ['slide', 'fade', 'none'];



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public app_service: AppsService) { }

  ngOnInit(): void {
    this.app_detail = this.data.app_detail;
    
    
  }

  editCalificacion(data: any){
    this.dialog.closeAll();
    this.dialog.open(AddCalificacionComponent,{
      data: {app_datos: data},
      width: "30%"
    })
  }

  addValoracion(data: any){
    this.dialog.closeAll();
    this.dialog.open(AddValoracionComponent,{
      data: {app_datos: data},
      width: "30%"
    })
  }

  cerrar(){
    this.dialog.closeAll();
    this.app_service.setRefresh(true);
  }

 
}
