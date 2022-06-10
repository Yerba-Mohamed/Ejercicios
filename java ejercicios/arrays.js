// const animales =[ "perro", "gato","delfin", "tortuga", " elefeante"]

// // El indice empieza por cero--------

// console.log(animales)
// console.log("Array animales :" + animales)

// //lenght: indica cantidad de elementos-----
// console.log("cantidad de elementos : "+ animales.lenght)

// console.log(animales[3])
// console.log(animales[5])

// //recorrido tipico de arrays
// for (let i=0; i<animales.length; i++){
//     console.log(animales[i])
// }

// for (let x in animales){
//     console.log(x)// muestra el indice de cada elemento

// }

// for(let x of animales){
//     console.log(x)// muestra el valor de cada elemento

// }


//EJERCICIOS---------------------------------
// const animales=["gato","perro","tigre","leon","lobo"]
// console.log(animales)
// console.log("Array animales:"+ animales)
// for(let x in animales){
//     console.log(animales[4])
 
   
// }

// for (let i=0; i<animales.length; i++){
//     console.log(i)
   
// }
// animales.push("pato","lagarto","tortuga")
// console.log("ahora la lista es:" +animales)

//pop : quita al final

// animales.pop();
// animales.pop("pato","lagarto","tortuga")
// console.log("ahora la lista es:" +animales)

// //unshift, shift añadir o quitar al primero
// //splace borrar o insertar varios en el medio

// //*C*R*U*D*
// //CREAT
// animales[10]= "tortuga"
// //READ

// console.log(animales[9])
// //UPDATE
// animales[9]= "lagarto"
// //DELATE
// animales .pop()
// console.log("ahora la lista es:" +animales)


//Ejercicios---------------------

// const personas=[  "Ali", "Juan" , "Alberto", "Yerba","Sonia","Alejandro","Rosa","Martina","Ricardo","Marcelo"]
// console.log("la lista es:" +personas)

// console.log(personas)
// personas[0]="Nacho"


// console.log("ahora la lista es:" +personas)


// // personas.pop();
// // personas[9]= "Sandra"
// // personas[10]="Alex"

// personas.push();
// personas[10]="Sandra"
// personas[11]="Alex"
// console.log("Lista final es:"+ personas)


//-----------------------------------------------------------
// const numeros= ["1","2","3","4","5"   ]
// console.log(numeros)
// const reversed = numeros.reverse();
// console.log("Lista al reves:"+ numeros)


// //-----------------------------------------
// const numeros2= ["1","2","3","4","5"   ]
// console.log(numeros2)

// numeros2.reverse()
// console.log("lista al reves:"+ numeros2)


// //-----------------------------------------
// const numeros1 = ["1","2","3","4","5"   ]
// for (let i=numeros1.length-1; i>=0; i--){
// 	    //  console.log(numeros1 + "-")
// 		 document.write(numeros1[i]+ "-")
		
//  }


//-----------------
const artistas =["Alejando Sans" ,"Sabina", "Serrat","Rosa Lopez"]
console.log(artistas);

//Splice
// inserta-----
artistas.splice(1,0, "estope")
console.log(artistas);
// la posicion 1 empieza y borra 2 y añade "els pets"
artistas.splice(1,2,"els pets")
console.log(artistas)

artistas.splice (2,3);
console.log(artistas)

//-------
artistas.unshift("camaron");
console.log(artistas);

artistas.shift(); // quita uno
console.log(artistas);

artistas.splice (0,0, "camaron");
console.log(artistas);

//Random------ presentar lista en orde aleotorio
for(let i=0; i<artistas.length; i++){
	console.log(artistas[i]);
}

//Math.randon() da un numero  0-0-99,  para un numero entero, lo multiplica (*10 te da un numero del 1 al 10)
for(let i=0; i<artistas.length; i++){
	console.log(artistas[Math.floor(Math.random()*artistas.lenght)]);
}

let listaOrdenada = artistas.sort()
console.log(artistas);



console.log(listaOrdenada.reverse());


//----------------------------------

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
document.getElementById("demo").innerHTML = points;

//------------------------------

//generar listas con PROMPET
const artistas2 = [ "You"]
for (let i=0; i<5; i++){
	artistas2[i]=prompt("escribe nombre artistas")
}
console.log(artistas)

//para borrar
// artistas2= [];
// console.log(artistas2)

//--------------juntar dos arrays
 const arraysTotal=artistas.concat(artistas2);
 console.log("Total:" + arraysTotal)



