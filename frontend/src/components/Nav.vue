<template>
  <html>
    <body>
        <div class="bandeauLeft">
            <img id="logo" src="../assets/LogoHelios.svg">
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Agenda</a></li>
                <li><a href="#">Mon profil</a></li>
                <li><a href="#">Déconnexion</a></li>
            </ul>
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

  .bandeauLeft {
	  min-height: 100%;
    position: absolute;
    width:18%;
    margin-right:0;
    background-color:#222222;
    text-align:center;
  }

  #logo {
    padding-top:60px;
    padding-bottom:20px;
    width:180px;
  }

  li a {
    color:white;
    font-size:18px;
  }

  li {
    padding: 15px;
  }

</style>
