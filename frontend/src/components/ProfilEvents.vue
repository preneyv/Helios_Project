<template>
    <div class="eventsOrganis">
        <div class="titresCategories">Les événements que j'organise</div>
        <table>
            <tr>
                <td>
                    <div class="titreEventOrganis">80's Car</div>
                    <div class="infosEvent">
                      <div class="adresse">4 avenue de Beau-Séjour<br>Mardi 05 Juillet 2021</div>
                      <div class="horaire">14h30</div>
                      <div class="voirPlus"><a href="#">voir plus ></a></div>
                    </div>
                </td>
                <div class="ecartTableau"></div>
                <td>
                    <div class="titreEventOrganis">80's Car</div>
                    <div class="infosEvent">
                      <div class="adresse">4 avenue de Beau-Séjour<br>Mardi 05 Juillet 2021</div>
                      <div class="horaire">14h30</div>
                      <div class="voirPlus"><a href="#">voir plus ></a></div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss">

  .eventsOrganis {
    padding: 3%;
    width: auto;
    height: auto;
    border-radius: 20px;
    background-color:#222222;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
    margin-bottom: 5%;
  }

  .titresCategories {
    padding-left: 2.5%;
  }

  .eventsOrganis table {
    margin: 2.5%;
  }

  .eventsOrganis td {
    height: auto;
    background-color:#353535;
    padding: 2% 4% 2% 4%;
    border-radius: 20px;
    width: 450px;
  }

  .titreEventOrganis {
    text-align: center;
    font-weight: bold;
    font-size: 105%;
    padding-bottom: 4%;
  }

  .infosEvent {
    font-size: 80%;
    line-height: 150%;
  }

  .horaire {
    padding-top: 6%;
  }

  .voirPlus {
    text-align: right;
  }

  .ecartTableau {
    padding-left: 100px;
  }

</style>