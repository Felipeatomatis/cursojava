// Algoritmo para calcular el valor de un producto seleccionando la cantidad de cuotas y su valor.

//Ingrese el nombre de un producto
//Ingrese el valor de su producto
//Desea ingresar otro producto?
//Si marco si, ingresar nombre y valor, si marco que no seguir.
//Seleccionar cantidad de cuotas
//Valor final
//Gracias por confiar en nosotros :D

//let condicion = false
//while(condicion == true){
//    console.log("Se ejecuta el ciclo")
//}



//let productoIngresado = prompt("Ingrese su producto")
//console.log("Su producto " + productoIngresado)

//let pregunta1 = prompt("Ingrese el valor del producto")
//console.log("Su producto " + productoIngresado + " cuesta " + pregunta1)

let condicion = true 
let productoIngresado
let cuotas3 = 3
let precio1
let suma = precio1/cuotas3
do{
    let pregunta2 = prompt("¿Desea ingresar un producto?")
    if(pregunta2 == "si"){
        let productoIngresado = prompt("Ingrese el nombre del producto")
        console.log("Su producto: " + productoIngresado)

        let precio1 = prompt("Ingrese el valor del producto")
        console.log("Su producto: " + productoIngresado + " cuesta " + precio1)


    }else{
        condicion = false
        //console.log("Gracias por confiar en nosotros")

        let pregunta2 = parseInt(prompt(`Ingrese numero de cuotas que desea abonar:
        1: -3 cuotas`))    
    }if (pregunta2 !="1"){

        console.log("Usted eligio pagar en 3 cuotas")
    }
    }while(condicion)

    let pregunta3 = prompt("¿Desea conocer el valor de las cuotas?")
    if(pregunta3.toLowerCase() == "si"){
        let resultadoSuma = (precio1/cuotas3)

        console.log("El valor de cada cuota es de: " + resultadoSuma)
    }

  










                    
            
    

