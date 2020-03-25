<template>
  <v-row no-gutters v-if="favs">
    <v-col cols="12">
      <div class="hheader1">ЛИДЕРЫ ПРОДАЖ ПРОШЛОЙ НЕДЕЛИ</div>
    </v-col>
    <v-col
      cols="12"
      class="d-flex flex-row flex-wrap justify-space-around  text-center py-10"
    >
      <div
        class="fav-product"
        style="position: relative"
        v-for="(fav, index) in favs"
        :key="index"
      >
        <v-btn
          fab
          color="green"
          class="btn-favorite1"
          dark
          @click="orderProduct($event, fav.name)"
        >
          <v-icon>mdi-cart-plus</v-icon>
        </v-btn>

        <v-btn
          fab
          class="btn-favorite2"
          color="green accent-4"
          dark
          outlined
          @click="openAmway(fav.url)"
        >
          <v-icon>mdi-web</v-icon>
        </v-btn>
        <img
          data-aos="zoom-in"
          data-aos-duration="800"
          :data-aos-delay="index * 300"
          class="mt-6 mb-3"
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
import moment from 'moment'
export default {
  data: () => ({
    week: moment().week(),
    weeks: [
      {
        id: 13,
        products: [
          {
            name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
            img: 'img/h-item-0014.webp',
            url: 'https://www.amway.ru/p/0014',
            sales: 14,
            color: 'red'
          },
          {
            name: 'L.O.C.™ Многофункциональное чистящее средство',
            img: 'img/h-item-0001.webp',
            url: 'https://www.amway.ru/p/0001',
            sales: 12,
            color: 'teal'
          },
          {
            name: 'Glister™ Многофункциональная зубная паста',
            img: 'img/g-item-pasta.webp',
            url: 'https://www.amway.ru/p/6833',
            sales: 11,
            color: 'green'
          },
          {
            name: 'SA8™ Premium Порошок стиральный концентрированный',
            img: 'img/h-item-109849.webp',
            url: 'https://www.amway.ru/p/109849',
            sales: 7,
            color: 'blue'
          },
          {
            name: 'DISH DROPS™ Концентрированная жидкость для мытья посуды',
            img: 'img/h-item-110488-2.webp',
            url: 'https://www.amway.ru/p/110488',
            sales: 5,
            color: 'yellow'
          }
        ]
      },
      {
        id: 14,
        products: [
          {
            name: 'Glister™ Многофункциональная зубная паста',
            img: 'img/g-item-pasta.webp',
            url: 'https://www.amway.ru/p/6833',
            sales: 19,
            color: 'green'
          },
          {
            name: 'L.O.C.™ Многофункциональное чистящее средство',
            img: 'img/h-item-0001.webp',
            url: 'https://www.amway.ru/p/0001',
            sales: 13,
            color: 'teal'
          },
          {
            name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
            img: 'img/h-item-0014.webp',
            url: 'https://www.amway.ru/p/0014',
            sales: 12,
            color: 'red'
          },
          {
            name: 'SA8™ Premium Порошок стиральный концентрированный',
            img: 'img/h-item-109849.webp',
            url: 'https://www.amway.ru/p/109849',
            sales: 7,
            color: 'blue'
          },
          {
            name: 'DISH DROPS™ Концентрированная жидкость для мытья посуды',
            img: 'img/h-item-110488-2.webp',
            url: 'https://www.amway.ru/p/110488',
            sales: 5,
            color: 'yellow'
          }
        ]
      }
    ]
  }),
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
    favs() {
      const week = this.weeks.find(x => x.id === this.week)
      if (this.week && this.weeks) {
        return week.products
      }
      return null
    }
  }
}
</script>

<style></style>
