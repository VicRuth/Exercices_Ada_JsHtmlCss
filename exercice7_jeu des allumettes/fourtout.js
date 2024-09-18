// Etape 1:
/*
Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.
Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.
 */
/*
function retirer_allumettes(tas, nb_allumettes) {
    // nb_allumettes = nombre d'allumettes à retirer du reste
    if (nb_allumettes < 1 || nb_allumettes > 6) {
        alert("Vous devez retirer entre 1 et 6 allumettes.");
    }
    return tas - nb_allumettes;
}
*/
// Etape 2:
/*
Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas.
Pour rappel, on a 50 allumettes au départ.
 */
/*
function jeu_des_allumettes() {
    let tas = 50;
    while (tas > 0) {
        let nb_allumettes = parseInt(
            prompt(
                `Il reste ${tas} allumettes. Combien d'allumettes voulez-vous retirer ?
                 n'oubliez pas que vous devriez retirer de 1 à 6 allumettes `
            )
        );
        tas = retirer_allumettes(tas, nb_allumettes);
    }
    alert("Vous avez retiré la dernière allumette. Vous avez gagné !");
}
jeu_des_allumettes();
*/
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Jeu des Allumettes</title>
</head>
<body>
    <h1>Jeu des Allumettes</h1>
    <div id="game">
        <p id="tas">Il reste 50 allumettes.</p>
        <label for="nbARetirer">Combien d'allumettes voulez-vous retirer ? (1-6)</label>
        <input type="number" id="nbARetirer" min="1" max="6">
        <button onclick="jouer()">Retirer</button>
    </div>
    <p id="message"></p>

    <script>
        let tas = 50;
        let nbJoueurs = 2;
        let joueur = 1;

        function retirerAllumettes(tas, nbARetirer) {
            if (nbARetirer < 1 || nbARetirer > 6) {
                throw new Error("Vous devez retirer entre 1 et 6 allumettes.");
            }
            return tas - nbARetirer;
        }

        function jouer() {
            let nbARetirer = parseInt(document.getElementById('nbARetirer').value);
            try {
                tas = retirerAllumettes(tas, nbARetirer);
                document.getElementById('tas').textContent = `Il reste ${tas} allumettes.`;
                if (tas === 0) {
                    document.getElementById('message').textContent = `Joueur ${joueur} a retiré la dernière allumette. Joueur ${joueur} gagne !`;
                    document.getElementById('game').style.display = 'none';
                } else {
                    joueur = joueur % nbJoueurs + 1;
                    document.getElementById('message').textContent = `C'est au tour du joueur ${joueur}.`;
                }
            } catch (e) {
                alert(e.message);
            }
        }
    </script>
</body>
</html>

