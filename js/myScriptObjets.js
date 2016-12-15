/*
 * Syntaxe d'un Objet
 * --------------------------------------------------------
 * var objet = {
 *      propertyName1: propertyValue1,
 *      propertyName2: propertyValue2,
 *      propertyName3: propertyValue3,
 * 
 *      methode1: function() {
 * 
 *      }
 * }
 * 
 */

// Exemple d'un objet représentant un chien

var dog = {
    name: "Choupette",
    color: "White",
    age: 4
};

// j'accède à l'âge du chien
console.log("----------------------- J'accède ici à la propriété age");
console.log("Avec : dog.age");
console.log(dog.age);
console.log("----------------------- Autre solution pour accéder à la propriété age");
console.log("Avec : dog[\"age\"]");
console.log(dog["age"]);
console.log("----------------------- Conception d'un boucle pour afficher le contenu");
console.log("----------------------------------------------------------------------------------------");
console.log("----------------------- for ( var property in dog ) {");
console.log("-----------------------    console.log(dog[property]);");
console.log("----------------------- }");
console.log("----------------------------------------------------------------------------------------");
console.log("----------------------- Ce qui donne :");
for ( var property in dog ) {
    console.log(dog[property]);
}
console.log("----------------------------------------------------------------------------------------");
console.log("----------------------- Autre possibilité de contruire un objet");
console.log("----------------------------------------------------------------------------------------");
console.log("----------------------- var dog = new Object(); ");
console.log("----------------------- dog.name = \"Merlin\"");
console.log("----------------------- dog.color = \"White\"");
console.log("----------------------- dog.age = 5");
console.log("-----------------------")
console.log("----------------------- for ( var property in dog ) {");
console.log("-----------------------    console.log(dog[property]);");
console.log("----------------------- }");
console.log("----------------------------------------------------------------------------------------");
console.log("----------------------- Ce qui donne :");
var dog = new Object();
dog.name = "Merlin";
dog.age = 5;
dog.color = "White";

for (var property in dog ) {
    console.log(dog[property]);
}
console.log("Ajout d'une methode qui n'est autre qu'une fonction dans un objet");
var dog = new Object();
dog.name = "Muscadet";
dog.color = "Marron et Noir";
dog.age = 7;
dog.aboie = function(){
    console.log("Wouaf Wouaf");
}
// Pour faire que le chien aboie il faut exécuté le code qui à été déclaré
dog.aboie();

// Modification afin qu'on puisse afficher un nombre de wouaf selon un certain paramètre
var dog = new Object();
dog.name = "Loustik";
dog.age = 7;
dog.color = "Noir";
dog.aboie = function(number) {
    while (number > 0 ) {
        console.log(number.toString() + " - Wouaf Wouaf");
        number--;
    }
};

dog.aboie(7);

/* Exercice : 1/2
 * -----------------------------------------------------------------------------------------------------
 * Concevoir un objet de type Voiture, afficher que cette voiture dispose de plusieurs propriétés
 * la faire rouler via une méthode.
 * -----------------------------------------------------------------------------------------------------
 * Exercice : 2/2
 * -----------------------------------------------------------------------------------------------------
 * Créer un objet équipe seniors 3 et afficher simplement le contenu de l'objet avec une boucle for.
 * -----------------------------------------------------------------------------------------------------
 */  

console.log("--------------------------------------- Exercice 1");
var voiture = {
    marque: "Renault",
    roue: 5,
    porte: 5,
    couleur: "beige-cendré",
    carburant: "essence",
    rouler: function(){
        console.log("Vroum vroum")
    }
};

console.log(voiture);
voiture.rouler();

console.log("--------------------------------------- Exercice 2");
var seniors3 = new Object();
    seniors3.poste = ["arrière", "Demie", "Gardien", "Aillier", "Pivot"];
    seniors3.nom = ["Maxime", "Maxime", "Fabien", "Arnaud", "Thibault", "Alain"];
    seniors3.club = "USM Meyzieu";

for ( var result in seniors3 ) {
    console.log(seniors3[result]);
}
