<template> 
  <div class="main">
      <div class="monProfil">
          <div class="h1">Mon profil</div>
          <ProfilInfos></ProfilInfos>
          <ProfilEvents></ProfilEvents>
          <ProfilGroupes></ProfilGroupes>
          <ProfilPosts></ProfilPosts>
      </div>
  </div>
</template>
<script>
    /* eslint-disable */ 
    import Nav from '../components/Nav.vue'
    import BandeauRight from '../components/BandeauRight.vue'
    import ProfilGroupes from '../components/ProfilGroupes.vue'
    import ProfilEvents from '../components/ProfilEvents.vue'
    import ProfilInfos from '../components/ProfilInfos.vue'
    import ProfilPosts from '../components/ProfilPosts.vue'
    import AuthServices from "@/services/auth.js"

    export default {
        name: 'monProfil',
        components: {
            Nav,
            BandeauRight,
            ProfilGroupes,
            ProfilInfos,
            ProfilEvents,
            ProfilPosts
        },

    }
</script>

<style lang="scss">
  .monProfil {
    color:white;
  }



</style>

