<template>
    <div class="infosPerso">
        <table class="firstTable">
            <tr>
                <td>Nom<br><input type="text" name="nom"></td>                  
                <td>Prénom<br><input type="text" name="prenom"></td>
            </tr>
            <tr>
                <td>Email<br><input type="mail" name="email"></td>
                <td>Date<br><input type="date" name="date"></td>
            </tr>
        </table>
        <div class="textProfil">Votre login apparaîtra sur tout ce que vous publiez, il sera votre identifiant sur la plateforme pour garantir votre anonymat.</div>
        <table class="secondTable">
            <tr>
                <td>Login<br><input type="text" name="login"></td>       
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

<style lang="scss">

  .infosPerso {
    padding:3%;
    width:auto;
    height:auto;
    border-radius:20px;
    background-color:#222222;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
    margin-bottom:5%;
  }

  .firstTable td {
    padding:1%;
    padding-left:3.5%;
    width:500px;
  }

  .firstTable input {
    width:95%;
  } 

  input {
    @include inputLight;
  }

  .textProfil {
    padding-left:3.5%;
    padding-right:3%;
    font-size:80%;
    padding-bottom:3%;
  }

  .secondTable td {    
    padding:1%;
    padding-left:3.5%;
    width:930px;
  }

  .secondTable input {
    width:100%;
  } 

  .buttonModif {
    text-align:right;
    padding-right:3%;
    padding-top:2%;
  }

  button {
      &:first-of-type {
        @include btnBlue;
      }
  }
</style>