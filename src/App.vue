<template>
  <v-app id="inspire">
    <v-toolbar class="" ref="menu">
      <!-- <v-toolbar-items class="">
        <v-btn to="/home" class="sm-btn-menu"
          ><i class="mr-1 fa fa-home fa-2x"></i
        ></v-btn>
        <v-btn to="/about" class="px-2"
          ><i class="mr-1 fa fa-address-book"></i>Обо мне</v-btn
        >
        <v-btn to="/contacts" class="px-2"
          ><i class="mr-1 fa fa-phone"></i>Контакты</v-btn
        >
        <v-btn to="/articles" class="px-2"
          ><i class="mr-1 fab fa-pagelines"></i>Полезная информация</v-btn
        >
      </v-toolbar-items> -->

      <!-- <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/feedbacks" class="px-2"
          ><i class="mr-1 fa fa-comments"></i>Отзывы</v-btn
        >
        <v-btn flat to="/dashboard" v-if="isAuth && isAdmin" class="px-2"
          ><i class="mr-1 fa fa-sun"></i>Админка</v-btn
        >
        <v-btn flat to="/lk" v-if="isAuth && !isAdmin" class="px-2"
          ><i class="mr-1 fa fa-sun"></i>Кабинет</v-btn
        >
      </v-toolbar-items> -->
    </v-toolbar>
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

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-5">Amway в Урае</v-toolbar-title>
      <v-toolbar-items>
        <v-btn text class="">
          <img :src="require('../public/img/n3.png')" class="mr-2" alt="" />
          Уход за зубами
        </v-btn>
        <v-btn text class="">
          <img :src="require('../public/img/n1.png')" class="mr-2" alt="" />
          Уход за кожей
        </v-btn>
        <v-btn text class="">
          <img :src="require('../public/img/n2.png')" class="mr-2" alt="" />
          Уход за волосами
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content class="pa-0">
      <v-container
        class="fill-height align-items-start pa-0"
        style="max-width: none"
        fluid
      >
        <glister class="hidden-sm-and-down" />
        <glister-mobile class="hidden-md-and-up" />
        <glister-kids class="hidden-sm-and-down" />
        <glister-kids-mobile class="hidden-md-and-up" />
        <!-- <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/zgxeLQ"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row> -->
      </v-container>
    </v-content>
    <v-footer color="indigo">
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Glister from './components/Glister'
import GlisterMobile from './components/GlisterMobile'
import GlisterKids from './components/GlisterKids'
import GlisterKidsMobile from './components/GlisterKidsMobile'
export default {
  props: {
    source: String
  },
  components: {
    Glister,
    GlisterMobile,
    GlisterKids,
    GlisterKidsMobile
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    layoutColor(area) {}
  }
}
</script>

<style lang="scss">
@import './assets/scss/_app';
</style>
