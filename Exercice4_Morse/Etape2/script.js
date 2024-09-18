// Exercice individuel 3 : Parlez-vous le morse????

console.log("Hello World, parlez-vous le morse");

// Etape2: Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
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
/*
caractere.toUpperCase(): La méthode toUpperCase() JavaScript convertit le caractère en majuscule. 
Cela permet de s'assurer que la fonction fonctionne de manière insensible
à la casse (c'est-à-dire qu'elle traite 'a' et 'A' de la même manière).
|| '': Cette partie utilise l'opérateur logique "ou" (||). 
Si la recherche dans latinToMorse ne trouve pas de correspondance (par exemple, si le caractère n'est pas une lettre latine ou 
n'est pas défini dans l'objet), la fonction retourne une chaîne vide ('').
*/
function translateLatinCharacter(caractere){
    let translateLC = latinToMorse[caractere.toUpperCase()] || ''
    console.log(translateLC)
    return translateLC ; 
}
caractere = "a"
translateLatinCharacter(caractere)