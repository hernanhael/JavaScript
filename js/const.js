export const PI = Math.PI; 

let user = "hernanhael"; 
let password = "123456789"; 
/* export default password; */  
 

//Función declarada, arriba o abajo, da igual.
export default function sayHello() { 
    console.log("Hi!");
} 

//Función expresada, de aquí para abajo.
export const sayGoodBye = () => { 
    console.log("Hasta la vista, baby!");
} 



export class Scream { 
    constructor() { 
        console.log("Get out from here!!!!");
    }
}

//En una misma línea de código solo se pueden exportar de manera default las funciones y clases.
//let y const para ser exportada default, debe ser en una línea aparte luego de ser declaradas. 