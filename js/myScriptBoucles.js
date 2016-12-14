/* 
 * C'est quoi une boucle ? (LOOP)
 * ------------------------------------------------------------
 * Une boucle est utilisé plusieurs fois, c'est à dire tant
 * qu'une condition n'est pas remplie alors tu continues.
 */


/* Syntaxe d'une boucle WHILE (tant que)
 * -------------------------------------------------------------
 * /!\ Afin d'éviter une boucle infini et donc irrémédiablement 
 * évité un crash système, il faudra incrémenter 
 * notre futur variable number.
 * -------------------------------------------------------------
 * var nomVariable = 0;
 * 
 * while ( nomVariable < 3 ) {
 *      console.log ( nomVariable );
 *      number++;
 * }
 * -------------------------------------------------------------
 * On peut ainsi traduire ceci comme suit :
 * Tant que nomVariable est inférieur à 3, affiche le résultat.
 * Si ce dernier permet d'ajouter encore un nombre et qu'il n'atteint
 * pas la limite de 2 alors rajoute en un. 
 */


/* Exemple d'une boucle WHILE
 * ------------------------------------------------------------- */
var whileNumber = 0;

while ( whileNumber < 3 ) {

    console.log("------------------ Exemple Boucle While N°" +whileNumber+ " --------------------");
    console.log ( whileNumber + " est le résultat de ma boucle while n°"+ whileNumber);
    whileNumber = whileNumber + 1; // Ou bien : whileNumber++;
}


/* Syntaxe d'une boucle DO WHILE
 * -------------------------------------------------------------
 * C'est sensiblement la même chose à une nuance prêt. 
 * Le DO WHILE permet de faire un premier tour sans entrer dans
 * la boucle. 
 * -------------------------------------------------------------
 * var nomVariable = 0;
 * 
 * do {
 *      console.log ( nomVariable );
 *      number++;
 * }
 * 
 * while ( nomVariable > 0 && nomVariable < 3 );
 * -------------------------------------------------------------
 * Donc ce bout de code peut être interprêté comme suit :
 * Affiche tout d'abord le résultat de nomVariable, puis ajoute
 * +1 si bien entendu la boucle correspond.
 * -------------------------------------------------------------
 * A savoir que dans l'exemple présenté, si aucun nombre n'est 
 * ajouté après l'affichage de la variable et que la variable
 * commence avec un nombre égale à 0. Alors, la boucle ne démarrera pas.
 * 
 */

var numberDoWhile = 0;

do {
    console.log("------------------ Exemple Boucle Do While N°" +numberDoWhile+ " --------------------");
    console.log ( numberDoWhile + " est le résultat de ma boucle do while n°"+ numberDoWhile + " et donc nous sommes dans notre tour gratuit");
    console.log ( "Ici nous n'entrons pas dans la boucle ainsi le résultat afficher uniquement à l'écran est : " + numberDoWhile);
} 
while ( numberDoWhile > 0 && numberDoWhile > 3 );

console.log("--------------------------------------------------------------------------------------------------------------------");
console.log("----------------------------------------------------------- Autres exemple cette fois en entrant dans la boucle ");
console.log("--------------------------------------------------------------------------------------------------------------------");

var numberDoWhileTwo = 0;

do {
    console.log("------------------ Exemple Boucle Do While N°" +numberDoWhileTwo+ " --------------------");
    console.log ( numberDoWhileTwo + " est le résultat de ma boucle do while n°"+ numberDoWhileTwo);
    numberDoWhileTwo++;
    console.log ( "Ici nous venont d'jouter +1 et donc nôtre variable affiche d'orénavent : " +numberDoWhileTwo);
} 
while ( numberDoWhileTwo > 0 && numberDoWhileTwo <= 5);
    console.log ( "Le nombre : "+numberDoWhileTwo+" correspond bien à nôtre condition dans boucle.");

/* Syntaxe d'une boucle FOR
 * -------------------------------------------------------------
 * for ( variable; condition; incrémentation ) {
 *      code ici...;
 * }
 */
for ( var forNumber = 1; forNumber < 7; forNumber++ ) {
    console.log ( " -------- Exemple For n° : " + forNumber);
}