import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AppsService } from 'src/app/services/apps.service';
import { AppDetailsComponent } from '../app-details/app-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Apps } from 'src/app/models/apps';

@Component({
  selector: 'app-add-calificacion',
  templateUrl: './add-calificacion.component.html',
  styleUrls: ['./add-calificacion.component.scss']
})
export class AddCalificacionComponent implements OnInit {

  data_app: any;
  new_calificacion!: number;
  apps!: Apps[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public app_service: AppsService,  private msg: MatSnackBar) { }

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
  guardarCalificacion(){
    this.app_service.addCalificacion(this.data_app.id, this.new_calificacion).subscribe(
      {
        next: (response) => {
          this.msg.open('¡¡ Calificación guardada con éxito!!', 'Ok',{
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
          this.getAplicacion(this.data_app.id);
      },
      error: (err) => {
        this.msg.open('¡¡ Calificación guardada con éxito!!', 'Ok',{
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
        this.getAplicacion(this.data_app.id);
   
        
      }
      });
  }


  openModalDetalle(){
    
    this.dialog.open(AppDetailsComponent,{
      data: {app_detail: this.data_app},
      width: "40%"
    })
  }


}
