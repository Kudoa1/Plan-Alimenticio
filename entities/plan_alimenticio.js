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


    //3. Permitir saber la cantidad de comidas de un tipo en particular (DM/AC) de un plan alimenticio.
    contTipoDeComida(tipo){
        let contTipo=0;
        for(let i=0;i<this.comidas.length;i++){
            if(this.comidas[i].tipo==tipo){contTipo++}
        }
        return contTipo;
    }


    //4. Permitir saber si el plan alimenticio es “fuerte en proteínas”: 
    //un plan alimenticio es “fuerte en proteínas” cuando el promedio de porcentaje de proteínas en todas las comidas AC 
    //es igual o superior al 50%.

    obtenerAC(){return this.comidas.filter(c=>c.tipo == "AC")}

    tipoComidaCumplePorcentaje(tipo,valor){
        let comidas=this.obtenerAC();
        // return comidas.every(c=>c.obtenerPorcentajeComida(tipo)>=valor);
        let totalPorcentaje = 0;
        comidas.forEach(c => {
            totalPorcentaje += c.obtenerPorcentajeComida(tipo);
        });
    
        let promedioPorcentaje = totalPorcentaje / comidas.length;
        return promedioPorcentaje >= valor;
    }

    esFuerteEnProteinas(){return this.tipoComidaCumplePorcentaje("proteina",50);}

    //5. Permitir saber si el plan alimenticio es “bien verde”: un plan alimenticio es “bien verde” 
    //cuando el promedio de porcentaje de vegetales en todas las comidas AC es superior al 35%.
    esBienVerde(){return this.tipoComidaCumplePorcentaje("vegetal",35);}

    //6. cantidad de colaciones
    cantColaciones(){return this.colaciones.length;}

    agregarColacion(colacion){this.colaciones.push(colacion)}


    //7. cantidad de bebidas
    cantBebidas(){return this.bebidas.length;}

    agregarBebida(bebida){this.bebidas.push(bebida)}
}