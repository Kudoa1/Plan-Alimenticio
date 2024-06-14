import { PlanAlimenticio } from "../entities/plan_alimenticio";
import { Objetivo } from "../entities/objetivo";
import {Comida} from "../entities/comida";

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
test("de 4 comidas, 3 son AC y 1 es DM, me devuelve TRUE (porque es mayor a 50%)",()=>{
    let plan_alimenticio= new PlanAlimenticio();
    let comida1=new Comida("DM");
    let comida2=new Comida("AC");
    let comida3=new Comida("AC");
    let comida4=new Comida("AC");

    plan_alimenticio.agregarComida(comida1);
    plan_alimenticio.agregarComida(comida2);
    plan_alimenticio.agregarComida(comida3);
    plan_alimenticio.agregarComida(comida4);

    let obtenido= plan_alimenticio.esFuerteEnProteinas();
    expect(obtenido).toBe(true);
})