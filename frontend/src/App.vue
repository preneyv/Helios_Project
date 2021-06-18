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

export default {
  name: 'app',
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

  #app {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }

</style>