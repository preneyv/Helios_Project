<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <template>
          <Nav v-if="$route.name !== 'home'"/>
          <main>
              <router-view />
          </main>
          <BandeauRight v-if="$route.name !== 'home'"/>
      </template>
    </div>
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
}
</script>
