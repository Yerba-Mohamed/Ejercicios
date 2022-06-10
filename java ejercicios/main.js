// let mes= parseFloat(prompt(" introduce el mes del 1/12"));

// if(mes==1||mes==12){
//     alert("es invierno")
// }else if (mes==3||mes==4){
//     alert("es primavera")
// }else if(mes==6||mes==7){
//     alert("es verano")
// }
// else if(mes==9||mes==10){
//     alert("es otoño")
// } else{
//     alert("debe ser del 1 al 12")
// }

//-----------------

// let mes= parseFloat(prompt(" introduce un mes del 1/12"));
// switch (mes){
//     case 12:
//     case 1:
//     case 2:
//     alert("es es invierno");
//     break;
//     case 3:
//     case 4:
//     case 5:
//         alert("es primavera");
//         break;
//         case 6,7,8:
       
//             alert("es verano");
//             break;
//             case 9:
//             case 10:
//             case 11:
//                 alert("es otoño");
//                 break;


//                 default:
//                     alert("Este mes no existe")



             
        


// let color=prompt("Di un color");
// if((color=="azul")|| (color=="violeta")&&(color== "verde")){
//     alert("Es frio");
// }else if((color=="rojo")||(color=="amarillo")&&(color=="naranja")){
//     alert("Es calido");
// }else{ 
//  ((color==gris)||(color=="negro")&&(color=="blanco"))
//  alert("Es neutro");
//   }

// let colores=prompt("Elige un color ");
//   switch (colores){
//       case "azul":
//           alert("es frio");
//           break;
//       case "rojo":
//           alert(" es calido");
//           break;
//      case "negro":
//          alert("Es neutro")
//          break;
         
//          default:
//              alert("No esta en la lista")

//   }

//   let i;
//   for (i=1;i>=10;i++){
//       document.write( i +"<br>")
//   }

  //---------------
  let numeroMultiplicar=5;
  for(let i=1;i>=10;i++){ 
  let multi= parseInt(prompt(" aqui"))
  
  document.write(numeroMultiplicar*1+ "<br>");
  console.log(numeroMultiplicar +  ""+ "<br>")
  }


//   //---------------------
//   document.write("CARRITO DE LA COMPRA");
//   let precio;
//   let precioCompra;

//---------------------------------------------------------
// let letra = prompt(" Elige una letra");
// let numero = prompt(" Elige un número");
  
//    for(let i=1; i<=numero; i++){ 
//    document.write(i + " "+letra + "<br>")
    
//     }


//-----------------------------------------------

// let contar = prompt("Cuantos billetes tienes?");
// let billetes= prompt("de cuantos es el valor del billete")
// for (let i= 10 ; i<=10;i++){
//     document.write(i + " "+billetes +"<br>")
// }

// function resuelto(){
//     document.getElementById("cuantos billetes");
//     document.write(i+ billetes+ "<br")
// }

// while-----bucle
// for(let i=0 ; i<10; i++){
//     document.write(i + "<br>")
// }

// let j = 0;

// while(j<10){
//     document.write(j);
//         j++;
// }

// let tecla = "";
// while(tecla!=="s"){
//     prompt("escribe una letra.Para salir pulsa s")
//     tecla=tecla.toUpperCase();
// }

//--------------------------------------
function tablaDeMultiplicar(numero) {
    let i = 1;
    let resultado = 0;
    while(i<=10){
        resultado=i*numero;
        console.log(numero + "*" + i + "=" +  resultado);
        i++;
        document.write(numero + "*" + i + "=" +  resultado+ "<br>")
    }
}
tablaDeMultiplicar(5);