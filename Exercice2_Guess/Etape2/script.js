// Exercice individuel 2 : Avec un seul joueur

console.log("Hello World, ceci est un jeu que tu dois jouez seul");
// Etape 1: Création d'une fonction qui demande un nombre à l'utilisateur
function AskNumber() {
    let givenNumber = prompt("Entrez un nombre : ");
        return givenNumber;  //  Retourner le nombre saisi par l'utilisateur
}
// Etape 2: une fonction qui prend en paramètre givenNumber et qui se nommera didIWin

function didIWin(givenNumber) {
    if (givenNumber < 22) {
        alert("Plus grand!");
    } else if (givenNumber > 22) {
        alert("Plus petit!");
    } else if (givenNumber == 22) {  // Utiliser == pour la comparaison car prompt retourne une chaîne
        alert("Bravo! Vous avez deviné le nombre!");
    } else {
        alert("Vous avez fait une erreur, vous devez rentrer un nombre.");
    }           
}
AskNumber()
didIWin(givenNumber)
