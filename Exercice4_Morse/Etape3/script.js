// Exercice individuel 3 : Parlez-vous le morse????

console.log("Hello World, parlez-vous le morse");

/*
Étape 3
Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1,
pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

Attention: la table de correspondance ne contient que des caractères majuscules.
*/
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}
// Creation de la fonction 
function translateLatinCharacter(caractere){
    let translateLC = latinToMorse[caractere.toUpperCase()] || ''
    console.log(translateLC)
    return translateLC ; 
}

// Fonction pour traduire un texte en morse
// Méthode 1 avec une fonction fléchée
/*function encode(texte) {
    let morseTexte = texte.split('').map(caractere => translateLatinCharacter(caractere)).join(' ');
    return morseTexte;
}*/
/* Méthode 2, une version plus longue mais claire
La méthode map() crée un nouveau tableau typé dont les éléments sont les images des éléments du tableau typé courant 
par une fonction donnée.La méthode map() crée 
un nouveau tableau typé dont les éléments sont les images des éléments du tableau typé courant par une fonction donnée.*/
function encode(texte) {
    let morseTexte = texte.split('').map(function(caractere) { 
        return translateLatinCharacter(caractere);
    }).join(' ');
    return morseTexte;
}

// Test de la fonction translateTextToMorse sur "Hello, world"
let morseTexte = encode("Hello, world");
console.log(morseTexte);