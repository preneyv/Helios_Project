<template>
    <div class="groupesCrees">
        <div class="titresCategories">Les groupes que j'ai créés</div>
        <div class="groupeCree">
            <table>
                <tr>
                    <td class="caseImgGroupe"><img src="../assets/defaut-profil.jpg" alt="photo du groupe"></td>
                    <td class="titreGroupeCree">Green Bentley</td>
                    <td class="dernierMsg">Il y a 1h par dornicCl</td>
                </tr>
            </table>                
        </div>
        <div class="groupeCree">
            <table>
                <tr>
                    <td class="caseImgGroupe"><img src="../assets/defaut-profil.jpg" alt="photo de l'utilisateur"></td>
                    <td class="titreGroupeCree">Green Bentley</td>
                    <td class="dernierMsg">Il y a 1h par dornicCl</td>
                </tr>
            </table>                
        </div>
        <div class="groupeCree">
            <table>
                <tr>
                    <td class="caseImgGroupe"><img src="../assets/defaut-profil.jpg" alt="photo de l'utilisateur"></td>
                    <td class="titreGroupeCree">Green Bentley</td>
                    <td class="dernierMsg">Il y a 1h par dornicCl</td>
                  </tr>
            </table>                
        </div>
    </div>
</template>

<style lang="scss">

  .groupesCrees {
    padding: 3%;
    width: auto;
    height: auto;
    border-radius: 20px;
    background-color:#222222;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
    margin-bottom: 5%;

    img {
      clip-path: circle(50%);
      align-self: center;
      height: 45px;
      width: auto;
    }

    .titreGroupeCree {
      padding-left:10px;
    }
  }

  .groupeCree {
    height: auto;
    background-color:#353535;
    padding: 1% 4% 1% 4%;
    border-radius: 20px;
    width: auto;
    margin: 2.5%;
  }

  .groupeCree td {
    vertical-align: middle;
  }

  .caseImgGroupe {
    width: 50px;
  }

  .dernierMsg {
    width: 75%;
    color:#B6B6B6;
    font-size: 90%;
    text-align: right;
    padding-right: 3%;
  }
   
</style>