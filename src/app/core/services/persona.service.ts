import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  urlBase= environment.servidor

  constructor(private http: HttpClient) { }

  listar(){ //FUNCION LISTAR PERSONA 
    return this.http.get(`${this.urlBase}/persona`);
  }
}
