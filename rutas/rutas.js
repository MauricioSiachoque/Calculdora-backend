import { Router } from "express";

const router = Router();


//http://localhost:3000/suma/4/7           params son parametros, en este caso, es numero1 y numero2   

// el paseint es para que sume, ya que concatenan y no suman


//SUMA
router.get('/suma/:numero1/:numero2', function (req, res){
    let numero1 = parseInt(req.params.numero1);
    let numero2 = parseInt(req.params.numero2);
    let suma = numero1+numero2;
    res.json({
        "resultado": suma
    })
})

//RESTA
router.get('/resta/:numero1/:numero2', function (req, res){
    let numero1 = parseInt(req.params.numero1);
    let numero2 = parseInt(req.params.numero2);
    let resta = numero1-numero2;
    res.json({
        "resultado": resta
    })
})

//AREA CIRCULO
router.get('/area/circulo/:radio', function (req, res){
    
    let radio = parseFloat(req.params.radio);
    let area = (Math.PI)*(radio**2)                               //calculamos el area
    res.json({
        "resutaldo":`El area de tu circulo es ${area}`,
        "data":area
    })
})



//---------------------------  AUN NO ESTA COMPLEATA--------------------------------------------

//DAR UN AÑO Y CONTAR DIAS HASTA HOY 

router.get('/tiempo/dias/:anio', function (req, res){
    
    let anio = parseInt(req.params.anio);
    let transcurridos = 2023 - anio;
    let totalsin = transcurridos*365
    let bisiestos = transcurridos % 4;
    let total = totalsin+bisiestos;
    res.json({
        "resutaldo":`los dias transcurridos desde ${anio} hasta 2023 son ${total} `
    })
})

//---------------------------  AUN NO ESTA COMPLEATA-----------------------------------------------

//  CELCIUS A FARENHEIT

router.get('/calor/farenheit/:grados', function (req, res){
    
    let celsius = parseFloat(req.params.grados);
    let resFar = (1.8)*celsius + 32  
    res.json({
        "resutaldo":`los ${celsius}° son equivalentes a ${resFar}° grados farenheit`,
        "data":resFar
    })
})

export default router;