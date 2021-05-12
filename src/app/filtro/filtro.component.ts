import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

export interface DialogData {
  tipo: string;
  calificacion: number;
  terraza: boolean;

}

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  public TipoEstab:Array<[string,number]>=[['',0],['Italiana',1], ['Española',2], ['Mediterránea',3], ['Japonesa',4], ['Chilena',5], ['Argentina',6], ['Comida rápida', 7], ['Postres',8], ['Inglesa',9]];

  selectedType = 0;

  public Valoracion:Array<[string,number]>=[['',0], ['Mayor que 3.5', 3.5], ['Mayor que 4', 4], ['Mayor que 4.5', 4.5]]

  selectedValoracion = 0;

  public Terraza:Array<[string,number]>=[['', 3], ['Si',1], ['No', 0]]

  selectedTerraza = false;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  closeFilter():void {
      var overlay = document.getElementById('overlay'),
      popup = document.getElementById('popup');

      if(overlay!=null && popup!=null){
        overlay.classList.remove('active');
	      popup.classList.remove('active');
      }
  }

  filtrar():void{
    this.router.navigateByUrl('/TipoComida/' + this.selectedType + '/Valoracion/' + this.selectedValoracion + '/Terraza/' + this.selectedTerraza);
    this.closeFilter();
  }

}