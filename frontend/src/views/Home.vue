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
    <PopUp v-if="showModalInscription" @close="closeModal('inscription')" headTitle="S'inscrire"  v-bind:classPopUp = "[errorsSignUp.length ? 'inscription yes':'inscription no']" :actionButton="signup">
      <template v-slot:header>
        <button class="modal-default-button" @click="showModalInscription = false"><img :src="require('@/assets/cancel.svg')" alt="fermer la pop up"></button>
      </template>
      <template v-slot:content>
       <form @submit.prevent="signup()">
          <p class="errors" v-if="errorsSignUp.length">
            <b>Veuillez corriger ces erreurs pour vous connecter :</b>
            <ul>
              <li class="error" v-for="error in errorsSignUp" v-bind:key="error">{{ error }}, </li>
            </ul>
          </p>
         <div class="form-group-50">
          <input type="text" id="name" name="name" placeholder="Nom" @input="updateFormData"/>
          <input type="text" id="firstname" name="firstname" placeholder="Prenom"  @input="updateFormData"/>
        </div>
        <div class="form-group-50">
          <input type="email" id="email" name="email" placeholder="Email"  @input="updateFormData"/>
          <input type="date" id="birthDate" name="birthDate" required placeholder="Date de naissance"  @input="updateFormData"/>
        </div>
        <div class="form-group--100">
            <p class="login-id">Votre login apparaîtra sur tout ce que vous publié, il sera votre identifant sur la plateforme pour garantir votre anonymat</p>
            <input type="text" id="pseudo" name="pseudo" placeholder="Login"  @input="updateFormData"/>
        </div>
        <div class="form-group--100">
            <input type="password" id="password" class="mdp" name="password" placeholder="Mot de passe"  @input="updateFormData"/>
             <p class="photo-car">Afin de s’assurer que vous êtes propriétaire d’une belle voiture, veuillez insérer une photo de celle-ci, ci-dessous :</p>
            <p class="photo-profil">Cette photo deviendra votre photo de profil sur le réseau</p>
        </div>
        <div class="form-group--100">
            <label for="carPicture" class="img-btn">Image +</label>
              <input type="file" class="img-input" id="carPicture" name="carPicture" @input="updateFormData">
              <p class="name-file" v-if="formData.carPicture">{{ formData.carPicture.name }}</p>
        </div>
        
        <!-- <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
        </p> -->
      </form>
      </template>
    </PopUp>
     <PopUp v-if="showModalConnexion" @close="closeModal('connexion')" headTitle="Se connecter" v-bind:classPopUp = "[errors.length ? 'connexion yes':'connexion no']" :actionButton="signin">
      <template v-slot:header>
        <button class="modal-default-button" @click="showModalConnexion = false"><img :src="require('@/assets/cancel.svg')" alt="fermer la pop up"></button>
      </template>
      <template v-slot:content>
        <form @submit.prevent="submit()">
          <p class="errors" v-if="errors.length">
            <b>Veuillez corriger ces erreurs pour vous connecter :</b>
            <ul>
              <li class="error" v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
          </p>
          <div class="form-group--100">
            <input type="email" id="email" name="email" placeholder="Adresse email" @input="updateFormData"/>
          </div>
          <div class="form-group--100">
              <input type="password" id="password" name="password" placeholder="Mot de passe" @input="updateFormData"/>
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
import AuthServices from "@/services/auth.js"
import UploadFile from "@/services/loadImage.js"




export default {
  name: 'home',
  components: {
    PopUp
  },
  data() {
    return {
      showModalInscription: false,
      showModalConnexion: false,
      formData:{},
      show: false,
      errors: [],
      errorsSignUp: [],
    }
  },
  // mounted() {
  //   this.show = true; // might need this.$nextTick
  //   let home = document.querySelector(".home");
  //    home.style.opacity = "1";
  // },

  methods:{

    closeModal(modal) {
      modal === "inscription" ? this.showModalInscription = false : this.showModalConnexion = false
      this.formData = {}

    },
    updateFormData(e) {
      console.log(e)
      e.target.type ===  "file" ? this.formData[e.target.id] = UploadFile(e.target.files[0]) : this.formData[e.target.id] = e.target.value
      
    },
    signin() {

      if (this.formData.email && this.formData.password) {
        const data = this.formData
        AuthServices.signin(data)
            .then(() => this.handleSuccess())
            .catch((error) => this.handleError(error , "signin"))
      }

      this.errors = [];

      if (!this.formData.email) {
        this.errors.push('Email demandé.');
      }
      if (!this.formData.password) {
        this.errors.push('Mot de passe demandé.');
      }

    },
    signup() {
      console.log(this.formData)
      //LoadImage(this.formData.carPicture, downloadImage)
      //this.formData.carPicture = {name:this.formData.carPicture.name, type: this.formData.carPicture.type}
        if (
            this.formData.name && this.formData.firstname && 
            this.formData.email && this.formData.birthDate && 
            this.formData.pseudo && this.formData.password && 
            this.formData.carPicture
            ) {
          const data = this.formData
          AuthServices.signup(data)
            .then(() => this.handleSuccess())
            .catch((error) => this.handleError(error, "signup"))
      } 
      
      this.errorsSignUp = [];

      if (!this.formData.name) {
        this.errorsSignUp.push('Nom demandé');
      }  
      if (!this.formData.firstname) {
         this.errorsSignUp.push('Prénom demandé');
      } 
      if (!this.formData.email) {
        this.errorsSignUp.push('Email demandé');
      } 
      if (!this.formData.birthDate) {
        this.errorsSignUp.push('Date de naissance demandé');
      } 
      if (!this.formData.pseudo) {
        this.errorsSignUp.push('Pseudo demandé');
      } 
      if (!this.formData.password) {
        this.errorsSignUp.push('Mot de passe demandé');
      } 
      if (!this.formData.carPicture) {
        this.errorsSignUp.push('Photo de votre voiture demandé');
      }

    },

    handleError(error, from) {
      from === "signin" ? 
      this.errors = [...this.errors, error.response?.data?.message || "Erreur serveur"]
      : this.errorsSignUp = [...this.errorsSignUp,  error.response?.data?.message || "Erreur serveur" ]
   
    },

    handleSuccess() {
      const queryString = window.location.search
      console.log(window.location)
      const params = new URLSearchParams(queryString)


      const redirectTo = params.get("redirectTo") || "filActu"

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

      button.cta-login {
            &:first-of-type {
             @include btnBlue;
          }

          &:last-of-type {
            @include btnBorderWhite;
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

  //forms 

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

  .photo-profil {
    padding-bottom: 2%;
  }

  .name-file {
    margin-top: 9px;
  }

  .forgot-password {
    a {
      font-size: 14px;
    }
  }

  .inscription.basic-popUp {
    .errors {
      ul {
        display: inline-flex;
        flex-wrap: wrap;
      }

      li {
        padding-right: 5px;
      }
    }
  }

  //connexion form 
  .connexion.basic-popUp {
    height: 45%;

    @include responsive('xl-desktop'){
      height: 32%;
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

  .connexion.yes.basic-popUp  {
    height: 58%;

     @include responsive('xl-desktop'){
      height: 40%;
    }
  }
}
</style>