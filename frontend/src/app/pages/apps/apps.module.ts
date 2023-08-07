import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { ViewComponent } from './view/view.component';
import { MatModuleModule } from 'src/app/mat-module.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AppDetailsComponent } from './app-details/app-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from "@syncfusion/ej2-angular-navigations";
import { AddValoracionComponent } from './add-valoracion/add-valoracion.component';
import { AddCalificacionComponent } from './add-calificacion/add-calificacion.component';

@NgModule({
  declarations: [
    ViewComponent,
    AppDetailsComponent,
    AddValoracionComponent,
    AddCalificacionComponent,
    
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    MatModuleModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    
  ]
})
export class AppsModule { }
