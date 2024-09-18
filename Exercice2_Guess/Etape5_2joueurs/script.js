console.log("Hello World, ceci est un jeu que vous devrez jouer à deux");

/*Etape 5:
Afficher le range (0-50) auquel notre utilisateur à le droit autour du champ. Quelque chose comme 0 < ? < 50.
Si l’utilisateur a gagné nous effacerons tout pour afficher notre message de bravo !
En revanche, tant que l’utilisateur n’a pas trouvé le bon chiffre, on affichera le nombre de tentatives en cours sur la partie.
Ajouter un champ input qui permet à l’utilisateur de rentrer sa proposition de nombre directement dans un champ sur la page avec un bouton valider
*/
// Fonction pour demander au joueur 1 de fournir un nombre à deviner entre 0 et 50
function AskTargetNumber() {
    let targetNumber;
    do {
        targetNumber = parseInt(prompt("Joueur 1, entrez un nombre à deviner (entre 0 et 50) : ")); // parseInt convertit le premier argument en une chaîne, l'analyse et renvoie un entier ou NaN
    } while (isNaN(targetNumber) || targetNumber < 0 || targetNumber > 50); //La fonction isNaN() permet de déterminer si une valeur est NaN
    return targetNumber;
}

// Fonction pour vérifier si le joueur 2 a deviné le nombre
function didIWin(givenNumber, targetNumber) {
    if (givenNumber < targetNumber) {
        alert("Plus grand!");
        return false; // Retourner false car le nombre est trop petit
    } else if (givenNumber > targetNumber) {
        alert("Plus petit!");
        return false; // Retourner false car le nombre est trop grand
    } else if (givenNumber === targetNumber) {
        // Utiliser === pour la comparaison stricte
        alert("Bravo! Vous avez deviné le nombre!");
        return true; // Retourner true car le nombre est correct
    } else {
        alert("Vous avez fait une erreur, vous devez rentrer un nombre.");
        return false; // Retourner false en cas d'erreur
    }
}

// Fonction principale pour gérer la partie
function gamePlay() {
    let targetNumber = AskTargetNumber(); // Demander au joueur 1 de fournir le nombre à deviner
    let found = false; // Initialiser la variable found à false (le joueur 2 n'a pas encore trouvé le bon nombre)
    let attempts = 0; // Initialiser le compteur de tentatives

    const form = document.getElementById("guessForm");
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");
    const gameDiv = document.getElementById("game");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire
        const givenNumber = parseInt(guessInput.value);

        /* if (isNaN(givenNumber) || givenNumber < 0 || givenNumber > 50) {
            message.textContent = "Veuillez entrer un nombre valide entre 0 et 50.";
            return;
        }*/

        attempts++; // Incrémenter le nombre de tentatives
        attemptsDisplay.textContent = `Nombre de tentatives : ${attempts}`;

        if (didIWin(givenNumber, targetNumber)) {
            message.textContent = "Bravo! Vous avez deviné le nombre!";
            gameDiv.innerHTML = "<h2>Bravo! Vous avez deviné le nombre!</h2>";
        } else {
            guessInput.value = ""; // Réinitialiser le champ de saisie pour la prochaine tentative
        }
    });
}

// Appeler la fonction gamePlay pour démarrer le jeu
gamePlay();
