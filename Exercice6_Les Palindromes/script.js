// Exercice: jouons aux palindromes
//Etape 1:
/* 
Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide,
il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
*/

function isValidDate(jour, mois, annee) {
    //const date = `${jour}/${mois}/${annee}`;
    const date = `${jour.toString().padStart(2, "0")}/${mois.toString().padStart(2, "0")}/${annee}`;
    console.log(date);
    if (jour >= 1 && jour <= 31 && mois >= 1 && mois <= 12 && annee >= 1000 && annee <= 9999) {
        // Vérification supplémentaire pour les mois avec 30 jours et février
        if ((mois == 4 || mois == 6 || mois == 9 || mois == 11) && jour > 30) {
            console.log("La date n'est pas valide.");
            return false;
        }
        if (mois == 2) {
            const estBissextile = (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;
            if (jour > 29 || (jour == 29 && !estBissextile)) {
                console.log("La date n'est pas valide.");
                return false;
            }
        }
        console.log("La date est valide.");
        return true;
    } else {
        console.log("La date n'est pas valide.");
        return false;
    }
}
// Test:
console.log(isValidDate(3, 4, 2001));
console.log(isValidDate(3, 14, 2001));

// 2 Méthode à faire avec getFullYear() ,getMonth() ,getDate()

// Etape 2:
/* 
Créer une fonction isPalindrome qui prend une date en string en paramètre 
et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false
*/
function isPalindrome(jour, mois, annee) {
    if (!isValidDate(jour, mois, annee)) {
        return false;
    }

    const date = `${jour.toString().padStart(2, "0")}/${mois.toString().padStart(2, "0")}/${annee}`;
    const cleanedDate = date.replace(/\//g, "");
    const reversedDate = cleanedDate.split("").reverse().join("");
    console.log(reversedDate);
    if (cleanedDate === reversedDate) {
        return true;
    } else {
        return false;
    }
}
// Test
console.log(isPalindrome(11, 2, 2011));
console.log(isPalindrome(3, 4, 2001));

// Etape 3:
/*
Créer une fonction getNextPalindromes qui donne 
les x prochaines dates palindromes à compter d’aujourd’hui. La fonction prendra le x en paramètre.
*/
// Fonction pour obtenir les x prochaines dates palindromes à partir d'aujourd'hui
function getNextPalindromes(x) {
    const today = new Date();
    const results = [];
    let compteur = 0;
    let jour = today.getDate();
    let mois = today.getMonth() + 1; // Les mois commencent à 0
    let annee = today.getFullYear();

    while (compteur < x) {
        jour++;
        if (!isValidDate(jour, mois, annee)) {
            jour = 1;
            mois++;
            if (mois > 12) {
                mois = 1;
                annee++;
            }
        }
        /* Méthode padStart remplit une chaîne avec "0" jusqu'à ce qu'elle atteigne la longueur x avec x est un nombre
        padSart (2,"0") remplit une chaine jusqu'à ce qu'on atteingre un nombre à deux  chiffres (JavaScript String padStart())
        The padStart() method pads a string from the start.
        The padStart() method pads a string with another string (multiple times) until it reaches a given length.*/

        if (isPalindrome(jour, mois, annee) && isValidDate(jour, mois, annee)) {
            results.push(`${jour.toString().padStart(2, "0")}/${mois.toString().padStart(2, "0")}/${annee}`);
            compteur++;
        }
    }

    return results;
}

// Test
console.log(getNextPalindromes(8));

// Etape 4:
/*
Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère est un palindrome.
 Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome au format date 
 (comme s’assurer que la date est valide) et qui appellera isPalindrome.
 */

/*
Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, 
ou non, une chaine de caractère est un palindrome
*/
function isPalindrome1(str) {
    const cleanedStr = str.replace(/\W/g, "").toLowerCase(); // Nettoie la chaîne en supprimant les caractères non-alphanumériques et en convertissant en minuscule
    const reversedStr = cleanedStr.split("").reverse().join(""); // Inverse la chaîne
    return cleanedStr === reversedStr; // Vérifie si la chaîne nettoyée est égale à la chaîne inversée
}
/*
Créer ensuite une nouvelle fonction isDatePalindrome 
qui reprendra les spécificités du palindrome au format date (comme s’assurer que la date est valide) et qui appellera isPalindrome
*/
function isDatePalindrome(jour, mois, annee) {
    if (!isValidDate(jour, mois, annee)) {
        return false;
    }

    const dateStr = `${jour.toString().padStart(2, "0")}${mois.toString().padStart(2, "0")}${annee.toString()}`;
    return isPalindrome1(dateStr);
}

// Tests
console.log(isDatePalindrome(11, 2, 2011));
console.log(isDatePalindrome(3, 4, 2001));
console.log(isDatePalindrome(2, 2, 2020));
console.log(isDatePalindrome(29, 2, 2020));
console.log(isDatePalindrome(31, 4, 2020));
