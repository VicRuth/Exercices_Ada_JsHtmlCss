// Exercice individuel 2 : Avec deux joueurs
console.log("Hello World, ceci est un jeu que vous devrez jouer à deux");

/* Etape 4: Maintenant on va considérer que l’on a pas un seul joueur mais 2 🧑‍🤝‍🧑.
Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
La fonction didIWin doit prendre désormais un autre paramètre, le nombre à deviner.
Reprenez la logique 1, 2 et 3 pour gérer la partie et lui indiquer s’il doit continuer à jouer ou s’il a gagn
*/

// Fonction pour demander au joueur 1 de fournir un nombre à deviner entre 0 et 50
function AskTargetNumber() {
    let targetNumber;
    do {
        targetNumber = prompt("Joueur 1, entrez un nombre à deviner (entre 0 et 50) : ");
    } while (targetNumber < 0 || targetNumber > 50);
    return targetNumber;
} 
// Fonction pour demander au joueur 2 de fournir un nombre
function AskNumber() {
    let givenNumber = prompt("Joueur 2, entrez un nombre : ");
    return givenNumber;
}

// Fonction pour vérifier si le joueur 2 a deviné le nombre
function didIWin(givenNumber, targetNumber) {
    if (givenNumber < targetNumber) {
        console.log("Plus grand!");
        return false;  // Retourner false car le nombre est trop petit
    } else if (givenNumber > targetNumber) {
        console.log("Plus petit!");
        return false;  // Retourner false car le nombre est trop grand
    } else if (givenNumber == targetNumber) {  // Utiliser == pour la comparaison car prompt retourne une chaîne
        console.log("Bravo! Vous avez deviné le nombre!");
        return true;  // Retourner true car le nombre est correct
    } else {
        console.log("Vous avez fait une erreur, vous devez rentrer un nombre.");
        return false;  // Retourner false en cas d'erreur
    }           
}
// Fonction principale pour gérer la partie
function gamePlay() {
    let targetNumber = AskTargetNumber();  // Demander au joueur 1 de fournir le nombre à deviner
    let found = false;  // Initialiser la variable found à false (le joueur 2 n'a pas encore trouvé le bon nombre)
    while (found === false) {  // Continuer tant que found est false (le joueur 2 n'a pas encore trouvé le bon nombre) (!found est équivaut à found=== false)
        let number = AskNumber();  // Récupérer le nombre saisi par le joueur 2
        found = didIWin(number, targetNumber);  // Vérifier si le nombre est correct et mettre à jour found
    }
}
// Appeler la fonction gamePlay pour démarrer le jeu
gamePlay();
