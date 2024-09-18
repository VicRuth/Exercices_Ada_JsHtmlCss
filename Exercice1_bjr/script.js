//1.  Premier code

//Création d'une variable dans laquelle on va stocker
let message = "Bonjour !"
console.log (message)

// Création de la seconde firstname dans lequel on va stocker un prénom
let firstname= "Ruth"


// Utilisation de la variable firstname dans message
message = "Bonjour" + " " + firstname +" " + "!"
console.log(message)

//2. Dans une fonction
// Création d'une fonction avec pour paramètre
function sayHello(firstname){
    message = "Bonjour" + firstname + "!"
    console.log(message)
}

sayHello("Ruth")

//3. Un second paramètre
function sayHello(firstname,hour){
    if (hour>=18) {
        message = "Bonsoir" + " " + firstname + " " + "!";
        

    } else {
        message = "Bonjour" + " " + " " + firstname + "!";
       
    }
    console.log(message)
}

// Tests
sayHello("Ruth", 11)
sayHello ("Beyonce",18)
sayHello("Beyonce",17)

