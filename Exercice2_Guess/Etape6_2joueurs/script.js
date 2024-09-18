console.log("Hello World");

// Fonction pour demander au joueur 1 de fournir un nombre à deviner entre 0 et 50
function AskTargetNumber() {
    let targetNumber;
    do {
        targetNumber = parseInt(prompt("Joueur 1, entrez un nombre à deviner (entre 0 et 50) : "));
    } while (isNaN(targetNumber) || targetNumber < 0 || targetNumber > 50);
    return targetNumber;
}

// Fonction pour vérifier si le joueur 2 a deviné le nombre
function didIWin(givenNumber, targetNumber) {
    if (givenNumber < targetNumber) {
        return { win: false, message: "Plus grand!" };
    } else if (givenNumber > targetNumber) {
        return { win: false, message: "Plus petit!" };
    } else if (givenNumber === targetNumber) {
        return { win: true, message: "Bravo! Vous avez deviné le nombre!" };
    } else {
        return { win: false, message: "Vous avez fait une erreur." };
    }
}

// Fonction principale pour gérer la partie
function gamePlay() {
    let targetNumber = AskTargetNumber();  // Demander au joueur 1 de fournir le nombre à deviner
    let found = false;  // Initialiser la variable found à false (le joueur 2 n'a pas encore trouvé le bon nombre)
    let attempts = 0;  // Initialiser le compteur de tentatives
    let minRange = 0;
    let maxRange = 50;

    const form = document.getElementById('guessForm');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const rangeDisplay = document.getElementById('range');
    const gameDiv = document.getElementById('game');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire
        const givenNumber = parseInt(guessInput.value);

        if (isNaN(givenNumber) || givenNumber < minRange || givenNumber > maxRange) {
            alert(`Veuillez entrer un nombre valide entre ${minRange} et ${maxRange}.`);
            return;
        }

        attempts++; // Incrémenter le nombre de tentatives
        attemptsDisplay.textContent = `Nombre de tentatives : ${attempts}`;

        const result = didIWin(givenNumber, targetNumber);
        message.textContent = result.message;

        if (result.win) {
            gameDiv.innerHTML = "<h2>Bravo! Vous avez deviné le nombre!</h2>";
        } else {
            if (givenNumber < targetNumber && givenNumber > minRange) {
                minRange = givenNumber;
            } else if (givenNumber > targetNumber && givenNumber < maxRange) {
                maxRange = givenNumber;
            }
            rangeDisplay.textContent = `${minRange} < ? < ${maxRange}`;
            guessInput.value = ''; // Réinitialiser le champ de saisie pour la prochaine tentative
        }
    });
}

// Appeler la fonction gamePlay pour démarrer le jeu
gamePlay();