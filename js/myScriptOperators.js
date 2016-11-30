/*
 * L'opérateur égale 
 * ------------------------------------------------------------------
 * Il permet ici de spécifier une valeur à notre variable x
 */
var x = 12;
console.log(x);

/*
 * Pour additionner, soustraire, multiplier, diviser 
 * ------------------------------------------------------------------
 * Nous utiliserons plusieurs symboles.
 * Il existe aussi le modulo qui n'est autre que le reste d'une division
 * ------------------------------------------------------------------
 * Les additions : +
 */
var x = 12;
var y = 5;
var result = x + y;
console.log(result + " Est le résultat de mon addition");

/*
 * Les soustractions : +
 */
var result = x - y;
console.log(result + " Est le résultat de ma soustraction");

/*
 * Les multiplications : *
 */
var result = x * y;
console.log(result + " Est le résultat de ma multiplication");

/*
 * Les divisions : +
 */
var result = x / y;
console.log(result + " Est le résultat de ma division");

/*
 * Les modulos : %
 */
var result = x % y;
console.log(result + " Est le reste de ma division");

/*
 * Les raccourçis :
 * ------------------------------------------------------------------
 * Pour raccourçir une opération, il est plus rapide d'écrire x++ que x = x + 1;
 */
var exempleX = 9;
exempleX++;
console.log(exempleX + " Est le resultat obtenu via mon raccourçis d'incrémentation");

/*
 * Même opération que précédemment mais pour la soustraction soit x-- au lieu de x = x - 1;
 */
var exempleX = 9;
exempleX--;
console.log(exempleX + " Est le résultat d'une décrémentation via mon raccourçis");

/*
 * Attention à l'ordre d'affichage
 * ------------------------------------------------------------------
 */
var x = 50;
var y = 10;
var result = x++;
console.log(result + " Ici, on affiche directement sans incrémentation la variable x. Puis survient l'incrémentation qui ne sera pas visible ici même");
console.log(x + " Là, par contre, nous avons la variable x qui à été incrémenté précédemment");

var z = 69;
var result = ++z;
console.log(result + " Ici nous avons notre variable z qui à d'abord été incrémenté puis on affiche la valeur de notre variable");