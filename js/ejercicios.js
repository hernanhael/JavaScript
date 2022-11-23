//Ejericio 1.
export function charNumber() { 
    let hello = "Hello Wolrd!";
    console.log(hello.length); 
} 

export let declaredChartNumberFunction = (chain = "") => { 
    if(!chain) { 
        console.warn("Empty space");
    } else {
        console.info(`The chain ${chain} have ${chain.length} characters`)
    }
} 


//Ejercicio 2. 
export function cutText() { 
    let hello = "Hello World!";
    console.log(hello.substring(0,5)); 

} 

export let declaredCutTexFunction = (chain = "", longitude = undefined) => { 
    (!chain) 
    ? console.warn("Input its empty!")
    :(longitude === undefined)
        ?console.warn("No longitude declared")  
        :console.info(chain.slice(0, longitude));
}

//Ejercicio 3.
export function stringToArray() { 
    let hello = "Hello World!"; 
    console.log(hello.split(" ")); 
} 

export let stringToArrayFunction = (word = "", separator = undefined) => { 
    (!word) 
    ?console.warn("No text input")
    :(separator === undefined)
        ?console.warn("No separator declared")
        :console.log(word.split(separator));
}

//Ejercicio 4. 
export let repeatString = (score = "", repeats = undefined) => { 
    console.log(score.repeat(undefined)); 
} 

export let repeatStringFunction = (word = "", repeats = undefined) => {
    if(!word) return console.warn("No text input");
    
    if(repeats === undefined) return console.warn("No repeats designed");
    
    if(repeats === 0) return console.error("Can't repeat en 0 times"); 
    
    if(Math.sign(repeats) === -1) return console.error("The number can't be negative"); 
    
    for(let i=1; i<=repeats; i++) { 
        console.log(`${word}, ${i}`);    
    }
} 
