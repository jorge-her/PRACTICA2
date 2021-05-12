import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Params} from '@angular/router';
import { Establecimiento } from '../compartido/modelos/establecimiento';
import { RegistroEstablecimientos} from '../services/establecimientos/RegistroEstablecimientos.service';

@Component({
  selector: 'app-visualizador-info',
  templateUrl: './visualizador-info.component.html',
  styleUrls: ['./visualizador-info.component.scss']
})
export class VisualizadorInfoComponent implements OnInit {
  Seleccion:Establecimiento=new Establecimiento(0);
  Establecimientos:RegistroEstablecimientos=new RegistroEstablecimientos;
  id=0;
  constructor(public router:Router, public route:ActivatedRoute) { }
  tipoComida="";
  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.params.id);
    this.Seleccion=this.Establecimientos.datos[this.id];
    switch(this.Seleccion.tipo_comida){
      case 1:
        this.tipoComida="Italiana";
        break;
      case 2:
        this.tipoComida="Española";
        break;
      case 3:
        this.tipoComida="Mediterranea";
        break;
      case 4:
        this.tipoComida="Japonesa";
        break;
      case 5:
        this.tipoComida="Chilena";
        break;
      case 6:
        this.tipoComida="Argentina";
        break;
      case 7:
        this.tipoComida="Comida rapida";
        break;
      case 8:
        this.tipoComida="Postres";
        break;
      case 9:
        this.tipoComida="Inglesa";
        break;
      default:
        break;
    }
  }
  
}
