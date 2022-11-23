//Ejercicio 12. 
export let numPrimo = (num = undefined) => { 
    if(num === undefined) return console.error("The number box its empty"); 
    if(typeof num !== "number") return console.error("The value its not a number"); 
    if(num === 0) return console.warn("The number can't be 0");
    if(num === 1) return console.warn("The number can't be 1"); 
    if(Math.sign(num) === -1) return console.error("The number can't be negative"); 

    let divisible = false; 

    for(i = 2; i < num; i++) { 
        if((num % i) === 0) {
            divisible = true;
            break;
            }
        }
        return(divisibele) 
        ? console.log(`The number ${num} its not a primo`)
        : console.log(`The number ${num} its a primo`);
    }

    //Ejercicio 13. 
    const numParImpar = (num = undefined) => { 
        if(num === undefined) return console.log("No number to show"); 
        if(typeof num !== "number") return console.log("The value its not a number"); 

        return((num % 2) === 0)
        ? console.log("The number its par")
        : console.log("The number its impar")
    }

    //Ejercicio 14. 
    const convertGrades = (grades = undefined, unit = undefined) => { 
        if(grades === undefined) return console.log("Grades can't be undefined");
        if(typeof grades !== "number") return console.log("Grades its not a number"); 
        if(unit === undefined) return console.log("unit undefined"); 
        if(typeof unit !== "string") return console.log ("Unit its not a string"); 
        if(unit.length !== 1||!/(C|F)/.test(unit)) return console.log("No recognize unit");

        if(unit === "C") { 
            return console.info(`${grades}°C = ${Math.round((grades * (9/5)) + 32)}°F`);
        } else if(unit === "F") { 
            return console.info(`${grades}°F = ${Math.round(((grades - 32) * (5/9)))}°C`)
        }
    }