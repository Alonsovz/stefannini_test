import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchCategoria } from "./searchcategoria.pipe";


@NgModule({
    declarations:[
        SearchCategoria
    ],
    imports:[
        CommonModule
    ],
    exports:[
        SearchCategoria
    ]
})
export class PipesModule { }