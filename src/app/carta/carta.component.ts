import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Params} from '@angular/router';
import { Establecimiento } from '../compartido/modelos/establecimiento';
import { RegistroEstablecimientos} from '../services/establecimientos/RegistroEstablecimientos.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {
  Seleccion:Establecimiento=new Establecimiento(0);
  Establecimientos:RegistroEstablecimientos=new RegistroEstablecimientos;
  id=0;
  tipoComida="";
  constructor(public router:Router, public route:ActivatedRoute) { }

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
    this.openTable(this.tipoComida);
  }
  
  openTable(tipocomida:string):void{
    var table=document.getElementById(tipocomida);
    if(table!=null){
      table.style.display='table';
    }
  }

}
