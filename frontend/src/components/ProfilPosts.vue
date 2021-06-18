<template>
    <div class="derniersPosts">
        <div class="titresCategories">Mes derniers posts</div>
        <div class="dernierPost">
            <div class="iconsPost"><img class="iconHeliosPartage" src="../assets/IconHelios1.svg"><img class="iconHeliosPartage" src="../assets/IconHelios2.svg"></div>
            <table>
                <tr>
                    <td class="caseImgPost"><img class="imgGroupe"></td>
                    <td class="nomPosteur">John Doe</td>
                </tr>
            </table>
            <div class="contenuPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div class="trait"></div>
            <div class="datePost">Posté le 29/05/21</div>
        </div>
        <div class="dernierPost">
            <div class="iconsPost"><img class="iconHeliosPartage" src="../assets/IconHelios1.svg"><img class="iconHeliosPartage" src="../assets/IconHelios2.svg"></div>
            <table>
                <tr>
                    <td class="caseImgPost"><img class="imgGroupe"></td>
                    <td class="nomPosteur">John Doe</td>
                </tr>
            </table>
            <div class="contenuPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div class="trait"></div>
            <div class="datePost">Posté le 29/05/21</div>
        </div>
    </div>
</template>

<style lang="scss">

.derniersPosts {
    padding:3%;
    width:auto;
    height:auto;
    border-radius:20px;
    background-color:#222222;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
    margin-bottom:5%;

    .iconHeliosPartage {
        height:23px;
        padding-left:20px;
    }

    .dernierPost {
        height: auto;
        background-color:#353535;
        padding:1% 4% 1% 4%;
        border-radius:20px;
        width:auto;
        margin:2.5%;
    }

    .dernierPost td {
        vertical-align: middle;
    }

    .caseImgPost {
        width:50px;
    }

    .nomPosteur {
        padding:0px 0px 0px 20px;    
    }

    .icons {
        width:83%;
        color:#B6B6B6;
        font-size:90%;
        text-align:right;
        padding-right:3%;
    }

    .contenuPost {
        padding: 2% 0% 2% 0%;
        line-height:160%;
        font-size:95%;
    }

    .trait {
        border-bottom: 0.8px solid $white;
    }

    .iconsPost {
        padding-top:1%;
        text-align:right;
    }

    .datePost {
        text-align:right;
        padding:2% 0% 1% 0%;
        font-size:90%;
    }
  }
   
</style>