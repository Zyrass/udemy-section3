/* 
 * Syntaxe d'un tableau (ARRAY);
 * ------------------------------------------------------------
 * var name = [valeur1, valeur2, valeur3, etc...];
 * ------------------------------------------------------------
 * ! Important ! Un tableau commence toujours avec l'indice 0
 */

/*
 * Exemple d'un tableau de fruit
 */
var fruits = ["fraise", "cerise", "kiwi", "clémentine", "banane"];
// Voir le contenu complet de notre tableau afin de travailler avec
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- Découverte de notre tableau");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log(fruits);
// Connaître la taille d'un Array avec ".length"
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- Connaître la taille de notre tableau avec '.length'");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log(fruits.length);
// Rechercher le tout premier élément d'un tableau avec l'indice 0
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- Affiche le tout 1er élément d'un tableau. Ici : fruits[0]");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log(fruits[0]);
// Créer une boucle pour afficher le contenu de mon tableau
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- Création d'une boucle permettant d'afficher tout le tableau");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- for ( var result = 0; result < fruits.length; result++) {");
console.log("--------------------   console.log(fruits[result]);");
console.log("-------------------- }");
console.log("-------------------- A savoir ma variable 'result' est souvent appelé 'i' pour itération dans le milieu du web");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- Voici le résultat :");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
for (var result = 0; result < fruits.length; result++){
    console.log(fruits[result]);
}
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- Rajouter un élément à notre tableau '.push(\"\")'");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
fruits.push("citron");
console.log(fruits);
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- Enlever un élément de notre tableau '.pop()'. A savoir il n'y a rien entre nos parenthèses.");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
// J'affiche le tableau actuel ici
console.log("Sans .pop()");
console.log(fruits);
fruits.pop();
// Je réaffiche le tableau une fois le .pop() passé.
console.log("Avec .pop()");
console.log(fruits);
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- Afficher le contenu selon un index de début et un index de fin avec '.slice(argument1début, argument2fin)");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
// J'affiche le tableau actuel ici
console.log("Sans .slice(x,x)");
console.log(fruits);
// J'affiche ici, un index de début égale à 1 au lieu de 0 et je fini avec le 3 qui lui ne sera pas inclus
fruits.slice(1,3);
// J'affiche maintenant ce tableau
console.log("Avec .slice(1,3)");
console.log(fruits.slice(1,3));
console.log("En sommes, j'affiche l'index du début soit le 1 et je termine au 3 qui lui ne sera pas inclus");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- Imbriquer des tableaux entre eux");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
console.log("-------------------- Exemple :");
console.log("-------------------- var myTab = [ [\"Hello\", \"Bye\"] , [1,2,3,4,5,6] , [\"Sheryle\",\"Océane\",\"Éléanore\"]]");
console.log("-------------------- Afficher le résultat d'un array en particulier :");
console.log("-------------------- console.log(myTab[1][2])");
console.log("--------------------------------------------------------------------------------------------------------------------------------");
// Définition du tableau
var myTab = [ ["Hello", "Bye"] , [1,2,3,4,5,6] , ["Sheryle", "Océane", "Éléanore"] ];
// J'affiche le tableau actuel
console.log("Tableau actuel");
console.log(myTab);
console.log("J'affiche maintenant le tableau 1 et je sélectionne l'indice 2");
console.log(myTab[1][2]);

/*
 * Autre exemple d'un tableau concernant les langages que j'aimerai connaître
 */
var language = [
        "html5", 
        "css3", 
        "bootstrap3", 
        "bootstrap4", 
        "javascript", 
        "jquery", 
        "react", 
        "angular", 
        "threejs", 
        "momentjs", 
        "chartjs", 
        "php", 
        "mysql", 
        "poo", 
        "laravel", 
        "symfony3",
        "ionic2",
        "swift"
    ];

    console.log(language.length);
    for (var visible = 0; visible < language.length; visible++) {
        console.log(language[visible]);
    }

console.log("------------------ // Je créer un tableau des langages que je sais. ");
var sais = [];
    sais.push(language[0], language[1], language[2]);
console.log(sais);

console.log("------------------ // Je créer un tableau des langages que je sais partiellement. ");
var saisPartiellement = [];
    saisPartiellement.push(language[4], language[5], language[6], language[11], language[12]);
console.log(saisPartiellement);

console.log("------------------ // Je créer un tableau des langages que j'ai vue en formation mais que j'ai besoin de renforcer. ");
var vuePartiellement = [];
    vuePartiellement.push(language[7], language[13], language[14]);
console.log(vuePartiellement);

console.log("------------------ // Je créer un tableau des langages que je devrais apprendre. ");
var apprendre = [];
    apprendre.push(language[6], language[8], language[9], language[16], language[17]);
console.log(apprendre);