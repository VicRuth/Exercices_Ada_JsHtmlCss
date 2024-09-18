// Jeu des allumettes

/*
On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes, (ou tout autre objet : cailloux, jetons, . . .). 
Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. 
Celui qui ôte la dernière allumette gagne.
*/

// Etape 6:
/*
Libre à vous de faire une interface graphique à votre goût !
 */
// Etape 1:
/*
Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.
Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.
 */
function retirer_allumettes(tas, nb_allumettes) {
    // nb_allumettes = nombre d'allumettes à retirer du reste
    if (nb_allumettes < 1 || nb_allumettes > 6) {
        alert("Vous devez retirer entre 1 et 6 allumettes.");
        return tas; // Ne change pas le tas si l'entrée est invalide
    }
    return tas - nb_allumettes;
}

// Etape 5
/* 
Étape 5
Proposer un mode multi-joueur. Demander à l’utilisateur,
 combien il y a de joueur et gérer la partie en conséquence.
*/

function jeu_des_allumettes_mj() {
    // Initialisation du tas avec 50 allumettes
    let tas = 50;

    // Demande à l'utilisateur le nombre de joueurs
    let nbJoueurs = parseInt(prompt("Combien de joueurs ?"));

    // Vérifie qu'il y a au moins 2 joueurs
    if (nbJoueurs < 2) {
        alert("Il faut au moins 2 joueurs pour jouer.");
        return; // Termine la fonction si moins de 2 joueurs
    }

    // Initialise le premier joueur
    let joueur = 1;

    // Boucle principale du jeu, continue tant qu'il y a des allumettes
    while (tas > 0) {
        alert(`C'est au tour du joueur ${joueur} de jouer.`);
        let nb_allumettes;
        do {
            nb_allumettes = parseInt(
                prompt(`Il reste ${tas} allumettes. Combien d'allumettes voulez-vous retirer ? (1 à 6)`)
            );
            if (isNaN(nb_allumettes) || nb_allumettes < 1 || nb_allumettes > 6) {
                alert("Entrée invalide. Veuillez entrer un nombre entre 1 et 6.");
            }
        } while (isNaN(nb_allumettes) || nb_allumettes < 1 || nb_allumettes > 6);

        tas = retirer_allumettes(tas, nb_allumettes);

        // Vérifie si le tas est vide, ce qui signifie que le joueur courant a gagné
        if (tas === 0) {
            alert(`Joueur ${joueur}, vous avez retiré la dernière allumette. Vous avez gagné !`);
            return; // Termine la fonction car le jeu est fini
        }

        // Passe au joueur suivant. Le modulo permet de revenir au premier joueur après le dernier.
        joueur = (joueur % nbJoueurs) + 1;
    }
}

jeu_des_allumettes_mj();
