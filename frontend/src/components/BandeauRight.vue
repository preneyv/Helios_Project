<template>
  <div class="bandeauRight">
    <div class="titreBandeau">Mes prochains événements</div>
    <div class="trait"></div>
    <div class="prochainsEvents">
      <table>
        <tr>
          <td class="dateEvent">12 oct</td>
          <td class="titreEvent">Rally Paris</td>
          <td>
            <div class="decompteEventText">J-4</div>
          </td>
        </tr>
        <tr>
          <td class="dateEvent">10 nov</td>
          <td class="titreEvent">Manif Ford</td>
          <td>
            <div class="decompteEventText">J-25</div>
          </td>
        </tr>
        <tr>
          <td class="dateEvent">19 nov</td>
          <td class="titreEvent">Expo Ferrari</td>
          <td class="decompteEvent">
            <div class="decompteEventText">J-34</div>
          </td>
        </tr>
      </table>
    </div>
    <div class="titreBandeau">Mes groupes</div>
    <div class="trait"></div>
    <div class="mesGroupes">
      <table>
        <tr>
          <td class="imgGrp"><img class="imgGroupe"></td>
          <td class="titreGrp">Green Bentley</td>
        </tr>
        <tr>
          <td class="imgGrp"><img class="imgGroupe"></td>
          <td class="titreGrp">Green Bentley</td>
        </tr>
        <tr>
          <td class="imgGrp"><img class="imgGroupe"></td>
          <td class="titreGrp">Green Bentley</td>
        </tr>
        <tr>
          <td class="imgGrp"><img class="imgGroupe"></td>
          <td class="titreGrp">Green Bentley</td>
        </tr>
        <tr>
          <td class="imgGrp"><img class="imgGroupe"></td>
          <td class="titreGrp">Green Bentley</td>
        </tr>
      </table>
    </div>
  </div>

</template>
<script>
/* eslint-disable */
</script>
<style lang="scss">

  .bandeauRight {
    min-height: 100%;
    position: absolute;
    width: 18%; 
    background-color: $black;
    right: 0;
    position:fixed;

    .trait {
      border-bottom: 0.8px solid $white;
      margin-left: 7%;
      margin-right: 7%;
    }

    .titreBandeau {
      margin-top: 8%;
      margin-left: 2%;
      color: white;
      font-size: 115%;
      padding: 5%;
      font-weight: bold;
    }

    .prochainsEvents {
      padding-left: 7%;
      padding-top: 7%;
      padding-bottom: 3%;
    }

    .prochainsEvents tr {
      text-align: center;
    }

    .prochainsEvents td {
      width: 10%;
      height: 38px;
      vertical-align: middle;
    }

    .dateEvent {
      color: #B6B6B6;
      font-size: 90%;
    }

    .titreEvent {
      color: $white;
      font-size: 100%;
      font-weight: bold;
      text-align: center;
    }

    .decompteEventText {
      border-radius: 18%;
      background-color: $white;
      padding-top: 6%;
      padding-bottom: 6%;
      margin-left: 10%;
      font-weight: bold;
      width: 65%;
      font-size: 90%;
    }

    .mesGroupes {
      padding-left: 10%;
      padding-top: 7%;
      padding-bottom: 7%;
      color: $white;
      font-size: 100%;
    }

    .mesGroupes tr {
      text-align: center;
    }

    .titreGrp {
      width: 150px;
      height: 50px;
      vertical-align: middle;
    }

    .imgGrp {
      padding-left: 10%;
      width: 30%;
      height: 40%;
      vertical-align: middle;
    }

  }

   .imgGroupe {
      background-size: contain;
      background-position: 50% 50%;
      background-image: url(https://64.media.tumblr.com/eb84cd5dc67753cb5f67d9d4e5224592/e4381b4eb0cc8bfb-fc/s1280x1920/c7b0f7f3ff160b0587cea7bdecf10bf8820689aa.jpg);
      display: inline-block;
      width: 40px;
      height: 40px;
      border: none;
      -moz-border-radius: 75px;
      -webkit-border-radius: 75px;
      border-radius: 75px;
    }
  
</style>