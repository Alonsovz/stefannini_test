import { Pipe, PipeTransform } from "@angular/core";
import { Apps } from "../models/apps";


@Pipe({
    name: 'searchcategoria'
})

export class SearchCategoria implements PipeTransform{
    

    transform(arreglo: Apps[], texto: any) : any {
        if(texto){
            return arreglo.filter(
                item => JSON.stringify(item).toLocaleLowerCase().includes(texto)
            );
        }else{
            return arreglo;
        }
    }

}