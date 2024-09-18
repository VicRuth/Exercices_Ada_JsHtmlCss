function tryWord(word, base) {
    // Convertir en minuscules pour éviter les différences de casse
    word = word.toLowerCase();
    base = base.toLowerCase();
    // TODO: fix jeu sensible à la casse.
    if (word === base) {
        return true;
    } else {
        let wellPlaced = [];
        let notInWord = [];
        let missPlaced = [];

        let arrayBase = base.split("");
        let arrayWord = word.split("");
        for (let i = 0; i < arrayBase.length; i++) {
            if (arrayBase[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);
            } else {
                missPlaced.push(arrayWord[i]);
            }
        }
        console.log(missPlaced);

        for (const char of arrayWord) {
            if (arrayBase.includes(char) === false) {
                notInWord.push(char);
            }
        }
        return { wellPlaced: wellPlaced, missplaced: missPlaced, notInWord: notInWord };
    }
}

function guess() {
    let base = "dictionnaire";
    let word = document.getElementById("word").value;
    let result = tryWord(word, base);
    if (result === true) {
        document.getElementById("win").innerText = "Vous avez gagné";
    } else {
        document.getElementById("word").value = "";
        document.getElementById("try").innerText = word;
        document.getElementById("well").innerText = "Bien placé: " + result.wellPlaced.join(", ");
        document.getElementById("miss").innerText = "Mal placé: " + result.missplaced.join(", ");
        document.getElementById("not").innerText = "Pas dans le mot: " + result.notInWord.join(", ");
    }
}
