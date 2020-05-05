<template>
  <v-row no-gutters>
    <v-col cols="12">
      <div class="bg2-1-mobile py-12 px-6">
        <v-row no-gutters class="h100">
          <v-col
            cols="12"
            class="d-flex flex-column align-items-start justify-center"
          >
            <div
              class="tb1 mb-6 text-center"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="100"
              style="text-shadow: black 2px 2px 4px, black 0px 0px 1em; font-size: 3rem; width: 100%"
            >
              УХОД
              <br />
              ЗА КОЖЕЙ
            </div>
            <img
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="250"
              class="mb-6"
              :src="require('../../public/img/i2-1.webp')"
              alt=""
            />
            <div
              class="tb2 text-white"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="500"
              style="text-shadow: 2px 2px 4px black, 0 0 1em black;"
            >
              Коллекция средств <strong>G&H</strong> от Amway для ухода за кожей
              для всех членов семьи независимо от пола, возраста и типа кожи
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" class="d-flex flex-row align-center py-4 justify-center">
      <div
        class="pic-container"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <img
          :style="{ opacity: activePic === 0 ? 1 : 0 }"
          :src="require('../../public/img/i3-1.webp')"
          alt=""
        />
        <img
          :style="{ opacity: activePic === 1 ? 1 : 0 }"
          :src="require('../../public/img/i3-3.webp')"
          alt=""
        />
        <img
          :style="{ opacity: activePic === 2 ? 1 : 0 }"
          :src="require('../../public/img/i3-4.webp')"
          alt=""
        />
      </div>
    </v-col>
    <v-col cols="12" class="pa-10">
      <div
        class="tb3 text-justify"
        style="width: auto"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="400"
      >
        Содержат
        <strong
          >уникальные комбинации ингредиентов натурального происхождения</strong
        >, которые обеспечивают особую заботу и уход за кожей
      </div>
    </v-col>
    <v-col cols="12" class="d-flex flex-row align-center">
      <img
        :src="require('../../public/img/i3-2.webp')"
        alt=""
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="600"
      />
      <div
        class="tb3"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="800"
      >
        Протестировано дерматологами и
        <strong>подходит для всех членов семьи</strong>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="tb4" data-aos="fade" data-aos-duration="600">
        Представляем вашему вниманию
        <br />
        <strong>
          3 коллекции для ухода за кожей для всех членов семьи:
        </strong>
      </div>
    </v-col>
    <v-col cols="12" class="d-flex flex-row flex-wrap justify-center pb-12">
      <div class="mb-12">
        <div
          class="b-item"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="250"
        >
          <div class="b-item-1"></div>
          <div class="b-item-label b-item-label-1">
            Коллекция
            <div class="tb5">Обновление</div>
          </div>
        </div>
        <div class="mt-6 pl-4">
          <div
            v-for="(product, index) in refresh"
            :key="product.id"
            class="chip-item mb-2 d-flex flex-row flex-nowrap pr-5 align-center"
            data-aos="fade-up"
            data-aos-duration="600"
            :data-aos-delay="index * 100 + 400"
          >
            <v-chip color="#b9be40" class="mr-3" dark>{{ index + 1 }}</v-chip>
            <div class="flex-grow-1">
              <a :href="product.url" target="_blank">{{ product.text }}</a>
            </div>
            <v-btn
              @click="orderProduct($event, product.id)"
              text
              color="primary"
              fab
              small
              outlined
            >
              <v-icon>mdi-cart-plus</v-icon>
            </v-btn>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <div
          class="b-item"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="500"
        >
          <div class="b-item-2"></div>
          <div class="b-item-label b-item-label-2">
            Коллекция
            <div class="tb5">Питание</div>
          </div>
        </div>
        <div class="mt-6 pl-4">
          <div
            v-for="(product, index) in nourish"
            :key="product.id"
            class="chip-item mb-2 d-flex flex-row flex-nowrap pr-5 align-center"
            data-aos="fade-up"
            data-aos-duration="600"
            :data-aos-delay="index * 100 + 650"
          >
            <v-chip color="#f48c3b" class="mr-3" dark>{{ index + 1 }}</v-chip>
            <div class="flex-grow-1">
              <a :href="product.url" target="_blank">{{ product.text }}</a>
            </div>
            <v-btn
              @click="orderProduct($event, product.id)"
              text
              color="primary"
              fab
              small
              outlined
            >
              <v-icon>mdi-cart-plus</v-icon>
            </v-btn>
          </div>
        </div>
      </div>

      <div>
        <div
          class="b-item"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="750"
        >
          <div class="b-item-3"></div>
          <div class="b-item-label b-item-label-3">
            Коллекция
            <div class="tb5">Защита</div>
          </div>
        </div>
        <div class="mt-6 pl-4 ">
          <div
            v-for="(product, index) in protect"
            :key="product.id"
            class="chip-item mb-2 d-flex flex-row flex-nowrap pr-5 align-center"
            data-aos="fade-up"
            data-aos-duration="600"
            :data-aos-delay="index * 100 + 900"
          >
            <v-chip color="#6b9ac1" class="mr-3" dark>{{ index + 1 }}</v-chip>
            <div class="flex-grow-1">
              <a :href="product.url" target="_blank" v-html="product.text"></a>
            </div>
            <v-btn
              @click="orderProduct($event, product.id)"
              text
              color="primary"
              fab
              small
              outlined
            >
              <v-icon>mdi-cart-plus</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CallDialogMixin from '../mixins/CallDialogMixin'
