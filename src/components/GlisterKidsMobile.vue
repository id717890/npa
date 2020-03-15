<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-img :src="require('../../public/img/bg15_mobile.jpg')">
        <div class="d-flex flex-row h100 w100 text-left">
          <div
            class="justify-center d-flex flex-column  align-center px-12"
            style="flex: 1 1 100%"
          >
            <div
              class="t4"
              data-aos="fade-right"
              data-aos-duration="2000"
              style="text-shadow: 2px 2px 4px black, 0 0 1em black;"
            >
              GLISTER™
              <br />
              для детей
            </div>
            <div
              class="py-4"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <img :src="require('../../public/img/logo-glister-kids.png')" />
            </div>
            <div
              class="t5 text-white text-justify"
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="850"
              style="text-shadow: 2px 2px 4px black, 0 0 1em black;"
            >
              Коллекция по уходу за полостью рта <b>Glister™ Kids</b> создана с
              учетом особенностей растущих зубов и десен от 2 до 6 лет. Помогает
              приучить детей регулярно чистить зубы с раннего возраста, чтобы на
              долгие годы сохранить хорошее состояние полости рта.
            </div>
          </div>
        </div>
      </v-img>
    </v-col>
    <v-col cols="12 pt-10 pb-6">
      <div class="t6 text-center">КРЕПКИЕ ЗУБКИ С GLISTER™ KIDS</div>
      <div class="t7  text-center">
        <b>Glister™ Kids</b> – линейка средств по уходу за полостью рта
        специально разработана для детей от 2-х лет.
      </div>
    </v-col>
    <v-col cols="12" class="text-center">
      <img
        :src="require('../../public/img/m15-2.jpg')"
        data-aos="flip-right"
        data-aos-duration="2000"
      />
      <div class="t8 px-12 text-justify">
        Мягкая формула легко <b>очищает зубы не повреждая эмаль</b>. Обладает
        приятным клубничным вкусом. Не содержит сахара, бисфенола А, ПВХ и
        фталатов.
      </div>
    </v-col>
    <v-col cols="12" class="text-center pt-6">
      <img
        :src="require('../../public/img/m15-3.jpg')"
        data-aos="flip-down"
        data-aos-duration="2000"
      />
      <div class="t8 px-12 text-justify">
        Особая форма зубных щеток с мягкими щетинками предназначена для ухода за
        растущими зубами. Яркие цвета превращают чистку зубов в увлекательное
        занятие.
      </div>
    </v-col>
    <v-col cols="12" class="text-center">
      <img
        class="mt-6"
        :src="require('../../public/img/logo-stomatology.jpg')"
        data-aos="flip-left"
        data-aos-duration="2000"
      />
      <div class="t8 px-12 text-justify">
        Продукция Glister™ Kids одобрена Стоматологической Ассоциацией России.
      </div>
    </v-col>
    <v-col cols="12" class="text-center pt-12">
      <div>
        <img
          class="schetka-img"
          :src="require('../../public/img/g-item-schetka-1.jpg')"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        />
        <img
          class="schetka-img"
          :src="require('../../public/img/g-item-schetka-2.jpg')"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        />
        <img
          class="schetka-img"
          :src="require('../../public/img/g-item-schetka-3.jpg')"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="600"
        />
        <img
          class="schetka-img"
          :src="require('../../public/img/g-item-schetka-4.jpg')"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="700"
        />
      </div>
      <div class="t8 px-10 pb-6 text-justify" style="">
        Мягкие щетинки эффективно очищают зубы, не повреждая нежную поверхность
        десен. Особая расцветка щетинок помогает отмерить нужное количество
        зубной пасты, а яркий дизайн щеток помогает заинтересовать детей чисткой
        зубов, приучая их к правильному уходу за полостью рта. Не содержит
        бисфенола А, ПВХ и фталатов.
      </div>
      <div class="d-flex flex-row flex-wrap justify-space-between px-10 pb-10">
        <v-btn
          large
          color="teal"
          outlined
          class="w100 mb-3"
          @click="
            openAmway(
              'https://www.amway.ru/glister-kids-zubnye-shchetki/p/120522'
            )
          "
        >
          <v-icon class="mr-3">mdi-web</v-icon>
          Подробнее
        </v-btn>
        <v-btn
          dark
          large
          color="success"
          @click="showCallDialog($event, 1)"
          class="w100 mb-3"
        >
          <v-icon class="mr-3">mdi-basket</v-icon>
          Заказать
        </v-btn>
      </div>
    </v-col>
    <v-col cols="12" class="text-center">
      <div>
        <img
          class="schetka-img"
          :src="require('../../public/img/g-item-pasta-kids.webp')"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="900"
        />
      </div>
      <div class="t8 px-10 text-justify pb-2">
        <p>
          Фторсодержащая паста зубная паста Glister™ Kids создана на основе
          эксклюзивной формулы REMINACT™ способствующей восстановлению баланса
          минералов.
        </p>
        <p>
          Гелевая формула с содержанием фтора очищает зубы, предотвращает
          развитие кариеса, защищает эмаль. Обладает приятным клубничным вкусом.
          Не содержит сахара.
        </p>
      </div>
      <div class="d-flex flex-row flex-wrap justify-space-between px-10 pb-10">
        <v-btn
          large
          color="teal"
          outlined
          class="w100 mb-3"
          @click="
            openAmway(
              'https://www.amway.ru/glister-kids-detskaya-zubnaya-pasta/p/120519'
            )
          "
        >
          <v-icon class="mr-3">mdi-web</v-icon>
          Подробнее
        </v-btn>
        <v-btn
          dark
          large
          color="success"
          @click="showCallDialog($event, 2)"
          class="w100 mb-3"
        >
          <v-icon class="mr-3">mdi-basket</v-icon>
          Заказать
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CallDialog from './Dialog/CallDialog'
const settings = {
  height: 'auto',
  maxWidth: 430,
  adaptive: true,
  transition: 'nice-modal-fade',
  clickToClose: true
}
export default {
  data: () => ({
    products: [
      { id: 1, text: 'Glister™ Kids Зубные щетки' },
      { id: 2, text: 'Glister™ Kids Детская зубная паста' }
    ]
  }),
  methods: {
    openAmway(url) {
      window.open(url, '_blank')
    },
    showCallDialog(e, product) {
      e.preventDefault()
      let result = ''
      const find = this.products.find(x => x.id === product)
      if (find) result = find.text + '\r\n'
      this.$modal.show(CallDialog, { result: result }, settings)
    }
  }
}
</script>

<style></style>
