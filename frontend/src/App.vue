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
 /* eslint-disable */
    import Nav from './components/Nav.vue'
    import BandeauRight from './components/BandeauRight.vue'
    import VueMeta from 'vue-meta'

    // Vue.use(VueMeta)

export default {
  name: 'app',
  tile: 'Helios',
  // metaInfo: {
  //     title: 'Helios',
  // },
  // props: ,
  components: {
    Nav,
    BandeauRight
  },
  data() {
    return {
    
    }
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

  main {
    width: 65%;
  }

  main.filActu {
    position: relative;
  }

  #app {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }

</style>