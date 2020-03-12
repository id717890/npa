<template>
  <v-app id="inspire">
    <modals-container />
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :color="layoutColor()" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-5">Amway в Урае</v-toolbar-title>
      <v-toolbar-items>
        <v-btn text class="" to="/">
          <img :src="require('../public/img/n3.png')" class="mr-2" alt="" />
          Уход за зубами
        </v-btn>
        <v-btn text class="" to="/skin">
          <img :src="require('../public/img/n1.png')" class="mr-2" alt="" />
          Уход за кожей
        </v-btn>
        <v-btn text class="" to="/hair">
          <img :src="require('../public/img/n2.png')" class="mr-2" alt="" />
          Уход за волосами
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height align-items-start pa-0"
        style="max-width: none"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer :color="layoutColor()">
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Glister from './components/Glister'
// import GlisterMobile from './components/GlisterMobile'
// import GlisterKids from './components/GlisterKids'
// import GlisterKidsMobile from './components/GlisterKidsMobile'
export default {
  props: {
    source: String
  },
  components: {
    // Glister,
    // GlisterMobile,
    // GlisterKids,
    // GlisterKidsMobile
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    layoutColor(area) {
      if (this.$router.currentRoute.path === '/') return 'green darken-2'
      if (this.$router.currentRoute.path === '/skin')
        return 'deep-orange darken-4'
      if (this.$router.currentRoute.path === '/hair') return 'blue darken-3'
      return 'blue darken-3'
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/_app';
</style>
