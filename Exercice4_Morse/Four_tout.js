/* Etape 2 
// Fonction pour traduire un texte en morse
function translateTextToMorse(texte) {
    let morseText = texte.split('').map(char => translateLatinCharacter(char)).join(' ');
    return morseText;
}

// Test de la fonction translateTextToMorse sur "Hello, world"
let morseText = translateTextToMorse("Hello, world");
console.log(morseText);

// Fonction pour comparer deux tableaux et trouver des similitudes
function compareCharacterLists(list1, list2) {
    let similarities = list1.filter(char => list2.includes(char));
    return similarities;
}

// Création des tableaux de caractères latins et morse
let tableauLatinCharacter1 = getLatinCharacterList(Object.keys(latinToMorse).join(''));
let tableauMorseCharacter = getLatinCharacterList(Object.values(latinToMorse).join(' '));

// Affichage des tableaux
console.log(tableauLatinCharacter1);
console.log(tableauMorseCharacter);

// Test de la fonction compareCharacterLists
let similarities = compareCharacterLists(tableauLatinCharacter1, tableauMorseCharacter);
console.log(similarities); // Affiche les caractères communs (s'il y en a)
*/

/*Etape 4
function decodeMorse(morseTexte) {
    // Séparer les caractères Morse en tableau en utilisant l'espace comme délimiteur
    let morseWords = morseTexte.split(' ');
    
    // Convertir chaque séquence de Morse en caractère latin
    let latinTexte = morseWords.map(function(morseSequence) {
        return morseToLatin[morseSequence] || ''; // Retourne la correspondance ou une chaîne vide si non trouvée
    }).join('');

    return latinTexte;
}

// Exemple d'utilisation
let morseCode = ".... . .-.. .-.. ---"; // Code Morse pour "HELLO"
let texteLatin = decodeMorse(morseCode); // Décodage du code Morse
console.log(texteLatin); // Affiche "HELLO"
let morseWords = morseTexte.split(' ');

let latinTexte = morseWords.map(function(morseSequence) {
    return morseToLatin[morseSequence] || '';
}).join('');

let latinTexte = morseWords.map(function(morseSequence) {
    return morseToLatin[morseSequence] || '';
}).join('');
return latinTexte;


function decode(morseTexte) {
    // Séparer les caractères Morse en tableau en utilisant l'espace comme délimiteur
    let morseWords = morseTexte.split(' ');
    
    // Convertir chaque séquence de Morse en caractère latin
    let latinTexte = morseWords.map(function(morseSequence) {
        return morseToLatin[morseSequence] || ''; // Retourne la correspondance ou une chaîne vide si non trouvée
    }).join('');

    return latinTexte;
}
// Test de la fonction translateTextToMorse sur "Hello, world"
//latinTexte = decode(".... . .-.. .-.. ---   .-- --- .-. .-.. -..");
let morseCode1 = ".... . .-.. .-.. ---   .-- --- .-. .-.. -..";
latinTexte = decode (morseCode1);
console.log(latinTexte);
let latin = latinTexte.split(',  ');
console.log(latin);

// Exemple d'utilisation
let morseCode = ".... . .-.. .-.. ---"; // Code Morse pour "HELLO"
let texteLatin = decode(morseCode); // Décodage du code Morse
console.log(texteLatin); // Affiche "HELLO"
let morseWords = texteLatin.split(' ');
console.log(morseWords);

*/