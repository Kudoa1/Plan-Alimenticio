export class Objetivo{
    nombre;
    descripcion;
    cumplido=false;

    // constructor(nombre,descripcion){
    //     this.nombre=nombre;
    //     this.descripcion=descripcion;
    // }

    objetivoCompletar(){
        this.cumplido=true;
    }

}