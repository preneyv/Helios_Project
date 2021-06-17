<template>
  <div class="bandeauLeft">
    <img id="logo" src="../assets/LogoHelios.svg">
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Agenda</a></li>
      <li><a href="#">Mon profil</a></li>
      <li><a href="#">Déconnexion</a></li>
    </ul>
  </div>
</template>

<style lang="scss">

  .bandeauLeft {
    min-height: 100%;
    position: absolute;
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