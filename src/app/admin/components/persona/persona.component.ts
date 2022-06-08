import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../core/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  lista_personas =[] //VARIABLE 

//Inyectar la dependencia de servicio
  constructor( protected PersonaService: PersonaService) { }

  ngOnInit(): void {

    this.listarPersonas();
  }
  
  //funcion Listar personas
  listarPersonas(){
    this.PersonaService.listar().subscribe(
      (res : any)=>{
        this.lista_personas = res.data
      },
      (error : any)=>{
        console.log(error);
      }
    )

  }

}
