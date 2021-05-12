import { Injectable } from '@angular/core';
import { Establecimiento } from '../../compartido/modelos/establecimiento'

@Injectable({
  providedIn: 'root'
})

export class ViewEstablecimiento {
       
  private static TIPOS_ESTAB:string[]=['','Italiana', 'Española', 'Mediterránea', 'Japonesa', 'Chilena', 'Argentina', 'Comida rápida', 'Postres', 'Inglesa'];
      

  public static getNombre(establecimiento:Establecimiento)
  {
      return establecimiento.nombre;
  }


  public static getTipo(establecimiento:Establecimiento)
  {
      return ViewEstablecimiento.TIPOS_ESTAB[establecimiento.tipo_comida];
  }


  public static getDistancia(establecimiento:Establecimiento)
  {
      return establecimiento.distancia;
  }


  public static getAforoActual(establecimiento:Establecimiento)
  {
      return establecimiento.aforo_actual;
  }


  public static getDireccion(establecimiento:Establecimiento)
  {
      return establecimiento.direccion;
  }


  public static getValoracion(establecimiento:Establecimiento)
  {
      return establecimiento.valoracion;
  }


  public static getMedidas(establecimiento:Establecimiento)
  {
      return establecimiento.medidas_covid;
  }


  public static getAforoMax(establecimiento:Establecimiento)
  {
      return establecimiento.aforo_maximo;
  }


  public static getTerraza(establecimiento:Establecimiento)
  {
      return (establecimiento.terraza)?"Sí":"No";
  }    


  public static getTipos()
  {
      return ViewEstablecimiento.TIPOS_ESTAB;
  }

  public static getImagen(establecimiento:Establecimiento)
  {
      return establecimiento.imagen;
  }
  
 
}

