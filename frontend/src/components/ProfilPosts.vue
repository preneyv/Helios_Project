<template>
    <div class="derniersPosts">
        <div class="titresCategories">Mes derniers posts</div>
        <div class="dernierPost">
            <div class="up">
                <div class="user">
                    <img :src="require('@/assets/defaut-profil.jpg')" alt="photo de l'utilisateur">
                    <p class="user-name">John Doe</p>
                </div>
                <div class="plus">
                    <div class="social-media">
                        <img :src="require('@/assets/share.svg')" alt="Partager ce post sur les réseaux sociaux">
                    </div>
                    <div class="more-info">
                        <img :src="require('@/assets/Informations.svg')" alt="Plus de fonctionnalités">
                    </div>
                </div>
            </div>
            <div class="contenuPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div class="trait"></div>
            <div class="datePost">Posté le 29/05/21</div>
        </div>
        <div class="dernierPost">
            <div class="up">
                <div class="user">
                    <img :src="require('@/assets/defaut-profil.jpg')" alt="photo de l'utilisateur">
                    <p class="user-name">John Doe</p>
                </div>
                <div class="plus">
                    <div class="social-media">
                        <img :src="require('@/assets/share.svg')" alt="Partager ce post sur les réseaux sociaux">
                    </div>
                    <div class="more-info">
                        <img :src="require('@/assets/Informations.svg')" alt="Plus de fonctionnalités">
                    </div>
                </div>
            </div>
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

    .dernierPost {
        height: auto;
        background-color:#353535;
        padding:1% 4% 1% 4%;
        border-radius:20px;
        width:auto;
        margin:2.5%;
    }

    .up {
        padding-top:1.5%;
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        padding-bottom: 15px;
    }

    .caseImgPost {
        width:50px;
    }
   

    .contenuPost {
        padding: 2% 0% 2% 0%;
        line-height:160%;
        font-size:85%;
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
        font-size:80%;
    }
  }
   
</style>