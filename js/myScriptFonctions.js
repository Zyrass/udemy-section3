/* 
 * Syntaxe d'une function()
 * ------------------------------------------------------------
 * function nom_de_la_fonction(paramètre1, paramètre2, etc...) {
 *      code à exécuter
 *      return result;
 * }
 */

/* Exemple d'une fonction */

// Ceci est une déclaration. 
function multiply(number1, number2) {
    return number1 * number2;
}

var a = 5;
var b = 6;

// Ceci est l'éxécution de la fonction
var result = multiply(a,b);
console.log(result); 

/* Autre exemple d'une fonction permettant de calculer les âges de tous le monde réunis */

function ageFamille(france, veronique, pascal, chantal, marjorie, alain, mickael, kevin, emeline, robin, elise, sheryle, oceane, eleanore) {
    return france + veronique + pascal + chantal + marjorie + alain + mickael + kevin + emeline + robin + elise + sheryle + oceane + eleanore;
}

var france = 71;
var veronique = 56;
var pascal = 55;
var chantal = 53;
var marjorie = 32;
var alain = 32;
var mickael = 29;
var kevin = 25;
var emeline = 25;
var robin = 20;
var elise = 14;
var sheryle = 7;
var oceane = 6;
var eleanore = 1.8;

var result = ageFamille(france,veronique,pascal,chantal,marjorie,alain,mickael,kevin,emeline,robin,elise,sheryle,oceane,eleanore);
console.log (result + " ans tout âge confondu");