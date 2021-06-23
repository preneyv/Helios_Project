<template>
  <div id="app">
    <Nav v-if="$route.name !== 'home'"/>
    <main :class=highlight>
      <span v-if="$route.name !== 'home'" class="notifs"><img :src="require('@/assets/notifs.svg')" alt="Mes notifications"></span>
      <router-view />
    </main>
    <BandeauRight v-if="$route.name !== 'home'"/>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
import BandeauRight from './components/BandeauRight.vue'

export default {
  name: 'app',
  tile: 'Helios',
  components: {
    Nav,
    BandeauRight
  },
  data() {
    return {}
  },
  computed: {
    highlight () {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss">

  body {
   background-color: $gray;
  }

  main.filActu {
    position: relative;
  }

  #app {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }

  main {
    width: 63%;
    margin-left: 17%;
    height: 100%;
  }

  main.home {
      margin-left: 0;
  }

  .main {
      padding: 8% 10%;
      position: relative;
      height: 100%;
  }

  .fil-actu {
      position: relative;
  }

  .notifs {
      position: fixed;
      top: 15px;
      right: 15px; 
      width: 20px;
      height: 25px;
  
      img {
          width: 100%;
          height: 100%;
      }
  }

</style>