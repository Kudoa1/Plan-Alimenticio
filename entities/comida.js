import { Ingrediente } from "./ingrediente";

export class Comida{
    tipo;
    descripcion;
    composicion=[]; //ingredientes (objetos, con sus propiedades)

    constructor(tipo){
        this.tipo=tipo;
    }

    
    agregarIngrediente (ingrediente) {
        if(this.tipo="AC"){
            this.composicion.push(ingrediente)
        }
    }

    calcularComposicionComida(){
        let porcionProteina=0;
        let porcionCarbohidrato=0;
        let porcionVegetal=0;
        let porcionTotal=0;

        let porcentajeProteina=0;
        let porcentajeCarbohidrato=0;
        let porcentajeVegetal=0;

        //calculo todas las porciones de la composicion segun su tipo
        this.composicion.forEach(ing => {
            porcionTotal+=ing.porcion;
            switch (ing.tipo){
                case "proteina":porcionProteina+=ing.porcion;
                case "carbohidrato": porcionCarbohidrato+=ing.porcion;
                case "vegetal": porcionVegetal+=ing.porcion;
            }
        })

        //calculo el porcentaje de cada tipo de la porcion total
        porcentajeProteina=this.porcentaje(porcionTotal,porcionProteina);
        porcentajeCarbohidrato=this.porcentaje(porcionTotal,porcionCarbohidrato);
        porcentajeVegetal=this.porcentaje(porcionTotal,porcionVegetal);

        return {porcionTotal, porcentajeProteina, porcentajeCarbohidrato, porcentajeVegetal}
    }

    porcentaje(total,valor){return (100/total)*valor}

    obtenerPorcentajeComida(tipo){
        let indice;
        switch (tipo){
            case "proteina":indice=1;
            case "carbohidrato":indice=2;
            case "vegetal":indice=3;
        }
        return this.calcularComposicionComida()[indice];
    }


}