/* Syntaxe d'une condition IF, ELSE IF et ELSE
 * -------------------------------------------------------------
 * if (condition1) {
 *     console.log("Exécute la condition1");
 * } else if (condition2) {
 *     console.log("La condition1 n'est pas vrai mais la 2 oui'");
 * } else {
 *     console.log("Alors exécute ce code");
 * } 
 * -------------------------------------------------------------
 */

// Exemple concret avec les soucis de nico
var joins = true;
var permis = true;
var firstname = "Nico";
var amande = 10000;
console.log(joins + " " + permis + " " + firstname + " " + amande); // J'affiche les variables pour savoir si les résultats sont bons
console.log("------------------ Exemple N°1 --------------------");

if (firstname == "Nico" && joins == true && permis == true) { // Là je dis : Nico à fumé et il a le permis
    console.log("Putain Nico, fais pas le con.. si tu te fais chopper, tu risques une amande de " + amande + "€");
} else if (firstname == "Nico" && joins == false && permis == true) { // Là je dis tu n'as pas fumé et il a le permis
    console.log("La classe mon pote, on va pouvoir se taper une bonne partie de call of duty ce soir \;)")
} else { // La c'est dans le dernier cas possible
    console.log("T'as plus ton permis et tu conduits... Fais gaffe putain tu peux avoir une grosse amande !!")
}
// A savoir qu'il est possible de faire des autres cas en rajoutant un else if avec d'autres conditions, comme par exemple qu'il a fumé et qu'il n'a plus le permis

console.log("------------------ Exemple N°2 --------------------");
// Autre exemple, limitation de vitesse
var speed = 90;
console.log(speed); // J'affiche la variable pour savoir si le résultat est bon

if (speed <= 50) {
    console.log("Vous respectez la limitation de vitesse en ville c'est très bien");
} else if (speed > 50 && speed <= 80){    
    console.log("Vous roulez trop lentement, c'est une portion d'autoroute limité à 90 km/h ... Bougez-vous le fion")
} else if (speed > 80 && speed <= 90) {
    console.log("Vous roulez à la bonne vitesse sur une portion d'autoroute limité à 90 km/h");
} else {
    console.log("Vous êtes un chauffard, vous risquez la vie de beaucoup de personne espèce de connard");
}

/* Syntaxe d'une condition SWITCH
 * -------------------------------------------------------------
 * /!\Si on oublie un simple ' break; ' l'instruction 
 * continuera jusqu'au prochain ' break; ' ou jusqu'au cas 
 * ' default '.
 * -------------------------------------------------------------
 * // Je définis ici pour l'exemple une variable qui permettra
 * // d'afficher comme résultat finale le cas contenant : "valeur3"
 * var variable = "valeur3";
 * 
 * SWITCH ( variable || expression ) {
 * 
 *      // cas 1
 *      case "valeur1":
 *          code ici...;
 *          break;
 * 
 *      // cas 2
 *      case "valeur2": // cas 2
 *          code ici...;
 *          break;
 * 
 *      // cas 3
 *      case "valeur3":
 *          code ici...;
 *          break;
 * 
 *      // A savoir qu'il est également possible de combiner 2 cas ensemble
 *      // cas 4 OU cas 5
 * 
 *      case "valeur4": 
 *      case "valeur5":
 *          code ici...;
 *          break;
 * 
 *      default:
 *          code ici...
 * }
 * -------------------------------------------------------------
 */

// Exemple d'un switch avec des couleurs
console.log("------------------ Exemple N°3 --------------------");
var couleurPref = "gris";

switch (couleurPref) {
    case "yellow":
        console.log("Oh, jaune comme le soleil");
        break;
    case "blue":
        console.log("Bleu comme dans Vaïana et son bleu lumière");
        break;
    case "noir":
    case "gris":
        console.log("Étrangement, cette couleur est vraiment monotone");
        break;
    default:
        console.log("Impossible de décoder votre couleur");
}