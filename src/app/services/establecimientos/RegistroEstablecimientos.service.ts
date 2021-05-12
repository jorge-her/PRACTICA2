import { Injectable } from '@angular/core';
import { Establecimiento } from '../../compartido/modelos/establecimiento'

@Injectable({
  providedIn: 'root'
})
export class RegistroEstablecimientos {

    constructor() { }
  
    public datos: Establecimiento[] = [
      {id:0 , nombre:'El Ristorante Di Giorgio', tipo_comida:1, distancia:1.2, aforo_actual:10, aforo_maximo:35, direccion:'Calle de Abizanda, 12', valoracion:4.3, medidas_covid:['Máximo número de personas por mesa: 6', 'Aforo limitado', 'Distancia interpersonal: 2 (metros)'], terraza:false, imagen:'../../assets/images/restaurants/ElristorantedeGiorgio.png'},
      {id:1 , nombre:'La Taberna de Pepe', tipo_comida:2, distancia:0.5, aforo_actual:7, aforo_maximo:20, direccion:'Calle de Amaya, 3', valoracion:4.5, medidas_covid:['Máximo número de personas por mesa: 4', 'Aforo limitado', 'Distancia interpersonal: 2.5 (metros)'], terraza:true, imagen:'../../assets/images/restaurants/latabernadePepe.jpg' },
      {id:2 , nombre:'La Ración', tipo_comida:3, distancia:1.5, aforo_actual:14, aforo_maximo:25, direccion:'Calle Pinos Alta, 109', valoracion:4.1, medidas_covid:['Máximo número de personas por mesa: 5', 'Aforo limitado', 'Distancia interpersonal: 1.5 (metros)'], terraza:true, imagen:'../../assets/images/restaurants/laracion.jpg'},
      {id:3 , nombre:'Ala Sushi', tipo_comida:4, distancia:0.32, aforo_actual:9, aforo_maximo:20, direccion:'Avenida de Brasil, 53', valoracion:4.4, medidas_covid: ['Máximo número de personas por mesa: 4', 'Aforo limitado', 'Distancia interpersonal: 2 (metros)'], terraza:false, imagen:'../../assets/images/restaurants/AlaSushi.jpg'},
      {id:4 , nombre:'La Trattoria de Luigi', tipo_comida:1, distancia:1.2, aforo_actual:13, aforo_maximo:30, direccion:'Calle Del Pianolo, 5', valoracion:3.8, medidas_covid:['Máximo número de personas por mesa: 5', 'Servicio únicamente en terraza'], terraza:true, imagen:'../../assets/images/restaurants/latrattoriadeLuigi.jpg'},
      {id:5 , nombre:'El Chile de Huachipato', tipo_comida:5, distancia:2.9, aforo_actual:6, aforo_maximo:18, direccion:'Plaza del Mariscal Lorenzo, 5', valoracion:2.6, medidas_covid:['Aforo limitado'], terraza:false, imagen:'../../assets/images/restaurants/ElchiledeHuachipato.jpg'},
      {id:6 , nombre:'La Terracita de Juan', tipo_comida:2, distancia:1.0, aforo_actual:30, aforo_maximo:65, direccion:'Calle de Los Huertos, 48', valoracion:4.5, medidas_covid:['Máximo número de personas por mesa: 4', 'Aforo limitado', 'Distancia interpersonal: 2 (metros)', 'Servicio únicamente en terraza'], terraza:true, imagen:'../../assets/images/restaurants/laTerracitadeJuan.PNG'},
      {id:7 , nombre:'La Braseria de Matilde', tipo_comida:6, distancia:0.6, aforo_actual:8, aforo_maximo:28, direccion:'Plaza del Cardenal, 89', valoracion:4.8, medidas_covid:['Máximo número de personas por mesa: 5', 'Aforo limitado', 'Servicio únicamente en terraza'], terraza:true, imagen:'../../assets/images/restaurants/LaBraseriadeMatilde.jpg'},
      {id:8 , nombre:'Taberna La Plaza', tipo_comida:2, distancia:0.6, aforo_actual:21, aforo_maximo:35, direccion:'Calle Roma, 12', valoracion:4.5, medidas_covid:['Máximo número de personas por mesa: 6', 'Aforo limitado', 'Distancia interpersonal: 2 (metros)', 'Servicio únicamente en terraza'], terraza:true, imagen:'../../assets/images/restaurants/TabernaLaPlaza.jpg'},
      {id:9 , nombre:'Badulake', tipo_comida:7, distancia:0.2, aforo_actual:13, aforo_maximo:25, direccion:'Calle Flores, 22', valoracion:3.7, medidas_covid:['Máximo número de personas por mesa: 6', 'Aforo limitado', 'Distancia interpersonal: 2 (metros)'], terraza:false, imagen:'../../assets/images/restaurants/ElBadulake.jpg'},
      {id:10 , nombre: 'Stracciatella', tipo_comida:8, distancia:1.1, aforo_actual:8, aforo_maximo:20, direccion:'Calle Cali, 11', valoracion:4.7, medidas_covid:['Máximo número de personas por mesa: 6', 'Aforo limitado', 'Distancia interpersonal: 2 (metros)', 'Servicio únicamente en terraza'], terraza:true, imagen:'../../assets/images/restaurants/Stracciatella.jpg'},
      {id:11 , nombre:'Taberna Inglesa', tipo_comida:9, distancia:1.5, aforo_actual:15, aforo_maximo:35, direccion:'Calle Londres, 18', valoracion:4.8, medidas_covid:['Máximo número de personas por mesa: 6', 'Aforo limitado', 'Distancia interpersonal: 2 (metros)'], terraza:false, imagen:'../../assets/images/restaurants/TabernaInglesa.jpg'},
      {id:12 , nombre:'Taberna Degusta', tipo_comida:2, distancia:0.8, aforo_actual:10, aforo_maximo:56, direccion:'Calle de Francisco Sivela, 83', valoracion:5.0, medidas_covid:['Máximo número de personas por mesa: 4', 'Aforo limitado', 'Distancia interpersonal: 2 (metros)'], terraza:true, imagen:'../../assets/images/restaurants/TabernaDegusta.jpg'},
      {id:13 , nombre:'Pasticho', tipo_comida:1, distancia:1.5, aforo_actual:7, aforo_maximo:30, direccion:'Calle de Francisco Sivela, 75', valoracion:3.0, medidas_covid:[ 'Aforo limitado', 'Distancia interpersonal: 2 (metros)'], terraza:true, imagen: '../../assets/images/restaurants/Pasticho.jpg'},
      {id:14 , nombre:'KFC', tipo_comida:7, distancia:0.5, aforo_actual:24, aforo_maximo:70, direccion:'Calle de Francisco Sivela, 65', valoracion:4.0, medidas_covid:['Máximo número de personas por mesa: 4', 'Aforo limitado', 'Distancia interpersonal: 2 (metros)'], terraza:false, imagen:'../../assets/images/restaurants/kfc.jpeg'},
      {id:15 , nombre:'La Tacita de Oro', tipo_comida:2, distancia:0.8, aforo_actual:12, aforo_maximo:40, direccion:'Calle de Las Flores, 32', valoracion:3.9, medidas_covid:['Máximo número de personas por mesa: 4', 'Aforo limitado', 'Servicio únicamente en terraza'], terraza:true, imagen:'../../assets/images/restaurants/laTacitadeOro.jpg'}
    ];
  
  
    public readEstablecimiento(id:number):Establecimiento
    {
      return new Establecimiento(this.datos[id].id);
    }
  
    public eliminarEstablecimiento(id:number)
    {
      console.log('Eliminando:'+id);
      this.datos.splice(id,1);
      let i=0;
      for(let dato of this.datos)
      {
        dato.id=i;
        i++;
      }
    }
  
    public updateEstablecimiento(id:number,establecimiento:Establecimiento)
    {
      this.datos[id]=establecimiento;
    }
  
    public nuevoEstablecimiento(establecimiento:Establecimiento)
    {
      establecimiento.id=this.datos.length;
      this.datos.push(establecimiento);
    }
  
    public getNEstablecimientos()
    {
      return this.datos.length;
    }
  }

  /*export class FoodService {
    constructor() {}
  
    getAll():String[]{
        return [
            '/assets/images/restaurants/kfc1.jpeg',
            '/assets/images/restaurants/kfc2.jpeg',
            '/assets/images/restaurants/kfc3.jpeg',
            '/assets/images/restaurants/kfc4.jpeg',
  
            
        ]
    }
  }*/
  
  