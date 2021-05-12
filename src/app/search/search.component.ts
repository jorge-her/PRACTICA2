import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm:String = "";
  constructor(private route:ActivatedRoute, private router:Router) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.searchTerm = params.searchTerm;
    })
  }

  search():void{
    if(this.searchTerm)
      this.router.navigateByUrl('/search/' + this.searchTerm);
    
    else
      this.router.navigateByUrl('/search/');
  }

  openFilter():void {
    
    var overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup');

        if(overlay!=null && popup!=null){
          overlay.classList.add('active');
          popup.classList.add('active');
        }
    }

}

/*if(params.searchTerm)
this.establecimientos = this.registroEstablecimientos.datos.filter(establecimiento => establecimiento.nombre.toLowerCase().includes(params.searchTerm.toLowerCase()));

else
this.establecimientos = this.registroEstablecimientos.datos;*/