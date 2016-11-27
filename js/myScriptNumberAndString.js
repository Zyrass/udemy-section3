var name = "Alain";
console.log(name);
var age = 32;
console.log(age);

/*
 * .toString()
 * ------------------------------------------
 * Fonction permettant de transformer un type autre qu'un type text en justement un type text
 * 
 */
var convertionToString = age.toString();
console.log(convertionToString); // affiche 32

/*
 * .length
 * ------------------------------------------
 * Fonction permettant compter le nombre de cartères dans un mot ou même dans une phrase espace compris.
 * 
 */
var nameLength = name.length; /* Un mot */
console.log(nameLength); // affiche 5
var phraseExemple = "Oh punaise je suis un développeur digne de ce nom, avec moi vous allez kiffer apprendre";
var phraseLength = phraseExemple.length; /* Une phrase */
console.log(phraseLength); // affiche 87

/*
 * parseInt(variable);
 * -------------------------------------------
 * Fonction permettant de convertir un nombre issue d'une chaine de caractères en type number
 * 
 */
var xString = '55';
console.log('Ma variable xString comporte le nombre ' + xString + ' encodé en string')
var convertString = parseInt(xString);
console.log(convertString + ', c\'est la variable de type string qui a été convertie en type number');
var xNumber = 50;
console.log(xString + ' - ' + xNumber);

/*
 * parseFloat(variable);
 * -------------------------------------------
 * Fonction permettant de convertir un nombre décimal issue d'une chaine de caractères en type number
 * 
 */
var xDecimal = '55.46';
console.log('Ma variable xDecimal comporte le nombre ' + xDecimal + ' encodé en string')
var convertStringFloat = parseFloat(xDecimal);
console.log(convertStringFloat + ', c\'est la variable de type string qui a été convertie en type number');
var xNumberDec = 50.99;
console.log(xDecimal + ' - ' + xNumberDec);

/*
 * .indexOf("Mot_à-rechercher");
 * ----------------------------------------------
 * Fonction permettant de savoir exactement ou se situe un mot que l'on recherche dans une chaine de caractères
 * 
 */
var myString = "Un jour j'ai été au hand et j\'ai vu mes filles s\'amuser au baby-hand";
var searchOneWord = myString.indexOf("été");
console.log(searchOneWord);

/*
 * .replace("mot_ou_phrase_à_remplacer","new_mot_or_new_text");
 * ------------------------------------------------
 * Fonction permettant de remplacer un mot ou une phrase par un(e) autre.
 * 
 */
var myStringTwo = "Sheryle, Océane, Éléanore, je vous adore plus que tout au monde";
console.log(myStringTwo);
var myNewStringTwo = myStringTwo.replace("adore plus que tout au monde", "aime comme un fou");
console.log(myNewStringTwo);

