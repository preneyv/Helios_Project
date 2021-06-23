<template>
    <div class="infosPerso">
        <table class="firstTable">
            <tr>
                <td>Nom<br><input type="text" name="nom" v-model="userInfo.name"></td>                  
                <td>Prénom<br><input type="text" name="prenom" v-model="userInfo.firstname"></td>
            </tr>
            <tr>
                <td>Email<br><input type="mail" name="email" v-model="userInfo.email"></td>
                <td>Date<br><input type="date" name="date" v-model="userInfo.date" disabled></td>
            </tr>
        </table>
        <div class="textProfil">Votre login apparaîtra sur tout ce que vous publiez, il sera votre identifiant sur la plateforme pour garantir votre anonymat.</div>
        <table class="secondTable">
            <tr>
                <td>Login<br><input type="text" name="login" v-model="userInfo.pseudo"></td>       
            </tr>
            <tr>
                <td>Mot de passe<br><input type="password" name="password"></td>
            </tr>
        </table>

        <div class="buttonModif">
            <button>Modifier</button>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import {getUserInfos} from '@/utils/utils.js'

export default {
  
  data() {
    return {
      userInfo: getUserInfos()
    }
  },
  computed: {
    formatDate(date) {
              let formatDate = moment(date).format("DD/MM/YY");
              return formatDate;
    },
  },
  methods: {
    
  }
}
</script>

<style lang="scss">

  .infosPerso {
    padding: 3%;
    width: auto;
    height: auto;
    border-radius: 20px;
    background-color:#222222;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
    margin-bottom: 5%;
  }

  .firstTable td {
    padding: 1%;
    padding-left: 3.5%;
    width: 500px;

    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    border-radius: 4px;
    margin-right: 2px;
    opacity: 0.6;
    filter: invert(0.8);
  }

  .firstTable input {
    width: 95%;
  } 

  input {
    @include inputLight;
    color:grey;
  }

  .textProfil {
    padding: 4% 3% 1% 3.5%;
    font-size: 80%;
    color: grey;
  }

  .secondTable td {    
    padding: 1%;
    padding-left: 3.5%;
    width: 980px;
  }

  .secondTable input {
    width: 100%;
  } 

  .buttonModif {
    text-align: right;
    padding-right: 3%;
    padding-top: 2%;

    button {
      padding: 8px 40px !important;
    }
  }

  .infosPerso {
      button {
        &:first-of-type {
          @include btnBlue;
        }
    }
  }

</style>