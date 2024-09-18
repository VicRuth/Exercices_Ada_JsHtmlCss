function isPalindrome(str) {
    const cleanedStr = str.replace(/\W/g, "").toLowerCase(); // Nettoie la chaîne en supprimant les caractères non-alphanumériques et en convertissant en minuscule
    const reversedStr = cleanedStr.split("").reverse().join(""); // Inverse la chaîne
    return cleanedStr === reversedStr; // Vérifie si la chaîne nettoyée est égale à la chaîne inversée
}
function isValidDate(jour, mois, annee) {
    const date = new Date(annee, mois - 1, jour);
    return date.getFullYear() === annee && date.getMonth() === mois - 1 && date.getDate() === jour;
}
function isDatePalindrome(jour, mois, annee) {
    if (!isValidDate(jour, mois, annee)) {
        return false;
    }

    const dateStr = `${jour.toString().padStart(2, "0")}${mois.toString().padStart(2, "0")}${annee.toString()}`;
    return isPalindrome(dateStr);
}

// Tests
console.log(isDatePalindrome(11, 2, 2011)); // true
console.log(isDatePalindrome(3, 4, 2001)); // false
console.log(isDatePalindrome(2, 2, 2020)); // true
console.log(isDatePalindrome(29, 2, 2020)); // true
console.log(isDatePalindrome(31, 4, 2020)); // false (invalid date)