export default {
  mixins: [CallDialogMixin],
  data: () => ({
    activePic: 0,
    products: [
      {
        id: 1,
        text: 'ОСВЕЖАЮЩЕЕ МОЛОЧКО ДЛЯ ТЕЛА',
        name: 'ОСВЕЖАЮЩЕЕ МОЛОЧКО ДЛЯ ТЕЛА',
        url:
          'https://www.amway.ru/g-h-refresh-osvezhayushchee-molochko-dlya-tela/p/118104',
        type: 'refresh'
      },
      {
        id: 2,
        text: 'ОСВЕЖАЮЩЕЕ ГЕЛЬ ДЛЯ ДУША',
        name: 'ОСВЕЖАЮЩЕЕ ГЕЛЬ ДЛЯ ДУША',
        url:
          'https://www.amway.ru/g-h-refresh-osvezhayushchij-gel-dlya-dusha/p/118110',
        type: 'refresh'
      },
      {
        id: 3,
        text: 'ГЕЛЬ ДЛЯ ДУША',
        name: 'ГЕЛЬ ДЛЯ ДУША',
        url: 'https://www.amway.ru/g-h-nourish-gel-dlya-dusha/p/118107',
        type: 'nourish'
      },
      {
        id: 4,
        text: 'ЛОСЬОН ДЛЯ ТЕЛА',
        name: 'ЛОСЬОН ДЛЯ ТЕЛА',
        url: 'https://www.amway.ru/g-h-nourish-loson-dlya-tela/p/118102',
        type: 'nourish'
      },
      {
        id: 5,
        text: 'УХАЖИВАЮЩЕЕ МЫЛО',
        name: 'УХАЖИВАЮЩЕЕ МЫЛО',
        url: 'https://www.amway.ru/g-h-nourish-uhazhivayushchee-mylo/p/118113',
        type: 'nourish'
      },
      {
        id: 6,
        text: 'КРЕМ ДЛЯ РУК',
        name: 'КРЕМ ДЛЯ РУК',
        url: 'https://www.amway.ru/g-h-nourish-krem-dlya-ruk/p/118114',
        type: 'nourish'
      },
      {
        id: 7,
        text: 'Мыло',
        name: 'Мыло',
        url: 'https://www.amway.ru/g-h-protect-mylo-250-g/p/118116',
        type: 'protect'
      },
      {
        id: 8,
        text: 'ШАРИКОВЫ ДЕЗОДОРАНТ-<br />АНТИПЕРСПИРАНТ',
        name: 'ШАРИКОВЫ ДЕЗОДОРАНТ-АНТИПЕРСПИРАНТ',
        url:
          'https://www.amway.ru/g-h-protect-sharikovyj-dezodorant-antipersperant/p/118120',
        type: 'protect'
      },
      {
        id: 9,
        text: 'Дезодорант спрей',
        name: 'Дезодорант спрей',
        url: 'https://www.amway.ru/g-h-protect-dezodorant-sprej/p/120438',
        type: 'protect'
      },
      {
        id: 10,
        text: 'КОНЦЕНТРИРОВАННОЕ <br />ЖИДКОЕ МЫЛО ДлЯ РУК',
        name: 'КОНЦЕНТРИРОВАННОЕ ЖИДКОЕ МЫЛО ДЛЯ РУК',
        url:
          'https://www.amway.ru/g-h-protect-koncentrirovannoe-zhidkoe-mylo/p/118117',
        type: 'protect'
      }
    ]
  }),
  methods: {
    orderProduct(e, product) {
      e.preventDefault()
      const find = this.products.find(x => x.id === product)
      if (find) this.showCallDialog(find.name)
    },
    openUrl(url) {
      this.openAmway(url)
    },
    nextPic() {
      if (this.activePic < 2) this.activePic++
      else this.activePic = 0
    }
  },
  computed: {
    nourish() {
      return this.products.filter(x => x.type === 'nourish')
    },
    protect() {
      return this.products.filter(x => x.type === 'protect')
    },
    refresh() {
      return this.products.filter(x => x.type === 'refresh')
    }
  },
  created() {
    setInterval(this.nextPic, 5000)
  }
}
</script>
