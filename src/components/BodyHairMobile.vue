<template>
  <v-row no-gutters>
    <v-col cols="12">
      <div class="bg2-2-mobile">
        <v-row no-gutters class="h100">
          <v-col
            cols="12"
            class="d-flex flex-column align-items-start justify-center pa-12"
          >
            <div
              class="tb6-m mb-6"
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              УХОД
              <br />
              ЗА ВОЛОСАМИ
            </div>
            <img
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-delay="500"
              class="mb-6"
              :src="require('../../public/img/i5-1.webp')"
              alt=""
            />
            <div
              class="tb7 text-white"
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-delay="700"
            >
              Satinique™ от Amway это полный набор эффективных средств для
              ухода, восстановления и укладки волос любого типа.
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" class="d-flex flex-row align-center justify-center pt-10">
      <div
        class="pic-container"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="250"
      >
        <img class="mb-6" :src="require('../../public/img/i6-1.webp')" alt="" />
      </div>
    </v-col>
    <v-col cols="12" class="d-flex flex-row align-center pb-10 px-10">
      <div
        class="tb3 text-justify flex-grow-1"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="500"
      >
        Тщательно отобранные
        <strong
          >ингредиенты растительного происхождения и питательные
          вещества</strong
        >
        восстанавливают волосы независимо от их текущего состояния
      </div>
    </v-col>
    <v-col cols="12" class="d-flex flex-row align-center justify-center">
      <img
        :src="require('../../public/img/i6-2.webp')"
        alt=""
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="750"
      />
    </v-col>
    <v-col cols="12" class="px-10 pb-12">
      <div
        class="tb3 pa-0"
        style="width: 100%"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="1000"
      >
        Специально для коллекции SATINIQUE™ была разработана
        <strong>великолепная гамма ароматов</strong>
      </div>
    </v-col>
    <v-col cols="12">
      <div
        class="tb4"
        data-aos="fade"
        data-aos-duration="600"
        data-aos-delay="250"
      >
        Для достижения оптимального эффекта мы рекомендуем
        <br />
        выстроить
        <strong>
          уход за волосами в 3 ШАГА:
        </strong>
      </div>
    </v-col>
    <v-col cols="12" class="d-flex flex-row flex-wrap justify-center pb-12">
      <div class="mb-12">
        <div
          class="b-item2"
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          <div class="b-item2-1"></div>
          <div class="b-item-label2">
            <img
              class="mb-6"
              :src="require('../../public/img/i9-tm.webp')"
              alt=""
            />
            <div>УХОД</div>
            <div class="tb8">Шампуни и кондиционеры</div>
          </div>
          <div class="b-item-border"></div>
        </div>
        <div class="mt-6 pl-4">
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            :data-aos-delay="index * 100 + 300"
            v-for="(product, index) in uhod"
            :key="product.id"
            class="chip-item mb-2 d-flex flex-row flex-nowrap pr-5 align-center"
          >
            <v-chip color="#d1a1da" class="mr-3" dark>{{ index + 1 }}</v-chip>
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

      <div class="mb-12">
        <div
          class="b-item2"
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="500"
        >
          <div class="b-item2-2"></div>
          <div class="b-item-label2">
            <img
              class="mb-6"
              :src="require('../../public/img/i9-tm.webp')"
              alt=""
            />
            <div>Восстановление</div>
            <div class="tb8">Специальные средства</div>
          </div>
          <div class="b-item-border"></div>
        </div>
        <div class="mt-6 pl-4">
          <div
            v-for="(product, index) in repair"
            :key="product.id"
            class="chip-item mb-2 d-flex flex-row flex-nowrap pr-5 align-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            :data-aos-delay="index * 100 + 600"
          >
            <v-chip color="#d1a1da" class="mr-3" dark>{{ index + 1 }}</v-chip>
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

      <div>
        <div
          class="b-item2"
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="800"
        >
          <div class="b-item2-3"></div>
          <div class="b-item-label2">
            <img
              class="mb-6"
              :src="require('../../public/img/i9-tm.webp')"
              alt=""
            />
            <div>Стайлинг</div>
            <div class="tb8">Средства для укладки и фиксации</div>
          </div>
          <div class="b-item-border"></div>
        </div>
        <div class="mt-6 pl-4">
          <div
            v-for="(product, index) in style"
            :key="product.id"
            class="chip-item mb-2 d-flex flex-row flex-nowrap pr-5 align-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            :data-aos-delay="index * 100 + 900"
          >
            <v-chip color="#d1a1da" class="mr-3" dark>{{ index + 1 }}</v-chip>
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
    <v-col cols="12">
      <favorite-mobile />
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
        text: 'УВЛАЖНЕНИЕ И ПРИДАНИЕ <br />ВОЛОСАМ ГЛАДКОСТИ',
        name: 'УВЛАЖНЕНИЕ И ПРИДАНИЕ ВОЛОСАМ ГЛАДКОСТИ',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'uhod'
      },
      {
        id: 2,
        text: 'ВОССТАНОВЛЕНИЕ <br />ОКРАШЕННЫХ ВОЛОС',
        name: 'ВОССТАНОВЛЕНИЕ ОКРАШЕННЫХ ВОЛОС',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'uhod'
      },
      {
        id: 3,
        text: 'ДОПОЛНИТЕЛЬНЫЙ ОБЪЕМ',
        name: 'ДОПОЛНИТЕЛЬНЫЙ ОБЪЕМ',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'uhod'
      },
      {
        id: 4,
        text: 'ПРЕПЯТСТВУЕТ <br />ВЫПАДЕНИЮ ВОЛОС',
        name: 'ПРЕПЯТСТВУЕТ ВЫПАДЕНИЮ ВОЛОС',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'uhod'
      },
      {
        id: 5,
        text: 'ПРОТИВ ПЕРХОТИ',
        name: 'ПРОТИВ ПЕРХОТИ',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'uhod'
      },
      {
        id: 6,
        text: 'ИНТЕНСИВНОЕ ВОССТАНОВЛЕНИЕ',
        name: 'ИНТЕНСИВНОЕ ВОССТАНОВЛЕНИЕ',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'repair'
      },
      {
        id: 7,
        text: 'ЗАЩИТА ОТ УФ-ЛУЧЕЙ <br />И ТЕРМОЗАЩИТА',
        name: 'ЗАЩИТА ОТ УФ-ЛУЧЕЙ И ТЕРМОЗАЩИТА',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'repair'
      },
      {
        id: 8,
        text: 'УХОД ЗА КОНЧИКАМИ ВОЛОС',
        name: 'УХОД ЗА КОНЧИКАМИ ВОЛОС',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'repair'
      },
      {
        id: 9,
        text: 'УЛУЧШЕНИЕ СОСТОЯНИЯ <br />КОЖИ ГОЛОВЫ',
        name: 'УЛУЧШЕНИЕ СОСТОЯНИЯ КОЖИ ГОЛОВЫ',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'repair'
      },
      {
        id: 10,
        text: 'БРИЛЛИАНТОВЫЙ БЛЕСК',
        name: 'БРИЛЛИАНТОВЫЙ БЛЕСК',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'style'
      },
      {
        id: 11,
        text: 'СТРУКТУРА И УКРОЩЕНИЕ',
        name: 'СТРУКТУРА И УКРОЩЕНИЕ',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'style'
      },
      {
        id: 12,
        text: 'ТЕРМОЗАЩИТА И РАЗГЛАЖИВАНИЕ',
        name: 'ТЕРМОЗАЩИТА И РАЗГЛАЖИВАНИЕ',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'style'
      },
      {
        id: 13,
        text: 'УПРУГИЕ ЛОКАНЫ И УВЛАЖНЕНИЕ',
        name: 'УПРУГИЕ ЛОКАНЫ И УВЛАЖНЕНИЕ',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'style'
      },
      {
        id: 14,
        text: 'ОБЪЁМ И УПРУГОСТЬ',
        name: 'ОБЪЁМ И УПРУГОСТЬ',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'style'
      },
      {
        id: 15,
        text: 'ФИКСАЦИЯ УКЛАДКИ',
        name: 'ФИКСАЦИЯ УКЛАДКИ',
        url: 'https://www.amway.ru/satinique/c/brand_900',
        type: 'style'
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
    repair() {
      return this.products.filter(x => x.type === 'repair')
    },
    style() {
      return this.products.filter(x => x.type === 'style')
    },
    uhod() {
      return this.products.filter(x => x.type === 'uhod')
    }
  },
  created() {
    setInterval(this.nextPic, 5000)
  }
}
</script>
