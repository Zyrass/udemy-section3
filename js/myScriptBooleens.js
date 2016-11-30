var myBooleanVrai = true;
console.log(myBooleanVrai);

var myBooleanFaux = false;
console.log(myBooleanFaux);

// Tester en exemple un booleen avec un comparateur arithmétique stricte.
console.log("-------------------- Teste booleen stricte");
var number = 36;
var myResultBooleenFaux = (number===395);
console.log(myResultBooleenFaux + " Est le résultat d'une vérification via le triple égale. En sommes le triple égale permet de comparer la valeur ainsi que le type de résultat attendu. ici le type est un Integer");
var myResultBooleenVrai = (number===36);
console.log(myResultBooleenVrai + " Là, le resultat afficher est correcte vu que le nombre saisie est le tout comme le type.");
var myResultBooleenTest = (number==='36');
console.log(myResultBooleenTest + " Nous avons ici bien le bon résultat d'inscrit mais le type n'est pas celui attendu, ici nous voulions un nombre et nom une chaine de caractère. Donc c'est faux");

// Tester une différence stricte
console.log("-------------------- Teste booleen diff stricte");
var diff = 85;
var resultDiff = (diff!==86);
console.log(resultDiff + " On affiche ici true (vrai) vu qu'il est bien différent");
var resultDiff = (diff!==85);
console.log(resultDiff + " On affiche ici false (faux) dans le sens ou il n'y a pas de différence");

// Tester en exemple un booleen non stricte sur le type saisie.
console.log("-------------------- Teste Booleen non Stricte");
var testNumber = 99;
var resultNumber = (testNumber == '99');
console.log(resultNumber + " A la différence de toute à l'heure, ici on affiche vrai malgré que nous demandons une string alors que de base nous avions un integer");

// Tester le signe supérieur
console.log("-------------------- Teste signe >");
var superieur = 9;
var testSuperieur = (superieur>10);
console.log(testSuperieur + " Ici, nous testons si notre variable est bien supérieur à 10. C'est donc bien faux");

// Même chose avec inférieur
console.log("-------------------- Teste signe <");
var inferieur = 50;
var testInferieur = (inferieur<60);
console.log(testInferieur + " Ici, nous testons si notre variable est bien inférieur à 60. c'est ici donc bien vrai");

// Tester le signe et
console.log("-------------------- Teste signe ET");
var y = 17;
var z = 66;
var resultYz = (y>=17 && z<66);
console.log(resultYz + " Affiche ici faux dans le sens ou nous demandons si la variable y est supérieur ou égale à 17 ce qui dans notre cas ici est vrai, sauf nous demandons aussi que la variable z soit inférieur a 66 et là ce n'est pas vrai c'est égale à 66 donc vu qu'on à un résultat faux, tout sera faux.");

// Testons le signe ou
console.log("-------------------- Teste signe OU");
var y = 17;
var z = 66;
var resultYz = (y>=17 || z<66);
console.log(resultYz); // Même exemple que précédement à contrario que si une réponse est juste, toute l'opération sera vrai

// Toutes les possibilités pour || et &&
console.log("-------------------- Teste && ");
console.log(true && true); // affiche vrai vu que toutes les opérations sont vrai
console.log(true && false); // affiche faux vu qu'une opération est fausse
console.log(false && true); // affiche faux vu qu'une opération est également fausse
console.log(false && false); // affiche faux vu que toutes les opérations sont fausses
console.log("-------------------- Teste || ");
console.log(true || true); // affiche vrai vu que toutes les opérations sont vrai
console.log(true || false); // affiche vrai vu que minimum une opération est vrai
console.log(false || true); // affiche vrai vu que minimum une opération est vrai
console.log(false || false); // affiche faux vu que toutes les opérations sont fausses
console.log("-------------------- Teste L'inverse de true");
console.log(!true);
console.log("-------------------- Teste L'inverse de false");
console.log(!false);