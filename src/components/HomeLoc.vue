<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-img :src="require('../../public/img/bg2.webp')" height="500">
        <v-row class="h100" no-gutters flex align="stretch">
          <v-col
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="100"
            md="4"
            cols="12"
            class="d-flex flex-column justify-end pl-12 pb-12"
          >
            <div class="th1">С Amway home™</div>
            <div class="th2">экономьте</div>
            <div class="th1">деньги, время и силы!</div>
          </v-col>
          <v-col md="4" cols="12" class="d-flex align-end justify-center">
            <img :src="require('../../public/img/s1.webp')" />
          </v-col>
          <v-col md="4" cols="12">
            <div class="h100 d-flex flex-column justify-center align-start">
              <div
                class="bp-money"
                data-aos="zoom-in-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Экономично
              </div>
              <div
                class="bp-like"
                data-aos="zoom-in-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Эффективно
              </div>
              <div
                class="bp-leaf"
                data-aos="zoom-in-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                Безопасно
              </div>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-col>
    <v-col md="6" offset-md="1" cols="12">
      <div class="d-flex flex-row flex-nowrap py-10">
        <img
          data-aos="fade"
          data-aos-duration="500"
          data-aos-delay="200"
          class="align-self-center mx-10"
          :src="require('../../public/img/bioquest.webp')"
        />
        <div
          class=""
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <div class="th3">
            BIOQUEST FORMULA — ФИЛОСОФИЯ БРЕНДА <br />
            AMWAY HOME™
          </div>
          <div>
            <div class="th4">
              эффективные концентрированные <br />
              средства
            </div>
            <div class="th4">
              прошли дерматологическое <br />
              тестирование
            </div>
            <div class="th4">биоразлагаемые</div>
          </div>
        </div>
      </div>
    </v-col>
    <v-col md="4" cols="12">
      <div class="d-flex flex-row flex-nowrap align-center h100">
        <img
          data-aos="fade"
          data-aos-duration="500"
          data-aos-delay="200"
          class="align-self-center mx-10"
          :src="require('../../public/img/safer.webp')"
        />
        <div
          class="th5"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <strong>
            Это новый знак программы Агентства по охране окружающей среды США,
          </strong>
          который размещается на упаковках продуктов, отвечающих высоким
          требованиям стандартов безопасности.
        </div>
      </div>
    </v-col>
    <v-col md="1" cols="12"></v-col>
    <v-col cols="12">
      <favorite />
    </v-col>
    <!-- СРЕДСТВА ДЛЯ УБОРКИ -->
    <v-col cols="12">
      <div class="hheader1">СРЕДСТВА ДЛЯ УБОРКИ</div>
    </v-col>
    <v-col cols="12">
      <v-img
        height="400"
        :src="require('../../public/img/bg5.webp')"
        position="center -30px"
      ></v-img>
    </v-col>
    <v-col cols="12">
      <div class="th6 text-center w100">
        Многофункциональное чистящее средство L.O.C.
      </div>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters class="pb-12">
        <v-col md="4" offset-md="2" cols="12" class="pt-5">
          <div class="th4">
            <strong>ЭКОНОМИЧНО</strong> <br />
            Из 1 л сильно концентрированного состава вы получаете 20 флаконов
            универсального средства для уборки и очистки поверхностей
          </div>
          <div class="th4">
            <strong>ЭФФЕКТИВНО</strong> <br />
            Эффективно удаляет все виды застарелой грязи и копоти
          </div>
          <div class="th4">
            <strong>БЕЗОПАСНО</strong> <br />
            Безопасно для большинства бытовых поверхностей
          </div>
          <div
            class="d-flex flex-row flex-wrap justify-space-between px-10 w100"
          >
            <v-btn
              large
              color="teal"
              outlined
              @click="openUrl('https://www.amway.ru/p/0001')"
            >
              <v-icon class="mr-3">mdi-web</v-icon>
              Подробнее
            </v-btn>
            <v-btn dark large color="success" @click="orderProduct($event, 1)">
              <v-icon class="mr-3">mdi-basket</v-icon>
              Заказать
            </v-btn>
          </div>
        </v-col>
        <v-col md="6" cols="12" class="pl-12">
          <div>
            <img :src="require('../../public/img/h-item-loc.webp')" alt="" />
            <div class="bp-bottles">
              <div
                data-aos="fade-down"
                data-aos-duration="500"
                :data-aos-delay="i * 150"
                v-for="i in 20"
                :key="i"
                class="bp-bottle-item js_bottleItem bp-bottle-item-visible"
                id="unique_id_17"
              ></div>
              <div class="th7">
                20 флаконов готового универсального средства для уборки
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <div class="th6 text-center w100">
        Жидкость для мытья стёкол L.O.C.
      </div>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters class="pb-12">
        <v-col md="4" offset-md="2" cols="12" class="pt-5">
          <div class="th4">
            <strong>ЭКОНОМИЧНО</strong> <br />
            Из 1 л сильно концентрированного состава вы получаете 4 флакона
            жидкости для мытья окон
          </div>
          <div class="th4">
            <strong>ЭФФЕКТИВНО</strong> <br />
            Эффективно обезжиривает стеклянные поверхности, удаляя следы от
            пальцев
          </div>
          <div
            class="d-flex flex-row flex-wrap justify-space-between px-10 w100"
          >
            <v-btn
              large
              color="teal"
              outlined
              @click="openUrl('https://www.amway.ru/p/117080')"
            >
              <v-icon class="mr-3">mdi-web</v-icon>
              Подробнее
            </v-btn>
            <v-btn dark large color="success" @click="orderProduct($event, 2)">
              <v-icon class="mr-3">mdi-basket</v-icon>
              Заказать
            </v-btn>
          </div>
        </v-col>
        <v-col md="6" cols="12" class="pl-12">
          <div>
            <img
              :src="require('../../public/img/h-item-loc-glass.webp')"
              alt=""
            />
            <div class="bp-bottles">
              <div
                data-aos="fade-down"
                data-aos-duration="500"
                :data-aos-delay="i * 150"
                v-for="i in 4"
                :key="i"
                class="bp-bottle-item-glass js_bottleItem bp-bottle-item-visible"
                id="unique_id_40"
              ></div>
              <div class="th7">
                Содержит 4 флакона готового средства
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-img
            height="430"
            :src="require('../../public/img/bg7-1.webp')"
            position="center top"
          >
            <div class="pt-12 pl-12">
              <div class="th8">
                <strong>КУХНЯ</strong>
                <br />
                САМОЕ ЛЮБИМОе
                <br />
                МЕСТО В ДОМЕ
              </div>
            </div>
          </v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            height="430"
            :src="require('../../public/img/bg7-2.webp')"
            position="center -30px"
          >
            <div class="d-flex flex-row justify-space-around align-center h100">
              <div class="h-item text-center">
                <img
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="250"
                  :src="require('../../public/img/h-item-wash-kitchen.webp')"
                />
                <div class="mt-8 mb-4">
                  <v-btn
                    fab
                    color="green"
                    class="mr-4"
                    dark
                    @click="orderProduct($event, 3)"
                  >
                    <v-icon>mdi-cart-plus</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    color="green accent-4"
                    dark
                    outlined
                    @click="openAmway('https://www.amway.ru/p/117079')"
                  >
                    <v-icon>mdi-web</v-icon>
                  </v-btn>
                </div>
                <div class="th9 text-left">
                  Моющее средство для кухни
                </div>
              </div>
              <div class="h-item text-center">
                <img
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="450"
                  style="margin-top: 30px"
                  :src="require('../../public/img/h-item-dezinf.webp')"
                />
                <div class="mt-8 mb-4">
                  <v-btn
                    fab
                    color="green"
                    class="mr-4"
                    dark
                    @click="orderProduct($event, 4)"
                  >
                    <v-icon>mdi-cart-plus</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    color="green accent-4"
                    dark
                    outlined
                    @click="openAmway('https://www.amway.ru/p/284377')"
                  >
                    <v-icon>mdi-web</v-icon>
                  </v-btn>
                </div>
                <div class="th9 text-left">
                  Универсальное дезинфицирующее чистящее средство
                </div>
              </div>
            </div>
          </v-img>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-img
            height="430"
            :src="require('../../public/img/bg7-3.webp')"
            position="center bottom"
          >
            <div class="d-flex flex-row justify-space-around align-center h100">
              <div class="h-item text-center">
                <img
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="250"
                  style="margin-top: 70px;"
                  :src="require('../../public/img/h-item-luga.webp')"
                />
                <div class="mt-8 mb-4">
                  <v-btn
                    fab
                    color="green"
                    class="mr-4"
                    dark
                    @click="orderProduct($event, 5)"
                  >
                    <v-icon>mdi-cart-plus</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    color="green accent-4"
                    dark
                    outlined
                    @click="openAmway('https://www.amway.ru/p/8193')"
                  >
                    <v-icon>mdi-web</v-icon>
                  </v-btn>
                </div>
                <div class="th9 text-left">
                  Освежитель воздуха «Зеленые луга»
                </div>
              </div>
              <div class="h-item text-center">
                <img
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="450"
                  style="margin-top: 70px;"
                  :src="require('../../public/img/h-item-bath-clean.webp')"
                />
                <div class="mt-8 mb-4">
                  <v-btn
                    fab
                    color="green"
                    class="mr-4"
                    dark
                    @click="orderProduct($event, 6)"
                  >
                    <v-icon>mdi-cart-plus</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    color="green accent-4"
                    dark
                    outlined
                    @click="openAmway('https://www.amway.ru/p/117078')"
                  >
                    <v-icon>mdi-web</v-icon>
                  </v-btn>
                </div>
                <div class="th9 text-left">
                  Чистящее средство для ванных комнат
                </div>
              </div>
              <div class="h-item text-center">
                <img
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="650"
                  style="margin-top: 70px;"
                  :src="require('../../public/img/h-item-for-unitaz.webp')"
                />
                <div class="mt-8 mb-4">
                  <v-btn
                    fab
                    color="green"
                    class="mr-4"
                    dark
                    @click="orderProduct($event, 7)"
                  >
                    <v-icon>mdi-cart-plus</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    color="green accent-4"
                    dark
                    outlined
                    @click="openAmway('https://www.amway.ru/p/109864')"
                  >
                    <v-icon>mdi-web</v-icon>
                  </v-btn>
                </div>
                <div class="th9 text-left">
                  Чистящее средство для унитазов
                </div>
              </div>
            </div>
          </v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            height="430"
            :src="require('../../public/img/bg7-4.webp')"
            position="center top"
          >
            <div class="pt-12 pl-12">
              <div class="th8">
                <strong>ВАННАЯ</strong>
                <br />
                <strong>И ТУАЛЕТ</strong>
                <br />
                МЕСТО, ГДЕ ЖИВЕТ
                <br />
                ЧИСТОТА
              </div>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CallDialogMixin from '../mixins/CallDialogMixin'
export default {
  mixins: [CallDialogMixin],
  data: () => ({
    products: [
      { id: 1, text: 'L.O.C.™ Многофункциональное чистящее средство' },
      { id: 2, text: 'L.O.C.™ Жидкость для мытья стекол' },
      { id: 3, text: 'Моющее средство для кухни' },
      { id: 4, text: 'Универсальное дезинфицирующее чистящее средство' },
      { id: 5, text: 'Концентрированный освежитель воздуха «Зеленые луга»' },
      { id: 6, text: 'Чистящее средство для ванных комнат' },
      { id: 7, text: 'Чистящее средство для унитазов' }
    ]
  }),
  methods: {
    openUrl(url) {
      this.openAmway(url)
    },
    orderProduct(e, product) {
      e.preventDefault()
      const find = this.products.find(x => x.id === product)
      if (find) this.showCallDialog(find.text)
    }
  }
}
</script>

<style></style>
