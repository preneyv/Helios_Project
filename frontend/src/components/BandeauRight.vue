<template>
  <html>
    <body>
        <div class="bandeauRight">
          <div class="titreBandeau">Mes prochains événements</div>
          <div class="trait"></div>
          <div class="prochainsEvents">
            <table>
              <tr>
                <td class="dateEvent">12 oct</td>
                <td class="titreEvent">Rally Paris</td>
                <td><div class="decompteEventText">J-4</div></td>
              </tr>
              <tr>
                <td class="dateEvent">10 nov</td>
                <td class="titreEvent">Manif Ford</td>
                <td><div class="decompteEventText">J-25</div></td>
              </tr>
              <tr>
                <td class="dateEvent">19 nov</td>
                <td class="titreEvent">Expo Ferrari</td>
                <td class="decompteEvent"><div class="decompteEventText">J-34</div></td>
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
    </body>
  </html>
  
</template>

<style lang="scss">

  html {
    height: 100%;
  }

  body { 
    height: 100%;
    margin: 0;
    padding: 0;
    background-color:#353535;
  }

  .bandeauRight {
	  min-height: 100%;
    position: absolute;
    width:18%;
    background-color:#222222;
    right:0;
  }

  .titreBandeau {
    margin-top:20px;
    margin-left:10px;
    color:white;
    font-size:18px;
    padding: 15px;
    font-weight: bold;
  }

  .trait {
    border-bottom: 0.8px solid white;
    margin-left:25px;
    margin-right:25px;
  }

  .prochainsEvents {
    padding-left:10%;
    padding-top:7%;
    padding-bottom:3%;
  }

  .prochainsEvents tr {
    text-align:center;
  }

  .prochainsEvents td {
    width:90px;
    height:38px;
    vertical-align: middle;
  }

  .dateEvent {
    color:#B6B6B6;
  }

  .titreEvent {
    color:#FFFFFF;
    font-size:14px;
    font-weight: bold;
    text-align:center;
  }

  .decompteEventText {
    border-radius:10px;
    background-color:white;
    padding-top:7px;
    padding-bottom:7px;
    margin-left:25px;
    font-weight: bold;
    width:60px;
  }

  .mesGroupes {
    padding-left: 5%;
    padding-top:7%;
    padding-bottom:7%;
    color:white;
    font-size:14px;
  }

  .imgGroupe {
    background-size : contain;
    background-position : 50% 50%; 
    background-image : url(https://64.media.tumblr.com/eb84cd5dc67753cb5f67d9d4e5224592/e4381b4eb0cc8bfb-fc/s1280x1920/c7b0f7f3ff160b0587cea7bdecf10bf8820689aa.jpg);
    display : inline-block;
    width : 40px; height : 40px;
    border: none;
    -moz-border-radius : 75px;
    -webkit-border-radius : 75px;
    border-radius : 75px;
  }

  .mesGroupes tr {
    text-align:center;
  }

  .titreGrp {
    width:150px;
    height:50px;
    vertical-align: middle;
  }

  .imgGrp {
    padding-left:10%;
    width:70px;
    height:50px;
    vertical-align: middle;
  }
</style>
