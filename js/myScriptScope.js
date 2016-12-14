/* 
 * Un scope c'est quoi !?
 * -----------------------------------------------------
 * Une variable une fois qu'elle est créer elle devient 
 * globale. Ce qui veut dire qu'elle est connu
 * dans tout le script. 
 * 
 * En revanche lorsque l'on créer une fonction, on créer
 * des variables dîtes "locale" ce qui veut dire qu'il
 * existe 2 types de scopes.
 * 
 * Locale et Globale
 * 
 * /!\ Très important, il est possible de créer des 
 * variables globale au sein même d'une function...
 * Mais c'est très clairement déconseiller.
 * ------------------------------------------------------
 * 3 Exemples à suivre pour bien comprendre le tout. 
 */

console.log ("---------------------------------------- Exemple 1 - Scope Global");

function addition(number1,number2) {
    var variableLocal = globalOne + globalTwo; // Les variables utilisé ici fonctionne dans le sens ou le résultat est du type : "INTEGER"
    return variableLocal;
}
var globalOne = 55;
var globalTwo = 999;
var resultGlobal = addition(globalOne,globalTwo);
console.log ( resultGlobal + " ------------- Affiche bien le resultat de mon addition entre mes variables 'globalOne & globalTwo");
console.log ( "En revanche si à cette instant, j'indique le contenu ma variableLocal, j'aurai cette erreur :");
console.log ( "(X) Uncaught ReferenceError: variableLocal is not defined(…)" );


console.log ("---------------------------------------- Exemple 2 - Scope local");
console.log ( "Si à nouveau, j'indique le contenu de ma variableLocal, j'aurai de nouveau cette erreur :");
console.log ( "(X) Uncaught ReferenceError: variableLocal is not defined(…)" );
console.log ( "par contre si j'ajoute à : return variableLocal une multiplication de 2, le résultat sera bien pris en compte soit :");
function additionTwo(number3,number4) {
    var variableLocal = globalThree + globalFour;
    return variableLocal*2;
}
var globalThree = 4;
var globalFour = 7;
var result = additionTwo(globalThree,globalFour);
console.log ( result );


console.log ("---------------------------------------- Exemple 3 - Scope local avec une variable global");
console.log ( "|-- Attention --| Cette methode est déconseiller. Il est préférable de garder dans une fonction un scope Locale");
function additionThree(number5,number6) {
    // Façon d'inscrire un Scope Locale dans notre fonction.
    // var variableLocal = globalThree + globalFour;
    // Faàpn ici d'écrire un Scope Global dans notre fonction. Je me répète c'est déconseillé
    variableGlobalInLocal = globalFive + globalSix;
    return variableGlobalInLocal;
}
var globalFive = 3;
var globalSix = 2;
var newResult = additionThree(globalFive,globalSix);
console.log ( "Quand nous utilisions directement la variableLocal, nous avions une erreur, maintenant il n'y a plus d'erreur et le résultat s'affiche bien :");
console.log ( variableGlobalInLocal );