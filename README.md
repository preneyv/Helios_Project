<div style="display: flex; justify-content: center; text-align: center">
<img src="./frontend/src/assets/logo.png" width="50" height="50"/>
<h1 align="center">
   Helios
</h1>
</div>

Cette application vise à réunir des passionnés de belles voitures au sein d'un tout nouveau **réseau social** : Hélios. Seuls les membres inscrits y ont accès et peuvent partager avec les autres des contenus tels que des photos, des informations et des événements automobiles. Ils peuvent visualiser un post, l'aimer et/ou le commenter. 

# ⚙ Installation

Il faut installer différentes dépendances avant de démarrer le projet.

Côté Frontend :
- Rendez-vous dans le dossier **frontend** avec la commande ```cd frontend```.
- Puis saisissez la commande ```npm install``` ou ```yarn install```pour installer toutes les dépendances.

Coté Backend : 
- Rendez-vous dans le dossier **backend** avec la commande ```cd backend```.
- Puis saisissez la commande ```npm install``` ou ```yarn install``` pour installer toutes les dépendances.

# 🚀  Démarrage

Il faut démarrer les deux parties de l'application.

Coté Frontend :
- Rendez-vous dans le dossier **frontend** avec la commande ```cd frontend```.
- Puis saisissez la commande ```npm run serve``` ou ```yarn serve```.

Coté Backend :
- Rendez-vous dans le dossier **backend/src** avec la commande ```cd backend/src```
- Puis saisissez la commande ```node index.js``` ou ```yarn serve```.

#  Technos utilisées

Ce projet a été développé avec le framework VueJs en front. Le serveur en back a été développé avec l'aide la librairie expressjs ainsi que mongoose pour la gestion de la base de données.

Framework Frontend :
* [VueJs](https://vuejs.org/)

Principales Librairies Frontend :
* [Axios](https://www.npmjs.com/package/axios) - Librairie de gestion de promesses et de requetes d'API.
* [Sass-loader](https://www.npmjs.com/package/sass-loader)  - Librairie pour pouvoir intégrer le SCSS.

Principales Librairies Backend :
* [ExpressJs](https://expressjs.com/fr/) - Librairie permettant de mettre en place un serveur node simple, rapide et fonctionnel.
* [Mongoose](https://mongoosejs.com/) - Librairie de gestion de base de données NoSQL. 
* [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) - Librairie de générateur de tokens pour l'authentification.

# Pages du site
* **Page de connexion/inscription**
* **Fil d'Actualité (accueil) **
* **Page profil**


# 📖  Fonctionnalités du Fil d'Actualité
Cette page permet à l'utilisateur connecté d'interragir avec tous les posts et événements auxquels il a accès dernièrement mis en ligne.  

Dans la page du fil d'actualité, l'utilisateur peut :
* Consulter les posts auxquels il a accès.
* Aimer des posts auxquels il a accès.
* Commenter et aimer des posts auxquels il a accès.
* Créer un nouveau post avec ou sans image et le partager.
* Créer un nouvel événement et choisir à qui le partager.
* Voir les événements organisés.

# 📖  Fonctionnalités de la page Profil
Cette page permet à l'utilisateur d'accéder à ses données personnelles.

Il lui est possible de :
* Consulter ses informations de profil.
* Modifier ses informations de profil (nom, prénom, pseudo, mail, mot de passe, etc).
* Voir les événements qu'il organise.
* Voir les groupes qu'il a créés.
* Consulter ses derniers posts réalisés.

###### Quand on est administrateur :
On peut effectuer divers modifications sur le projet.
* Accepter / Refuser des nouvelles inscriptions.
* Supprimer des posts.
* Supprimer des événements.
* Supprimer des commentaires.
* Supprimer des utilisateurs.
* Modifier les mots de passe des utilisateurs.


## Le compte utilisateur
Cette page affiche les informations de compte de l'utilisateur :
* Test
* Test
* Test
