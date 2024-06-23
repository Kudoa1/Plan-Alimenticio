import { PlanAlimenticio } from "../entities/plan_alimenticio";
import { Objetivo } from "../entities/objetivo";
import {Comida} from "../entities/comida";
import {Bebida} from "../entities/bebida"
import {Colacion} from "../entities/colacion"
import { Ingrediente } from "../entities/ingrediente";

//1. Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos.
test ("me devuelve Excelente ya que todos los objetivos se cumplieron", ()=>{
    let plan_alimenticio=new PlanAlimenticio();
    let objetivo1=new Objetivo();
    let objetivo2=new Objetivo();
    let objetivo3=new Objetivo();
    let objetivo4=new Objetivo();
    let objetivo5=new Objetivo();
    let objetivo6=new Objetivo();

    objetivo1.objetivoCompletar();
    objetivo2.objetivoCompletar();
    objetivo3.objetivoCompletar();
    objetivo4.objetivoCompletar();
    objetivo5.objetivoCompletar();
    objetivo6.objetivoCompletar();

    plan_alimenticio.agregarObjetivo(objetivo1);
    plan_alimenticio.agregarObjetivo(objetivo2);
    plan_alimenticio.agregarObjetivo(objetivo3);
    plan_alimenticio.agregarObjetivo(objetivo4);
    plan_alimenticio.agregarObjetivo(objetivo5);
    plan_alimenticio.agregarObjetivo(objetivo6);
    
    let evaluacionObtenida= plan_alimenticio.generarEvaluacion();

    expect(evaluacionObtenida).toBe("Excelente");
})

test ("me devuelve Regular ya que solo 2 objetivos se cumplieron", ()=>{
    let plan_alimenticio=new PlanAlimenticio();
    let objetivo1=new Objetivo();
    let objetivo2=new Objetivo();
    let objetivo3=new Objetivo();
    let objetivo4=new Objetivo();
    let objetivo5=new Objetivo();
    let objetivo6=new Objetivo();

    objetivo1.objetivoCompletar();
    objetivo2.objetivoCompletar();

    plan_alimenticio.agregarObjetivo(objetivo1);
    plan_alimenticio.agregarObjetivo(objetivo2);
    plan_alimenticio.agregarObjetivo(objetivo3);
    plan_alimenticio.agregarObjetivo(objetivo4);
    plan_alimenticio.agregarObjetivo(objetivo5);
    plan_alimenticio.agregarObjetivo(objetivo6);
    
    let evaluacionObtenida= plan_alimenticio.generarEvaluacion();

    expect(evaluacionObtenida).toBe("Regular");
})

// 2. Permitir saber la cantidad total de comidas de un plan alimenticio
test ("el plan tiene 3 comidas, me debe devolver 3", ()=>{
    let comida1=new Comida();
    let comida2=new Comida();
    let comida3=new Comida();
    let plan_alimenticio= new PlanAlimenticio();

    for (let i=1;i<=3;i++){plan_alimenticio.agregarComida("comida"+i);}
    
    let comidasObtenidas=plan_alimenticio.cantComidas();

    expect(comidasObtenidas).toBe(3);
    
})

//3 Permitir saber la cantidad de comidas de un tipo en particular (DM/AC) de un plan alimenticio.
test("Envio 4 comidas de tipo DM, me devuelve valor 4",()=>{
    let plan_alimenticio= new PlanAlimenticio();
    let comida1=new Comida("DM");
    let comida2=new Comida("DM");
    let comida3=new Comida("DM");
    let comida4=new Comida("DM");

    plan_alimenticio.agregarComida(comida1);
    plan_alimenticio.agregarComida(comida2);
    plan_alimenticio.agregarComida(comida3);
    plan_alimenticio.agregarComida(comida4);

    let obtenido= plan_alimenticio.contTipoDeComida("DM");
    expect(obtenido).toBe(4);
})

//4. Permitir saber si el plan alimenticio es “fuerte en proteínas”: 
    //un plan alimenticio es “fuerte en proteínas” cuando el promedio de porcentaje de proteínas en todas las comidas AC 
    //es igual o superior al 50%.
test("Tengo 4 comidas, de las cuales 3 su composicion es de proteinas, espero que devuelva TRUE",()=>{
    //creamos plan, creamos comidas(las agregamos a comidas[]), luego llamamos a esFuerteEnProteinas() y nos devuelve true/false
    //Datos: 4 comidas, de las cuales agregamos su composicion[] de ingredientes, 3 de estas son proteinas y la otra es vegetal
    //esperado: True
    let plan_alimenticio= new PlanAlimenticio();
    let comida1=new Comida("AC");
    let comida2=new Comida("AC");
    let comida3=new Comida("AC");
    let comida4=new Comida("AC");

    //Creamos los  objetos ingredientes, insertarlos como string está mal porque son OBJETOS
    let proteina1 = new Ingrediente();
        proteina1.tipo = "proteina";
        proteina1.porcion = 100;
    let proteina2 = new Ingrediente();
        proteina2.tipo = "proteina";
        proteina2.porcion = 100;
    let proteina3 = new Ingrediente();
        proteina3.tipo = "proteina";
        proteina3.porcion = 100;
    let vegetal = new Ingrediente();
        vegetal.tipo = "vegetal";
        vegetal.porcion = 100;

    comida1.agregarIngrediente(proteina1);
    comida2.agregarIngrediente(proteina2);
    comida3.agregarIngrediente(proteina3);
    comida4.agregarIngrediente(vegetal);

    plan_alimenticio.agregarComida(comida1);
    plan_alimenticio.agregarComida(comida2);
    plan_alimenticio.agregarComida(comida3);
    plan_alimenticio.agregarComida(comida4);

    let obtenido= plan_alimenticio.esFuerteEnProteinas();
    expect(obtenido).toBe(true);
})

//6. cant colaciones
test("tengo 4 colaciones, me devuelve valor 4",()=>{
    let plan_alimenticio= new PlanAlimenticio();
    let colacion2=new Colacion();
    let colacion3=new Colacion();
    let colacion1=new Colacion();
    let colacion4=new Colacion();

    plan_alimenticio.agregarColacion(colacion1);
    plan_alimenticio.agregarColacion(colacion2);
    plan_alimenticio.agregarColacion(colacion3);
    plan_alimenticio.agregarColacion(colacion4);

    let obtenido= plan_alimenticio.cantColaciones();
    expect(obtenido).toBe(4);
})

//7. cant bebidas
test("tengo 4 bebidas, me devuelve valor 4",()=>{
    let plan_alimenticio= new PlanAlimenticio();
    let bebida1=new Bebida();
    let bebida2=new Bebida();
    let bebida3=new Bebida();
    let bebida4=new Bebida();

    plan_alimenticio.agregarBebida(bebida1);
    plan_alimenticio.agregarBebida(bebida2);
    plan_alimenticio.agregarBebida(bebida3);
    plan_alimenticio.agregarBebida(bebida4);

    let obtenido= plan_alimenticio.cantBebidas();
    expect(obtenido).toBe(4);
})