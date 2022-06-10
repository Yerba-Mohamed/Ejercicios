// let frase = " Esta frase es nueva para hacer prueba de texto de Angel"

// let redonada = frase.slice(1,4);
// console.log(redonada);


// let frase2="";
// if(frase.includes("Angel")){  
// alert("Hola angel")

// frase.replace("Angel", "Alejandro");
// alert("Hola Alejandro")

//  }
// //------SPLIT contrario para unir
// let separar = frase.split(" ");
// console.log(separar);

// //--------
// let fraseTotal= frase.concat(" + Hola Alejandro");
// console.log(fraseTotal);
// //CHAR AT() TE BUSCA CARACTER

// let charBuscar = fraseTotal.charAt(8);
// console.log(charBuscar);

// for (let i=0; i<fraseTotal.length; i++){
//     console.log("posicion letra :"+ i+ " " + fraseTotal.charAt(i));

// }



//---------------EJERCICIOS--------------------
let frase = "Corregir la siguiente frase de texto, cuidado con la separación"
console.log(frase);
console.log(frase + "-")

// for (let i=0; i<frase.length; i++){ 

// document.write(frase.charAt(i))
//  }

//  frase=frase.replace("texto", "frase");
//  console.log(frase);


  for (let i=frase.length-1; i>=0; i--){

 		 document.write(frase[i]+ "")
            }
 //----------------------------------

let parrafo = "Eduardo Martínez de Pisón y Sebastián Álvaro entienden muy bien las montañas. Les han dedicado su vida, y han comprendido el misterio que las envuelve, desvelado en este inmenso, magnífico, libro de tinte enciclopédico con abundante y extraordinario material iconográfico, que ya va por su tercera edición. En él no solo recorren la historia del alpinismo y sus protagonistas, sino que también explican cómo se ha ido gestando el sentimiento de la montaña a través de los más esenciales testimonios literarios y artísticos. Se trata de un documento de un valor excepcional, imprescindible para todos aquellos que deseen acercarse al mundo romántico de la montaña."
let José= "";
console.log(parrafo.replace("Álvaro", "José"))

let PARRAFO2="";

if(parrafo.includes("Álvaro")){  


 PARRAFO2= parrafo.replace("Álvaro", "José");
 console.log(PARRAFO2)
  }
let universo="";
  console.log(parrafo.replace("mundo", "universo"))

