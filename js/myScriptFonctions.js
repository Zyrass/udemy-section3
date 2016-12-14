/* 
 * Syntaxe d'une function()
 * ------------------------------------------------------------
 * function nom_de_la_fonction(paramètre1, paramètre2, etc...) {
 *      code à exécuter...
 *      return result;
 * }
 */

/* 
 * ------------------------------------------------------------
 * Exemple d'une fonction
 * ------------------------------------------------------------ 
 * 1° - Déclaration
 * 2° - Exécution
 * 
 */

// 1° - Tout commence par la conception de notre déclaration 
function multiply(number1, number2) {
    return number1 * number2;
}

var a = 5;
var b = 6;

// 2° - Enfin ici j'exécute ma déclaration que j'ai au préalable stocké dans une variable "result"
var result = multiply(a,b);
console.log(result); // J'affiche ici le résultat dans la console.


/*
 * ------------------------------------------------------------
 * Autre exemple personnel cette fois-ci
 * ------------------------------------------------------------
 * Exemple d'un fonction permettant de calculer les âges
 * des membres de ma famille.
 * 
 */

// A - Déclaration
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
var eleanore = 1.9;

// B - Exécution
var resultAll = ageFamille(france,veronique,pascal,chantal,marjorie,alain,mickael,kevin,emeline,robin,elise,sheryle,oceane,eleanore);
console.log (resultAll + " ans tout âge confondu");
var moyenneAll = resultAll * 4 / 100;
console.log (moyenneAll);
var enfantCaron = marjorie+mickael+emeline+kevin+robin+elise;
console.log(enfantCaron + " ans tout les enfants Caron confondu");
var moyenneEnfantCaron = enfantCaron * 6 / 100;
console.log("La moyenne des enfants de Pascal et Chantal est de : " + moyenneEnfantCaron);
var enfantGuillonCaron = sheryle + oceane + eleanore;
console.log(enfantGuillonCaron + " ans à eux 3 réunis");
var moyenneEnfantGuillonCaron = enfantGuillonCaron * 3 / 100;
console.log("La moyenne des enfants de Marjorie et Alain est de : " + moyenneEnfantGuillonCaron + " ans !");