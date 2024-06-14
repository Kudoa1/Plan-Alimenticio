export class PlanAlimenticio{
    pesoActual;
    medidaCintura;
    duracion;
    edad;
    objetivos=[];
    comidas=[];
    colaciones=[];
    bebidas=[];

    //2. saber la cantidad de comidas del plan.
    cantComidas() {return this.comidas.length;}

    agregarComida(comida){this.comidas.push(comida);}

    //1 Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos.
    generarEvaluacion(){
        let porcentaje= this.porcentajeDeObjetivosCumplidos();

        if(porcentaje==100){return "Excelente"} 
        else if(porcentaje>60 & porcentaje<100){return "Muy Buena"}
        else if(porcentaje>=50 && porcentaje<=60){return "Buena"}
        else{return "Regular"};
    }

    agregarObjetivo(objetivo){this.objetivos.push(objetivo);}

    cantidadDeObjetivos(){return this.objetivos.length}

    porcentajeDeObjetivosCumplidos(){
        if (this.cantidadDeObjetivos() === 0) {return 0;}    // Si no hay objetivos, el porcentaje es cero
        const cumplidos = this.objetivos.filter(objetivo => objetivo.cumplido).length;
        return Math.round((cumplidos / this.cantidadDeObjetivos()) * 100);
    }
}