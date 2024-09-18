/*function isValidDate(dateStr) {
    const [day, month, year] = dateStr.split("/");
    const date = new Date(`${year}-${month}-${day}`);
    return (
        date.getFullYear() === parseInt(year) &&
        date.getMonth() + 1 === parseInt(month) &&
        date.getDate() === parseInt(day)
    );
}

function isPalindrome(dateStr) {
    if (!isValidDate(dateStr)) {
        return false;
    }

    const cleanedDate = dateStr.replace(/\//g, "");
    return cleanedDate === cleanedDate.split("").reverse().join("");
}

// Tests
console.log(isPalindrome("11/02/2011")); // true
console.log(isPalindrome("03/04/2001")); // false
console.log(isPalindrome("29/02/2011")); // false (invalid date)

function getNextPalindromes(x) {
    const results = [];
    let currentDate = new Date();

    while (results.length < x) {
        currentDate.setDate(currentDate.getDate() + 1);
        const dateStr = currentDate.toLocaleDateString("fr-CA").split("-").reverse().join("/");
        if (isPalindrome(dateStr)) {
            results.push(dateStr);
        }
    }

    return results;
}

// Tests
console.log(getNextPalindromes(8));

function isPalindrome(str) {
    const cleanedStr = str.replace(/\W/g, ""); // Garder uniquement les caractères alphanumériques
    return cleanedStr === cleanedStr.split("").reverse().join("");
}

function isDatePalindrome(dateStr) {
    if (!isValidDate(dateStr)) {
        return false;
    }
    return isPalindrome(dateStr.replace(/\//g, ""));
}

// Tests
console.log(isDatePalindrome("11/02/2011")); // true
console.log(isDatePalindrome("03/04/2001")); // false
console.log(isDatePalindrome("29/02/2011")); // false (invalid date)
*/
/*
// 1ère Méthode
function isValidDate(jour, mois, annee) {
    const date = `${jour}/${mois}/${annee}`;
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
}*/
/*
// Test:
isValidDate(3, 4, 2001); // La date est valide.
isValidDate(3, 14, 2001); // La date n'est pas valide.

// 2ème Méthode à faire avec getFullYear(), getMonth(), getDate()
*/
// Etape 2:
/* 
Créer une fonction isPalindrome qui prend une date en string en paramètre 
et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false
*/
/*
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
console.log(isPalindrome(11, 2, 2011)); // true
console.log(isPalindrome(3, 4, 2001)); // false*/

// Etape 1:
/* 
Créer une fonction isValidDate qui prend en paramètre une date en string et détermine si elle est valide. Pour qu'une date soit valide,
il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
*/
/*
// Fonction pour vérifier si une date est valide
function isValidDate(jour, mois, annee) {
    if (jour >= 1 && jour <= 31 && mois >= 1 && mois <= 12 && annee >= 1000 && annee <= 9999) {
        // Vérification supplémentaire pour les mois avec 30 jours et février
        if ((mois == 4 || mois == 6 || mois == 9 || mois == 11) && jour > 30) {
            return false;
        }
        if (mois == 2) {
            const estBissextile = (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;
            if (jour > 29 || (jour == 29 && !estBissextile)) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

// Fonction pour vérifier si une date est un palindrome
function isPalindromeDate(jour, mois, annee) {
    const date = `${jour.toString().padStart(2, "0")}${mois.toString().padStart(2, "0")}${annee}`;
    const reversedDate = date.split("").reverse().join("");
    return date === reversedDate;
}

// Fonction pour obtenir les x prochaines dates palindromes à partir d'aujourd'hui
function getNextPalindromes(x) {
    const today = new Date();
    const results = [];
    let count = 0;
    let jour = today.getDate();
    let mois = today.getMonth() + 1; // Les mois commencent à 0
    let annee = today.getFullYear();

    while (count < x) {
        jour++;
        if (!isValidDate(jour, mois, annee)) {
            jour = 1;
            mois++;
            if (mois > 12) {
                mois = 1;
                annee++;
            }
        }

        if (isPalindromeDate(jour, mois, annee) && isValidDate(jour, mois, annee)) {
            results.push(`${jour.toString().padStart(2, "0")}/${mois.toString().padStart(2, "0")}/${annee}`);
            count++;
        }
    }

    return results;
}
/*
// Exemple d'utilisation
console.log(getNextPalindromes(5)); // Affiche les 5 prochaines dates palindromes à partir d'aujourd'hui*/
// Fonction pour vérifier si une chaîne de caractères est un palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase(); // On nettoie la chaîne en enlevant les espaces et en mettant en minuscules
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

// Fonction pour vérifier si une date est valide
function isValidDate(jour, mois, annee) {
    if (jour >= 1 && jour <= 31 && mois >= 1 && mois <= 12 && annee >= 1000 && annee <= 9999) {
        // Vérification supplémentaire pour les mois avec 30 jours et février
        if ((mois == 4 || mois == 6 || mois == 9 || mois == 11) && jour > 30) {
            return false;
        }
        if (mois == 2) {
            const estBissextile = (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
            if (jour > 29 || (jour == 29 && !estBissextile)) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

// Nouvelle fonction pour vérifier si une date est un palindrome
function isDatePalindrome(jour, mois, annee) {
    if (!isValidDate(jour, mois, annee)) {
        return false;
    }
    const dateStr = ${jour.toString().padStart(2, '0')}${mois.toString().padStart(2, '0')}${annee};
    return isPalindrome(dateStr);
}

// Fonction pour obtenir les x prochaines dates palindromes à partir d'aujourd'hui
function getNextPalindromes(x) {
    const today = new Date();
    const results = [];
    let count = 0;
    let jour = today.getDate();
    let mois = today.getMonth() + 1; // Les mois commencent à 0
    let annee = today.getFullYear();

    while (count < x) {
        jour++;
        if (!isValidDate(jour, mois, annee)) {
            jour = 1;
            mois++;
            if (mois > 12) {
                mois = 1;
                annee++;
            }
        }

        if (isDatePalindrome(jour, mois, annee)) {
            results.push(${jour.toString().padStart(2, '0')}/${mois.toString().padStart(2, '0')}/${annee});
            count++;
        }
    }

    return results;
}

// Exemple d'utilisation
console.log(getNextPalindromes(5)); // Affiche les 5 prochaines dates palindromes à partir d'aujourd'hui