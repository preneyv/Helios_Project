<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="logo-container">

      <img :src="require('@/assets/logo.png')" alt="logo Helios">
    </div>
    <div class="content-container">
       <h1>Échangez anonymement avec des amoureux de belles voitures !</h1>
        <p>Participez à des événements, partagez vos photos et échangez avec d'autres passionnés en toute tranquilité</p>
        <div class="login">
          <h2>Rejoignez la communauté !</h2>
          <div class="cta-login">

            <button @click="showModalInscription = true">S'inscrire</button>
            <button @click="showModalConnexion = true">Se connecter</button>
            <!-- <router-link to="/">S'inscrire</router-link>
            <router-link to="/">Se connecter</router-link> -->
          </div>
        </div> 
    </div>
    <PopUp v-if="showModalInscription" @close="showModalInscription = false" headTitle="S'inscrire">
      <template v-slot:header>
        <button class="modal-default-button" @click="showModalInscription = false">Fermer</button>
      </template>
      <template v-slot:content>
        <h3>Test inscription</h3>
       </template>
    </PopUp>
     <PopUp v-if="showModalConnexion" @close="showModalConnexion = false" headTitle="S'inscrire">
      <template v-slot:header>
        <button class="modal-default-button" @click="showModalConnexion = false">Fermer</button>
      </template>
      <template v-slot:content>
        <h3>Test connexion</h3>
       </template>
    </PopUp>
  </div>
</template>

<style lang="scss">

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
}

.home {
  display: inline-flex;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/bg-home.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  color: $white;

  .logo-container {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 310px;
    width: 310px;
  }

  .content-container {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
  }

  .login {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .cta-login {
        display: inline-flex;
        justify-content: space-around;
        width: 90%;
      }
    }

  h1 {
    font-size: 35px;
    font-weight: 600;
    line-height: 52px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }

  h2 {
    font-size: 25px;
    font-weight: 600;
    padding: 50px 0 25px 0;
  }

  .cta-login {
    button {
      &:first-of-type {
        @include btnBlue;
      }

      &:last-of-type {
        @include btnBorderWhite;
      }
    }
  }
}

</style>

<script>
// @ is an alias to /src
import PopUp from '@/components/PopUp.vue'

export default {
  name: 'home',
  components: {
    PopUp
  },
  data() {
    return {
      showModalInscription: false,
      showModalConnexion: false
    }
  }
}
</script>
