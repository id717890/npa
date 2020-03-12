<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-img :src="require('../../public/img/bg15.jpg')">
        <div class="d-flex flex-row h100 w100 text-left">
          <div
            class="justify-center d-flex flex-column  align-start px-12 ml-12"
            style="flex: 1 1 50%"
          >
            <div class="t4" data-aos="fade-right" data-aos-duration="2000">
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
              class="t5"
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="850"
            >
              Коллекция по уходу за полостью рта <b>Glister™ Kids</b> создана с
              учетом особенностей растущих зубов и десен от 2 до 6 лет. Помогает
              приучить детей регулярно чистить зубы с раннего возраста, чтобы на
              долгие годы сохранить хорошее состояние полости рта.
            </div>
          </div>
          <div class="" style="flex: 1 1  50%"></div>
        </div>
      </v-img>
    </v-col>
    <v-col cols="12">
      <div class="t6 text-center">КРЕПКИЕ ЗУБКИ С GLISTER™ KIDS</div>
      <div class="t7  text-center">
        <b>Glister™ Kids</b> – линейка средств по уходу за полостью рта
        специально разработана для детей от 2-х лет.
      </div>
    </v-col>
    <v-col lg="3" offset-lg="2" sm="12" cols="12" class="text-center">
      <img
        :src="require('../../public/img/m15-2.jpg')"
        data-aos="flip-right"
        data-aos-duration="2000"
      />
      <div class="t8">
        Мягкая формула легко <b>очищает зубы не повреждая эмаль</b>. Обладает
        приятным клубничным вкусом. Не содержит сахара, бисфенола А, ПВХ и
        фталатов.
      </div>
    </v-col>
    <v-col lg="3" sm="12" cols="12" class="text-center">
      <img
        :src="require('../../public/img/m15-3.jpg')"
        data-aos="flip-down"
        data-aos-duration="2000"
      />
      <div class="t8">
        Особая форма зубных щеток с мягкими щетинками предназначена для ухода за
        растущими зубами. Яркие цвета превращают чистку зубов в увлекательное
        занятие.
      </div>
    </v-col>
    <v-col lg="3" sm="12" cols="12" class="text-center">
      <img
        class="mt-6"
        :src="require('../../public/img/logo-stomatology.jpg')"
        data-aos="flip-left"
        data-aos-duration="2000"
      />
      <div class="t8">
        Продукция Glister™ Kids одобрена Стоматологической Ассоциацией России.
      </div>
    </v-col>
    <v-col cols="12" lg="4" offset-lg="2" sm="12" class="text-center">
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
      <div class="t8 px-10" style="min-height: 250px">
        Мягкие щетинки эффективно очищают зубы, не повреждая нежную поверхность
        десен. Особая расцветка щетинок помогает отмерить нужное количество
        зубной пасты, а яркий дизайн щеток помогает заинтересовать детей чисткой
        зубов, приучая их к правильному уходу за полостью рта. Не содержит
        бисфенола А, ПВХ и фталатов.
      </div>
      <div class="d-flex flex-row flex-wrap justify-space-between px-10">
        <v-btn
          large
          color="teal"
          outlined
          @click="
            openAmway(
              'https://www.amway.ru/glister-kids-zubnye-shchetki/p/120522'
            )
          "
        >
          <v-icon class="mr-3">mdi-web</v-icon>
          Подробнее
        </v-btn>
        <v-btn dark large color="success">
          <v-icon class="mr-3">mdi-basket</v-icon>
          Заказать
        </v-btn>
      </div>
    </v-col>
    <v-col cols="12" lg="4" sm="12" class="text-center">
      <div>
        <img
          class="schetka-img"
          :src="require('../../public/img/g-item-pasta-kids.jpg')"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="900"
        />
      </div>
      <div class="t8 px-10" style="min-height: 250px">
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
      <div class="d-flex flex-row flex-wrap justify-space-between px-10">
        <v-btn
          large
          color="teal"
          outlined
          @click="
            openAmway(
              'https://www.amway.ru/glister-kids-detskaya-zubnaya-pasta/p/120519'
            )
          "
        >
          <v-icon class="mr-3">mdi-web</v-icon>
          Подробнее
        </v-btn>
        <v-btn dark large color="success">
          <v-icon class="mr-3">mdi-basket</v-icon>
          Заказать
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    openAmway(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style></style>
