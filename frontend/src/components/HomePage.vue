<template>
    <div class="homepage">
        <form id="signup">
                <div class="nom">
                    <label>Nom</label>
                    <input type="text" name="nom"/>
                </div>
                <div class="prenom">
                    <label>Prénom</label>
                    <input type="text" name="prenom"/>
                </div>
                <br>
                <div class="email">
                    <label for="email">Email</label>
                    <input type="email" pattern=".+@globex\.com" name="email"/>
                </div>
                <div class="datedenaissance">
                    <label>Date de naissance</label>
                    <input type="date" name="datedenaissance"/>
                </div>
                <div class="textSignForm">Votre login apparaîtra sur tout ce que vous avez publié, il sera votre identifiant sur la plateforme pour garantir votre anonymat.</div>
                <div class="login">
                    <label>Login</label>
                    <input type="text" name="login"/>
                </div>
                <div class="mdp">
                    <label>Mot de passe</label>
                    <input type="password" name="password"/>
                </div>
                <div class="textSignForm">Afin de s'assurer que vous êtes propriétaire d'une belle voiture, veuillez insérer une photo de celle-ci, ci-dessous :</div><br>
                <div class="miniTextSignForm">Cette photo deviendra votre photo de profil sur le réseau.</div>
                <div class="img">
                    <input type="file" name="img">
                </div>
            </div>

            <button type="submit">S'inscrire</button>

        </form>
    </div>


</template>
