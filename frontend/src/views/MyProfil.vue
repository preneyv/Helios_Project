<template> 
  <div class="main">
      <div class="monProfil">
          <div class="h1">Mon profil</div>
          <ProfilInfos></ProfilInfos>
          <ProfilEvents></ProfilEvents>
          <ProfilGroups></ProfilGroups>
          <ProfilPosts></ProfilPosts>
      </div>
  </div>
</template>

<script>

import ProfilGroups from '../components/ProfilGroups.vue'
import ProfilEvents from '../components/ProfilEvents.vue'
import ProfilInfos from '../components/ProfilInfos.vue'
import ProfilPosts from '../components/ProfilPosts.vue'


export default {
  name: 'monProfil',
  components: {
    ProfilGroups,
    ProfilInfos,
    ProfilEvents,
    ProfilPosts
  },
}

</script>

<style lang="scss">

  .monProfil {
    color:white;
    padding-bottom: 25px;
  }

</style>

