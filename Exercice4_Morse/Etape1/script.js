// Exercice individuel 3 : Parlez-vous le morse????

console.log("Hello World, parlez-vous le morse");
// Etape 1: Création d'une fonction qui va prendre du texte et retourner un tableau contenant chaque caractère
 
// Prise en main de l'exercice
let Texte = "Hello,world"
let Split_Texte = Texte.split(" ")
console.log(Split_Texte)

let myArrayFrom =[];

function essay(Texte){
    
    myArrayFrom = Array.from(Texte) ;
    return myArrayFrom
    }

// Appel de la fonction pour remplir le tableau
essay(Texte)
// Affcihe du tableau
console.log(myArrayFrom)

// Création de la fonction getLatinCharacterList
let LatinCharacterList = "";
let Tableau_LatinCharacter =[];
function getLatinCharacterList(LatinCharacterList){
    Tableau_LatinCharacter = Array.from(LatinCharacterList)
    return Tableau_LatinCharacter
}
// Test de la fonction sur "Hello, world"
LatinCharacterList ="Hello, World"
getLatinCharacterList(LatinCharacterList)

console.log(Tableau_LatinCharacter)


