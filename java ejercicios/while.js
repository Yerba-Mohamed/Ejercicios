// while-----bucle
// for(let i=0 ; i<10; i++){
//     document.write(i + "<br>")
// }

// let j = 0;

// while(j<=5){
//     j=parseInt(prompt("Escribe un numero"));
//     document.write(j);
//         j++;
// }

// let tecla = "";
// while(tecla!=="s"){
//    tecla= prompt("escribe una letra.Para salir pulsa s")
//     tecla=tecla.toLowerCase();
// }

// do{
//     alert("bien venidos");
//     document.write(j);
// }while(j<=10)


//----------------------Ejercicios------------------------
// let billetes = 0;
// while(billetes <=50){
//     billetes= parseInt(prompt("Vamos a contar billetes"));
//     sumaTotal=sumaTotal+billetes.toUpperCase();
//     document.write(billetes);
//     console.log(billetes+ ""+ "<br>")
// }

// do{
//     alert("contar billetes")
//     document.write(billetes)
//     billetes=billetes.
// }while(billetes="5,10,20,50")

//-----------------------------------

let suma = 1;
let cantidadBilletes;
let valorBilletes;
do{ 
let cantidadBilletes = prompt(" Pon un billete:")
let valorBilletes = prompt("Que valor tiene un billete:")
suma = suma+(cantidadBilletes* valorBilletes);

 if(cantidadBilletes ==0);
   
     console.log(suma +"" + "<br>")


 break

 }while(true);
       alert("la suma total " + suma)
//-----------------------------------
let contraseña=  "";
while(contraseña!=="123"){
    contraseña= parseInt(  prompt("su contraseña")) ;
    console.log(contraseña + ""+ "<br>");
    if(contraseña==123){
        document.write("Bienvenido")
    }else if(contraseña!==123){
        document.write("contraseña incorrecta")
    }

    
  

 }   
 alert("Correcto")
    console.log()

