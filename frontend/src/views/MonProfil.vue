<template> 
  <div class="main">
      <div class="monProfil">
          <div class="h1">Mon profil</div>
      </div>
  </div>
</template>
<script>
    /* eslint-disable */ 
    import Nav from '../components/Nav.vue'
    import BandeauRight from '../components/BandeauRight.vue'
    import ProfilGroupes from '../components/ProfilGroupes.vue'
    import ProfilInfos from '../components/ProfilInfos.vue'
    import ProfilPosts from '../components/ProfilPosts.vue'
    // import AuthServices from "@/services/auth.js"

    export default {
        name: 'monProfil',
        components: {
            Nav,
            BandeauRight,
            ProfilGroupes,
            ProfilInfos,
            ProfilPosts
        },

    }
</script>

<style lang="scss">




</style>

