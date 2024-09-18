// Exercice individuel 3 : Parlez-vous le morse????

console.log("Hello World, parlez-vous le morse");

/*
Étape 4
Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. Ajoutez-le à votre code, 
et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode.
 Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).

Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.
*/
const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}
// Fonction pour traduire un texte en latin
function decode(morseTexte) {
  // Séparer les mots en utilisant le slash comme délimiteur
  let morseWords = morseTexte.split(' / ');
  
  // Convertir chaque mot Morse en mot latin
  let latinTexte = morseWords.map(function(morseWord) {
    // Séparer les caractères Morse en utilisant l'espace comme délimiteur
    let morseCharacters = morseWord.split(' ');
    // Convertir chaque séquence de Morse en caractère latin
    return morseCharacters.map(function(morseSequence) {
      return morseToLatin[morseSequence] || ''; // Retourne la correspondance ou une chaîne vide si non trouvée
    }).join('');
  }).join(' '); // Joindre les mots avec un espace entre eux

  return latinTexte;
}

// Exemple d'utilisation
//Exemple 1
let morseCode = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."; // Code Morse pour "HELLO WORLD"
let texteLatin = decode(morseCode); // Décodage du code Morse
console.log(texteLatin); // Affiche "HELLO WORLD"

//Exemple2
let morseCode1 = ".... . .-.. .-.. ---"; // Code Morse pour "HELLO"
let texteLatin1 = decode(morseCode1); // Décodage du code Morse
console.log(texteLatin1); // Affiche "HELLO"


   
