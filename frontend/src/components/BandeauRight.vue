<template>
  <div class="bandeauRight">
    <div class="titreBandeau">Mes prochains événements</div>
    <div class="trait"></div>
    <div class="prochainsEvents">
      <div class="event">
        <div class="dateEvent">12 oct</div>
        <div class="titreEvent">Rally Paris</div>
        <div class="decompteEventText"><span class="contourEventDecompte">J-4</span></div>
      </div>
      <div class="event">
        <div class="dateEvent">10 nov</div>
        <div class="titreEvent">Manif Ford</div>
        <div class="decompteEventText"><span class="contourEventDecompte">J-4</span></div>
      </div>
      <div class="event">
        <div class="dateEvent">19 nov</div>
        <div class="titreEvent">Expo Ferrari</div>
        <div class="decompteEventText"><span class="contourEventDecompte">J-4</span></div>
      </div>
    </div>
    <div class="titreBandeau">Mes groupes</div>
    <div class="trait"></div>
    <div class="mesGroupes">
      <div class="groupe">
        <img class="imgGroupe"> 
        <p class="titreGrp">Green Bentley</p>
      </div>
      <div class="groupe">
        <img class="imgGroupe">
        <p class="titreGrp">Green Bentley</p>
      </div>
      <div class="groupe">
        <img class="imgGroupe">
        <p class="titreGrp">Green Bentley</p>
      </div>
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
      padding-top: 10%;
      margin: 0 2%;
      padding: 10% 5% 0 5%;
    }

    .event {
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
      padding-bottom: 10px;
    }

    .dateEvent {
      color: #B6B6B6;
      font-size: 90%;
      width:60%;
      display: inline-flex;
      align-items: center;
    }

    .titreEvent {
      color: $white;
      font-size: 100%;
      font-weight: bold;
      text-align: center;
      width:60%;
      display: inline-flex;
      align-items: center;
      justify-content: right;
      cursor: pointer;

      &:hover {
        color: $primary;
      }
    }

    .decompteEventText {
      font-weight: bold;
      width: 65%;
      font-size: 90%;
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
    }

    .contourEventDecompte {
      border-radius: 18%;
      background-color: $white;
      padding: 6%;
    }

    .mesGroupes {
      margin-left: 2%;
      padding-left: 5%;
      padding-top: 7%;
      padding-bottom: 7%;
      color: $white;
      font-size: 100%;
    }

    .groupe {
      width: 100%;
      display: inline-flex;
      padding-bottom: 10px;
    }

    .titreGrp {
      width:60%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        color: $primary;
      }
    }

    .imgGrp {
      width:60%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
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