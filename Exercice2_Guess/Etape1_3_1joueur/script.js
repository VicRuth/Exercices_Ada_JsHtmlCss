// Exercice individuel 2 : Avec un seul joueur

console.log("Hello World, ceci est un jeu que tu dois jouez seul");
// Etape 1: Création d'une fonction qui demande un nombre à l'utilisateur
function AskNumber() {
    let givenNumber = prompt("Entrez un nombre : ");
        return givenNumber;  //  Retourner le nombre saisi par l'utilisateur
}
// Etape 2: une fonction qui prend en paramètre givenNumber et qui se nommera didIWin
/*
function didIWin(givenNumber) {
    if (givenNumber < 22) {
        console.log("Plus grand!");
    } else if (givenNumber > 22) {
        console.log("Plus petit!");
    } else if (givenNumber == 22) {  // Utiliser == pour la comparaison car prompt retourne une chaîne
        console.log("Bravo! Vous avez deviné le nombre!");
    } else {
        console.log("Vous avez fait une erreur, vous devez rentrer un nombre.");
    }           
}
// Une fonction qui gérera les appels de fonction et la transmission de la variable d'une fonction à une autre
function gamePlay() {
    let number = AskNumber();  // Récupérer le nombre saisi par l'utilisateur
    didIWin(number);  // Transmettre le nombre à la fonction didIWin
}
*/
// Etape 3: la fonction didWin retourne maintenant true si l'utilisateur a trouvé le chiffren false sinon
function didIWin(givenNumber) {
    if (givenNumber < 22) {
        alert("Plus grand!");
        return false;
    } else if (givenNumber > 22) {
        alert("Plus petit!");
        return false;
    } else if (givenNumber == 22) {  
        alert("Bravo! Vous avez deviné le nombre!");
        return true;
    } else {
        alert("Vous avez fait une erreur, vous devez rentrer un nombre.");
        return false;
    }           
}
function gamePlay() {
    let found = false;
    while (found === false) {  // Continuer tant que l'utilisateur n'a pas trouvé le bon nombre (found === false peut être aussi écrit !found25)
        let number = AskNumber();  // Récupérer le nombre saisi par l'utilisateur
        found = didIWin(number);  // Transmettre le nombre à la fonction didIWin et vérifier si le nombre est correct
    }
}

// Appeler la fonction gamePlay pour démarrer le jeu
gamePlay();
