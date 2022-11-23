import sayHello, { PI, Scream } from "./const.js"; 
import { aritmetic as ar } from "./aritmetic.js"; //Con el AS se declara aritmetic como AR. 
import { charNumber, cutText, stringToArray, repeatString, declaredChartNumberFunction, declaredCutTexFunction, stringToArrayFunction, repeatStringFunction } from "./ejercicios.js "; 
import { invertWords, howManyTimesRepeat, palindromo } from "./ejercicios2.js";
import { ramdom } from "./ejercicios3";


console.log(PI);
console.log(ar.sum(1, 4));
/* console.log(aritmetic.rest(100, 1001)); */ 
sayHello();
let scream = new Scream();
scream;   

charNumber();
cutText();
stringToArray();
repeatString("Gooooooool", 2);
declaredChartNumberFunction("Cúantas letras tengo?");
declaredCutTexFunction("Hola Hernán");
stringToArrayFunction("ad aa", " "); 
repeatStringFunction("Juan", 3); 
invertWords("My name is Hernán");   
howManyTimesRepeat(); 
palindromo(); 
ramdom();