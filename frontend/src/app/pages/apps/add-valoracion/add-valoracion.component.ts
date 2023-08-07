import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AppsService } from 'src/app/services/apps.service';
import { AppDetailsComponent } from '../app-details/app-details.component';
import { Apps } from 'src/app/models/apps';
import { Valoracion } from 'src/app/models/valoracion';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-valoracion',
  templateUrl: './add-valoracion.component.html',
  styleUrls: ['./add-valoracion.component.scss']
})
export class AddValoracionComponent implements OnInit {

  data_app: any;
  new_valoracion!: string;
  apps!: Apps[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public app_service: AppsService,
  private msg: MatSnackBar) { }

  ngOnInit(): void {
    this.data_app = this.data.app_datos;

  }

  getAllApps(){
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

  getAplicacion(id: number){
    this.app_service.getAplicacion(id).subscribe(
      data=>{
        this.data_app = data;
      },err=>{},
      ()=>{
        this.dialog.closeAll();
        this.dialog.open(AppDetailsComponent,{
          data: {app_detail: this.data_app},
          width: "40%"
        })
      }
    );
  }

  guardaValoracion(){
    let datos : Valoracion = new Valoracion();

    datos.comentario = this.new_valoracion;
    datos.aplicacion = this.data_app;


    this.app_service.addValoracion(datos).subscribe(
      {
        next: (response) => {
          this.msg.open('¡¡ Valoración guardada con éxito!!', 'Ok',{
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
          this.getAplicacion(this.data_app.id);
      },
      error: (err) => {
        this.msg.open('¡¡ Valoración guardada con éxito!!', 'Ok',{
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })

        this.getAplicacion(this.data_app.id);
      }
      });
  
      
  }


  openModalDetalle(){
    
    this.dialog.closeAll();
    this.dialog.open(AppDetailsComponent,{
      data: {app_detail: this.data_app},
      width: "40%"
    })
  }
}
