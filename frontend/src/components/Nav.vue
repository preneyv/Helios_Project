<template>
  <div class="bandeauLeft">
    <img id="logo" src="../assets/LogoHelios.svg">
    <ul>
      <li>
        <router-link to="/fil-actu">Accueil</router-link>
      </li>
      <li><a href="#">Agenda</a></li>
      <li>
        <router-link to="/mon-profil">Mon profil</router-link>
      </li>
      <li><a href="#">Déconnexion</a></li>
    </ul>
  </div>
</template>

<style lang="scss">

  .bandeauLeft {
    position: fixed;
    height: 100vh;
    width: 17%;
    margin-right: 0;
    background-color: $black;
    text-align: center;

      li a {
        color: $white;
        font-size: 110%;
      } 

      li {
        padding: 5%;
      }
 
  }

  #logo {
    padding-top: 30%;
    padding-bottom: 7%;
    width: 60%;
  }


</style>