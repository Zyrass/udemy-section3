/*
 * Prototypé une méthode avec un constructor
 * --------------------------------------------------------
 * Syntaxe via un exemple :
 * 
 * function Dog(nameChien, colorChien, ageChien) {
 *      this.name = nameChien;
 *      this.color = colorChien;
 *      this.age = ageChien;
 * } 
 * --------------------------------------------------------
 */

function Dog(nameChien, colorChien, ageChien) {
    this.name   = nameChien;
    this.color  = colorChien;
    this.age    = ageChien;
}

/*
 * Maintenant il est temps de créer une nouvelle instance, doit un nouvelle objet
 */

var bouldogue = new Dog("Uranus", "Blanc", 8);
console.log(bouldogue);

/*
 * Ajout de la méthode aboie
 * ---------------------------------------
 */

function Chien(prenom,couleur,age) {
    this.name = prenom;
    this.color = couleur;
    this.age = age;
    this.aboie = function() {
        console.log(" Grrrr Wouaf Wouaff " + this.name)
    };
}

var berger = new Chien("Muscadet", "noir & marron", 8);
console.log(berger);
berger.aboie();

