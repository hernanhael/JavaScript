//Ejercicio 5. 
export let invertWords = (words) => { 
    (!words) 
    ?console.warn("No text to invert")
    :console.log(words.split("").reverse().join(""));
} 

//Ejercicio 6. 
export let howManyTimesRepeat = (text = "", word = "") => { 
    if (!text) return console.warn("No text"); 
    if (!word) return console.warn("No word"); 

    let i = 0; 
    let counter = 0; 

    while(i !== -1) { 
        i = text.indexOf(word, i); 
        if(i !== -1) { 
            i++; 
            counter++;
        }
    }
    return console.log(`The var ${word} repeat in ${counter} times`); 
} 

//Ejercicio 7. 
export let palindromo = (words = "") => { 
    if(!words) return console.warn("No words"); 

    words = words.toLowerCase(); 
    let toReverse = words.split("").reverse("").join(""); 

    return(words === toReverse) 
        ?console.log(`Primary word${words} to reverse ${toReverse}`) 
        :console.log(`The words are not palindromun`);  
}

//Ejercicio 8. 
export let deletCharacet = (text = "", patron = "") => { 
    (!text) 
        ?console.log("No text")
        :(!patron) 
            ?console.warn("No patron")
            :console.info(text.replace(new RegExp(patron, "ig"), ""));
}
