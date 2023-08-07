import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Valoracion } from '../models/valoracion';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })

};


@Injectable({
  providedIn: 'root'
})
export class AppsService {

  private refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getRefresh(): Observable<boolean>{
    return this.refresh.asObservable();
  }

  public setRefresh(value: boolean): void{
    this.refresh.next(value);
  }

  constructor(private http: HttpClient, private router: Router) { }
  
  public getAllApps(): Observable<any> {
    return this.http.get(environment.apiUrl+ 'aplicaciones', httpOptions).pipe(map(data => data as any));
  }

  public getAllCategorias(): Observable<any> {
    return this.http.get(environment.apiUrl+ 'categorias', httpOptions).pipe(map(data => data as any));
  }

  public getCategoriaById(id: number): Observable<any> {
    return this.http.get(environment.apiUrl+ 'categorias/' +id, httpOptions).pipe(map(data => data as any));
  }

  public addCalificacion(id: number, calificacion: number): Observable<any> {
    return this.http.get(environment.apiUrl+ 'addCalificacion/' +id+'/'+calificacion, httpOptions).pipe(map(data => data as any));
  }

  public addValoracion(data:Valoracion): Observable<Valoracion> {
    return this.http.post<Valoracion>(environment.apiUrl+ 'valoracion', data, httpOptions).pipe(map(data => data as Valoracion));
  }

  
  public getAplicacion(id: number): Observable<any> {
    return this.http.get(environment.apiUrl+ 'aplicacion/' +id, httpOptions).pipe(map(data => data as any));
  }
}
