/* Etape 5: Pour finir cet exercice, utilisez des champs de saisie input en HTML 
et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.
*/
console.log("Hello World, parlez-vous le morse?");

const latinToMorse = {
  'A': ".-", 'B': "-...", 'C': "-.-.", 'D': "-..", 'E': ".", 'F': "..-.",
  'G': "--.", 'H': "....", 'I': "..", 'J': ".---", 'K': "-.-", 'L': ".-..",
  'M': "--", 'N': "-.", 'O': "---", 'P': ".--.", 'Q': "--.-", 'R': ".-.",
  'S': "...", 'T': "-", 'U': "..-", 'V': "...-", 'W': ".--", 'X': "-..-",
  'Y': "-.--", 'Z': "--..", ' ': "/"
};

const morseToLatin = {
  '-': "T", '--': "M", '---': "O", '--.': "G", '--.-': "Q", '--..': "Z",
  '-.': "N", '-.-': "K", '-.--': "Y", '-.-.': "C", '-..': "D", '-..-': "X",
  '-...': "B", '.': "E", '.-': "A", '.--': "W", '.---': "J", '.--.': "P",
  '.-.': "R", '.-..': "L", '..': "I", '..-': "U", '..-.': "F", '...': "S",
  '...-': "V", '....': "H", '/': " "
};

// Fonction pour traduire du texte en code Morse
function encode(texte) {
  return texte.toUpperCase().split('').map(function(caractere) {
    return latinToMorse[caractere] || '';
  }).join(' ');
}

// Fonction pour traduire du code Morse en texte
function decode(morseTexte) {
  return morseTexte.split(' / ').map(function(morseWord) {
    return morseWord.split(' ').map(function(morseCaractere) {
      return morseToLatin[morseCaractere] || '';
    }).join('');
  }).join(' ');
}

// Fonction pour traduire du texte en Morse et afficher le résultat

/*
Utiliser document dans le JavaScript permet d'interagir avec le DOM (Document Object Model) de la page HTML.
Le DOM représente la structure de la page web et permet à JavaScript de manipuler les éléments HTML, tels que les champs de saisie (input),
les boutons (button), et d'autres éléments. Dans le code précédent, document est utilisé pour accéder aux éléments de la page
et mettre à jour leur contenu en fonction des actions de l'utilisateur.
*/
function encodeText() {
  let latinInput = document.getElementById('latinInput').value;
  let morseOutput = encode(latinInput);
  document.getElementById('morseOutput').textContent = morseOutput;
}

// Fonction pour traduire du Morse en texte et afficher le résultat
function decodeMorse() {
  let morseInput = document.getElementById('morseInput').value;
  let latinOutput = decode(morseInput);
  document.getElementById('latinOutput').textContent = latinOutput;
}
