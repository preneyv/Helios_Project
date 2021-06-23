<template>
  <nav class="bandeauLeft">
    <img id="logo" src="../assets/LogoHelios.svg">
    <ul>
      <li>
        <router-link to="/fil-actu">Accueil</router-link>
      </li>
      <li>
        <router-link to="/mon-agenda">Agenda</router-link>
      </li>
      <li>
        <router-link to="/mon-profil">Mon profil</router-link>
      </li>
      <li @click="signout" ><span class="deconnexion clickable">Déconnexion</span></li>
    </ul>
  </nav>
</template> 

<script>

import AuthServices from "@/services/auth.js"
export default {
  methods: {
    signout() {
      AuthServices.signout()
      this.$router.replace({ name: "home" })
    }
  }
}
</script>

<style lang="scss">

  .bandeauLeft {
    position: fixed;
    height: 100vh;
    width: 17%;
    margin-right: 0;
    background-color: $black;
    text-align: center;

    li {
      padding: 5%;

      a, .deconnexion {
        color: $white;
        font-size: 110%;

        &:hover {
          color: $primary;
        }
      } 

      a.router-link-active {
        color: $primary;
        font-weight: 600;
      }
    }
  }

  #logo {
    padding-top: 30%;
    padding-bottom: 7%;
    width: 60%;
  }

</style>