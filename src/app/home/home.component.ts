import { Component, OnInit } from '@angular/core';
import { Establecimiento } from '../compartido/modelos/establecimiento'
import { RegistroEstablecimientos} from '../services/establecimientos/RegistroEstablecimientos.service';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  establecimientos:Establecimiento[] = [];
  constructor(private registroEstablecimientos:RegistroEstablecimientos, public route:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.establecimientos = this.registroEstablecimientos.datos;
      if(params.searchTerm){
        this.establecimientos = this.establecimientos.filter(establecimiento => establecimiento.nombre.toLowerCase().includes(params.searchTerm.toLowerCase()));
      }

      else{
        if(params.searchTipo>0 && params.searchTipo<=9){
          this.establecimientos = this.establecimientos.filter(establecimiento => establecimiento.tipo_comida==params.searchTipo);
        }

        if(params.searchVal>0 && params.searchVal<=4.5){
          this.establecimientos = this.establecimientos.filter(establecimiento => establecimiento.valoracion>=params.searchVal);
        }

        if(params.searchTerraza==0 || params.searchTerraza==1){
          this.establecimientos = this.establecimientos.filter(establecimiento => establecimiento.terraza==params.searchTerraza);
        }
      }

    })
  }

  

}
