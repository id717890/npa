<template>
  <v-row no-gutters v-if="favs">
    <v-col cols="12">
      <div class="hheader1">ЛИДЕРЫ ПРОДАЖ ПРОШЛОЙ НЕДЕЛИ</div>
    </v-col>
    <v-col
      cols="12"
      class="d-flex flex-row justify-space-around  text-center py-10"
    >
      <div
        class="fav-product d-flex flex-column justify-space-around "
        style="position: relative"
        v-for="(fav, index) in favs"
        :key="index"
      >
        <img
          data-aos="zoom-in"
          data-aos-duration="800"
          :data-aos-delay="index * 300"
          class="mb-4 align-self-center"
          style="max-height: 220px"
          :src="fav.img"
          :alt="fav.name"
        />
        <div
          class="th9"
          style="width: 200px"
          data-aos="zoom-out"
          data-aos-duration="800"
          :data-aos-delay="index * 400"
        >
          {{ fav.name }}
        </div>
        <div class="mt-4">
          <v-alert tile dense dark :color="fav.color">
            <v-icon>mdi-cash</v-icon>
            Продано {{ fav.sales }} шт</v-alert
          >
        </div>
        <div class="d-flex flex-row justify-space-between">
          <v-btn fab color="green" dark @click="orderProduct($event, fav.name)">
            <v-icon>mdi-cart-plus</v-icon>
          </v-btn>
          <v-btn
            fab
            color="green accent-4"
            dark
            outlined
            @click="openAmway(fav.url)"
          >
            <v-icon>mdi-web</v-icon>
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
const settings = {
  height: 'auto',
  maxWidth: 430,
  adaptive: true,
  transition: 'nice-modal-fade',
  clickToClose: true
}
import CallDialog from '../components/Dialog/CallDialog'
import { mapGetters } from 'vuex'
export default {
  mounted() {
    console.log(this.$store.state.favorite.week)
  },
  methods: {
    openAmway(url) {
      window.open(url, '_blank')
    },
    orderProduct(e, product) {
      e.preventDefault()
      this.$modal.show(CallDialog, { result: product + '\r\n' }, settings)
    }
  },
  computed: {
    ...mapGetters(['favs'])
  }
}
</script>
