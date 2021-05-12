export class Establecimiento
{
    id!: number; //Atributo 0: identificador único del establecimiento
    nombre!: string;  //Atributo 1: nombre del establecimiento
    tipo_comida!: number; //Atributo 2: tipo de comida ofrecida: int de 1 a N que identificará el tipo de comida ofrecida
    distancia!: number; //Atributo 3: distancia a la que se encuentra el establecimiento
    aforo_actual!: number; //Atributo 4: aforo actual en el establecimiento
    aforo_maximo!: number; //Atributo 5: aforo máximo permitido en el establecimiento
    direccion!: string; //Atributo 6: dirección física del establecimiento
    valoracion!: number; //Atributo 7: valoración del establecimiento de 0-5
    medidas_covid!: Array<string>; //Atributo 8: conjunto de medidas anti-covid guardadas como un array de strings
    terraza!: boolean; //Atributo 9: representa si el establecimiento dispone de terraza (True) o no (False)
    imagen!: string; //Atributo 10: imagen representativa del establecimiento, guardada como una url a la imagen de Internet (por ahora como string)
     
    constructor(id:number) 
    {
        if (id >= 0) {
            this.id = id;
        }
      
    }   
}
