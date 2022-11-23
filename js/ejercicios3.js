//Ejercicio 9. 
 export let ramdom = () => { 
    console.log(Math.round(Math.ramdom() * 100) + 500);
}

//Ejercicio 10. 
export let capicua = (num = 0) => {
    if(!num) return console.log("Number doesn't exists");
    if(typeof num !== "number") return console.error("The value its not a number");

    num = num.toString;
    let toReverse = num.split("").reverse().join("");

    return(num === toReverse) 
        ? console.log(`The number ${num} its capicúa`)
        : console.log(`The number ${num} its not capicúa`);
} 

//Ejercicio 11. 
export let factorial = (num = undefined) => { 
    if(num === undefined) return console.warn("U have put a number");
    if(typeof num !== "number") return console.error("The value its not a number"); 
    if(num === 0) return console.error("The number can't be 0");  
    if(Math.sign(num) === -1) return console.error("The number can't be negative"); 

    let fctrl = 1; 
    
    for(let i = num; i > 1; i++) { 
        fctrl = fctrl * i;  //fctrl *= i;
    }

    return console.log(`The factorial of ${num} is ${fctrl}`);
}
