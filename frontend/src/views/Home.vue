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
    <PopUp v-if="showModalInscription" @close="closeModal('inscription')" headTitle="S'inscrire" classPopUp="inscription" :actionButton="signup">
      <template v-slot:header>
        <button class="modal-default-button" @click="showModalInscription = false"><img :src="require('@/assets/cancel.svg')" alt="fermer la pop up"></button>
      </template>
      <template v-slot:content>
       <form @submit.prevent="signup()">
         <div class="form-group-50">
          <input type="text" id="name" name="nom" placeholder="Nom" @input="updateFormData"/>
          <input type="text" id="firstname" name="prenom" placeholder="Prenom"  @input="updateFormData"/>
        </div>
        <div class="form-group-50">
          <input type="email" id="email" name="email" placeholder="Email"  @input="updateFormData"/>
          <input type="date" id="birthDate" name="dateNaissance" required placeholder="Date de naissance"  @input="updateFormData"/>
        </div>
        <div class="form-group--100">
            <p class="login-id">Votre login apparaîtra sur tout ce que vous publié, il sera votre identifant sur la plateforme pour garantir votre anonymat</p>
            <input type="text" id="pseudo" name="login" placeholder="Login"  @input="updateFormData"/>
        </div>
        <div class="form-group--100">
            <input type="password" id="password" class="mdp" name="mdp" placeholder="Mot de passe"  @input="updateFormData"/>
             <p class="photo-car">Afin de s’assurer que vous êtes propriétaire d’une belle voiture, veuillez insérer une photo de celle-ci, ci-dessous :</p>
            <p class="photo-profil">Cette photo deviendra votre photo de profil sur le réseau</p>
        </div>
        <div class="form-group--100">
          <label for="carPicture" class="img-btn">Image +</label>
            <input type="file" class="img-input" id="carPicture" @input="updateFormData">
            <p class="name-file">{{ formData.file }}</p>
        </div>
        <!-- <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
        </p> -->
      </form>
      </template>
    </PopUp>
     <PopUp v-if="showModalConnexion" @close="closeModal('connexion')" headTitle="Se connecter" classPopUp="connexion" :actionButton="signin">
      <template v-slot:header>
        <button class="modal-default-button" @click="showModalConnexion = false"><img :src="require('@/assets/cancel.svg')" alt="fermer la pop up"></button>
      </template>
      <template v-slot:content>
        <form @submit.prevent="submit()">
          <div class="form-group--100">
            <input type="email" id="email" name="email" placeholder="Adresse email"/>
          </div>
          <div class="form-group--100">
              <input type="password" id="password" name="password" placeholder="Mot de passe"/>
          </div>
          <div class="form-group--100 forgot-password">
              <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
          </div>
        </form>
       </template>
    </PopUp>
  </div>
</template>

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
      showModalConnexion: false,
      show: false
    }
  },
    mounted() {
      this.show = true; // might need this.$nextTick
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let home = document.querySelector(".home");
    home.style.opacity = "1";

}, false);

</script>

<style lang="scss">

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
}

.home {
  display: inline-flex;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/bg-home.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: $white;
  opacity: 0;
  transition: opacity 3s;

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

    @include responsive('xl-desktop'){
      padding: 0 15% 0 0;
    }

    @include responsive('large'){
      padding: 0 22% 0 0;
    } 
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

        @include responsive('xl-desktop'){
            width: 85%;
        }
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

  //forms 

  .basic-popUp-head {
    h2 {
      padding: 30px 0 25px 0;
    }

    .modal-default-button {
        width: 15px;
        height: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .basic-popUp {
    input {
      @include input;
    }
  }

  .basic-popUp-content {
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 10% 10px 10%;
    }
  }

  .form-group-50 {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    
    input {
      width: 45%;
    }
  }

  .form-group--100 {
     input {
      width: 100%;
    }
    .img-input {
       display: none;
    }

    #password {
      margin-bottom: 25px;
  }

  .login-id {
    font-size: 12px; 
    line-height: 15px;
    padding: 20px 0 8px 0;
  }

  .photo-car {
     font-size: 12px; 
    line-height: 15px;
  }

  .photo-profil, .name-file {
    font-size: 10px; 
    line-height: 15px;
    padding: 3px 0 8px 0;
  }

  .name-file {
    margin-top: 9px;
  }

  .img-btn {
    padding: 5px 20px;
    background-color: $black;
    color: $white;
    border-radius: 10px;
    font-size: 14px;
    border: 1px solid $black;
    transition: all 0.2s linear;

    &:hover {
        background-color: transparent;
        border: 1px solid $black;
        color: $black;
        transition: all 0.2s linear;
    }
  }

  .forgot-password {
    a {
      font-size: 14px;
    }
  }

  //connexion form 

  .connexion.basic-popUp {
    height: 45%;

    @include responsive('xl-desktop'){
      height: 32.5%;
      width: 25vw;
    }

    #password {
      margin-bottom: 15px;
    }

    .forgot-password {
      a {
        font-size: 12px;
      }
  }
}

</style>

<script>
// @ is an alias to /src
import PopUp from '@/components/PopUp.vue'

import AuthServices from "@/services/auth.js"

export default {
  name: 'home',
  components: {
    PopUp
  },
  data() {
    return {
      showModalInscription: false,
      showModalConnexion: false,
      formData:{}
    }
  },
  methods:{

    closeModal(modal) {
      modal === "inscription" ? this.showModalInscription = false : this.showModalConnexion = false
      this.formData = {}

    },
    updateFormData(e) {
      this.formData[e.target.id] = e.target.value
      
    },
    signin() {
      const data = this.formData
      AuthServices.signin(data)
            .then(this.handleSuccess())
            .catch((error) => this.handleError(error))

    },
    signup() {
      const data = this.formData
      AuthServices.signup(data)
            .then(this.handleSuccess())
            .catch((error) => this.handleError(error))
          
    },
    handleError(error) {
      console.log(error)
      this.error = { type: "error" }
      this.error.message =
          error.response?.data?.message || "Erreur serveur"
    },

    handleSuccess() {
      const queryString = window.location.search
      console.log(window.location)
      const params = new URLSearchParams(queryString)


      const redirectTo = params.get("redirectTo") || "Dashboard"

      if (redirectTo === "back")
      {
        this.$router.go(-1)
      }
      else
      {
        this.$router.push( redirectTo )
      }

    },

  }
}
</style>
