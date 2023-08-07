import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Apps } from 'src/app/models/apps';
import { AppsService } from 'src/app/services/apps.service';
import { AppDetailsComponent } from '../app-details/app-details.component';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  apps!: Apps[];
  categorias!: any;
  texto: any;
  filtros!: boolean;
  categoria_sl!: any;

  constructor(private app_service: AppsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.app_service.setRefresh(true);
    this.callApps();
    this.getAllCategorias();
  }

  getAllApps(){
    this.apps = [];
    this.categoria_sl = 0;
    this.filtros= false;
    this.app_service.getAllApps().subscribe(
      data=>{
       this.apps = data;
      },
      err=>{},
      ()=>{}
    );
  }

  callApps(){
    this.app_service.getRefresh().subscribe((value: boolean) =>{
      if(value){
        this.getAllApps();
      }
    });
  }

  getAllCategorias(){
    this.app_service.getAllCategorias().subscribe(
      data=>{
       this.categorias = data;
      },
      err=>{},
      ()=>{}
    );
  }

  showDetails(data: any){
    this.dialog.open(AppDetailsComponent,
      {
        data: {app_detail: data},
        width: '40%'
      })
  }

  getCategoriaById(data: any){
    this.apps = [];
    this.filtros = true;
    this.app_service.getCategoriaById(data.value).subscribe(
      data=>{
       this.apps = data.aplicaciones;
      },
      err=>{},
      ()=>{
        
      }
    );
  }
}

