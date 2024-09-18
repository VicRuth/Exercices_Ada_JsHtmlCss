// Exercice individuel 2 : Avec un seul joueur

console.log("Hello World, ceci est un jeu que tu dois jouez seul");
// Etape 1: Création d'une fonction qui demande un nombre à l'utilisateur
function AskNumber() {
    let givenNumber = prompt("Entrez un nombre : ");
        return givenNumber;  //  Retourner le nombre saisi par l'utilisateur
}
AskNumber()