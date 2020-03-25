<template>
  <v-row no-gutters v-if="favs">
    <v-col cols="12">
      <div class="hheader1">ЛИДЕРЫ ПРОДАЖ ЭТОЙ НЕДЕЛИ</div>
    </v-col>
    <v-col
      cols="12"
      class="d-flex flex-row justify-space-around  text-center py-10"
    >
      <div class="fav-product" v-for="(fav, index) in favs" :key="index">
        <img
          data-aos="zoom-in"
          data-aos-duration="800"
          :data-aos-delay="index * 300"
          class="mb-4"
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
            sales: 14,
            color: 'red'
          },
          {
            name: 'L.O.C.™ Многофункциональное чистящее средство',
            img: 'img/h-item-0001.webp',
            sales: 12,
            color: 'teal'
          },
          {
            name: 'Glister™ Многофункциональная зубная паста',
            img: 'img/g-item-pasta.webp',
            sales: 11,
            color: 'green'
          },
          {
            name: 'SA8™ Premium Порошок стиральный концентрированный',
            img: 'img/h-item-109849.webp',
            sales: 7,
            color: 'blue'
          },
          {
            name: 'DISH DROPS™ Концентрированная жидкость для мытья посуды',
            img: 'img/h-item-110488-2.webp',
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
            sales: 19,
            color: 'green'
          },
          {
            name: 'L.O.C.™ Многофункциональное чистящее средство',
            img: 'img/h-item-0001.webp',
            sales: 13,
            color: 'teal'
          },
          {
            name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
            img: 'img/h-item-0014.webp',
            sales: 12,
            color: 'red'
          },
          {
            name: 'SA8™ Premium Порошок стиральный концентрированный',
            img: 'img/h-item-109849.webp',
            sales: 7,
            color: 'blue'
          },
          {
            name: 'DISH DROPS™ Концентрированная жидкость для мытья посуды',
            img: 'img/h-item-110488-2.webp',
            sales: 5,
            color: 'yellow'
          }
        ]
      }
    ]
  }),
  computed: {
    favs() {
      const week = this.weeks.find(x => x.id === this.week)
      if (this.week && this.weeks) {
        return week.products
      }
      return null
    }
  },
  mounted() {}
}
</script>

<style></style>
