<template>
  <v-app id="inspire">
    <modals-container />
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item link @click="scrollToTop">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link target="_blank" href="tel:+79527247500">
          <v-list-item-action>
            <v-icon>mdi-phone-in-talk</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Позвонить</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link target="_blank" href="tg://resolve?domain=id717890">
          <v-list-item-action>
            <img
              :src="require('../public/img/social-telegram.png')"
              class="social-icon"
              alt=""
            />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Telegram</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          target="_blank"
          href="https://wa.me/79527247500?text=Здравствуйте! "
        >
          <v-list-item-action>
            <svg
              class="social-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
            >
              <path
                fill="#00E676"
                d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"
              ></path>
              <path
                fill="#FFF"
                d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"
              ></path>
            </svg>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Whats App</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          target="_blank"
          href="viber://chat?number=79527247500"
        >
          <v-list-item-action>
            <img
              :src="require('../public/img/social-viber.png')"
              class="social-icon"
              alt=""
            />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Viber</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :color="layoutColor()" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-5">Amway в Урае</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text class="" to="/">
          <img :src="require('../public/img/n3.png')" class="mr-2" alt="" />
          Уход за зубами
        </v-btn>
        <v-btn text class="" to="/home">
          <img
            :src="require('../public/img/logo-home.webp')"
            class="mr-2"
            alt=""
          />
        </v-btn>
        <!-- <v-btn text class="" to="/skin">
          <img :src="require('../public/img/n1.png')" class="mr-2" alt="" />
          Уход за кожей
        </v-btn>
        <v-btn text class="" to="/hair">
          <img :src="require('../public/img/n2.png')" class="mr-2" alt="" />
          Уход за волосами
        </v-btn> -->
        <v-btn text target="_blank" href="tel:+79527247500">
          <v-icon color="red accent-4">mdi-phone-in-talk</v-icon>
        </v-btn>
        <v-btn text target="_blank" href="tg://resolve?domain=id717890">
          <img
            :src="require('../public/img/social-telegram.png')"
            class="social-icon"
            alt=""
          />
        </v-btn>
        <v-btn
          text
          target="_blank"
          href="https://wa.me/79527247500?text=Здравствуйте! "
        >
          <svg
            class="social-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 39 39"
          >
            <path
              fill="#00E676"
              d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"
            ></path>
            <path
              fill="#FFF"
              d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"
            ></path>
          </svg>
        </v-btn>
        <v-btn text target="_blank" href="viber://chat?number=79527247500">
          <img
            :src="require('../public/img/social-viber.png')"
            class="social-icon"
            alt=""
          />
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height align-items-start pa-0"
        style="max-width: none"
        fluid
      >
        <transition name="router-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <v-row no-gutters>
      <v-col cols="12">
        <v-img :src="require('../public/img/bg1.webp')">
          <div class="pa-12 my-12 d-flex align-center justify-center">
            <v-icon class="display-4 text-white">mdi-truck-delivery</v-icon>
            <div class="t6 mx-5 text-white">Бесплатная доставка по городу</div>
            <v-icon class="display-4 text-white hidden-sm-and-down"
              >mdi-truck-delivery</v-icon
            >
          </div>
        </v-img>
      </v-col>
    </v-row>
    <v-footer :color="layoutColor()" class="d-flex flex-row">
      <v-row no-gutters class="hidden-sm-and-down">
        <v-col cols="12" class="text-center">
          <v-btn text fab target="_blank" href="tel:+79527247500">
            <v-icon color="red accent-4">mdi-phone-in-talk</v-icon>
          </v-btn>
          <v-btn text fab target="_blank" href="tg://resolve?domain=id717890">
            <img
              :src="require('../public/img/social-telegram.png')"
              class="social-icon1"
              alt=""
            />
          </v-btn>
          <v-btn
            text
            fab
            target="_blank"
            href="https://wa.me/79527247500?text=Здравствуйте! "
          >
            <svg
              class="social-icon1"
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
            >
              <path
                fill="#00E676"
                d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"
              ></path>
              <path
                fill="#FFF"
                d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"
              ></path>
            </svg>
          </v-btn>
          <v-btn
            text
            fab
            target="_blank"
            href="viber://chat?number=79527247500"
          >
            <img
              :src="require('../public/img/social-viber.png')"
              class="social-icon1"
              alt=""
            />
          </v-btn>
          <span class="white--text mx-5">&copy; 2019 Amway в Урае</span>
          <v-btn fab small text dark @click="scrollToTop">
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters class="hidden-md-and-up">
        <v-col cols="12" class="text-center">
          <v-btn text fab target="_blank" href="tel:+79527247500">
            <v-icon color="red accent-4">mdi-phone-in-talk</v-icon>
          </v-btn>
          <v-btn text fab target="_blank" href="tg://resolve?domain=id717890">
            <img
              :src="require('../public/img/social-telegram.png')"
              class="social-icon1"
              alt=""
            />
          </v-btn>
          <v-btn
            text
            fab
            target="_blank"
            href="https://wa.me/79527247500?text=Здравствуйте! "
          >
            <svg
              class="social-icon1"
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
            >
              <path
                fill="#00E676"
                d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"
              ></path>
              <path
                fill="#FFF"
                d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"
              ></path>
            </svg>
          </v-btn>
          <v-btn
            text
            fab
            target="_blank"
            href="viber://chat?number=79527247500"
          >
            <img
              :src="require('../public/img/social-viber.png')"
              class="social-icon1"
              alt=""
            />
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters class="hidden-md-and-up">
        <v-col cols="12" class="text-center">
          <span class="white--text mx-5">&copy; 2019 Amway в Урае</span>
          <v-btn fab small text dark @click="scrollToTop">
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      this.drawer = false
    },
    layoutColor(area) {
      if (this.$router.currentRoute.path === '/') return 'green '
      if (this.$router.currentRoute.path === '/skin')
        return 'deep-orange darken-4'
      if (this.$router.currentRoute.path === '/hair') return 'blue darken-3'
      if (this.$router.currentRoute.path === '/home') return 'blue darken-1'
      return 'blue darken-3'
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/_app';
</style>
