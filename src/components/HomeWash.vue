<template>
  <v-row no-gutters>
    <!-- СРЕДСТВА ДЛЯ СТИРКИ -->
    <v-col cols="12">
      <div class="hheader1">СРЕДСТВА ДЛЯ СТИРКИ</div>
    </v-col>
    <v-col cols="12">
      <v-img
        height="400"
        :src="require('../../public/img/bg3.webp')"
        position="center -30px"
      ></v-img>
    </v-col>
    <v-col md="10" offset-md="2" cols="12">
      <div class="th10 pl-12">
        <strong>
          Представляем вашему вниманию
        </strong>
        <br />
        Эффективные и безопасные средства для стирки всех типов тканей
      </div>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="2"
          offset-md="2"
          class="d-flex flex-column align-center"
        >
          <img :src="require('../../public/img/advantage1.webp')" alt="" />
          <div class="th11 text-center">
            Эффективны даже в холодной воде
          </div>
        </v-col>
        <v-col cols="12" md="2" class="d-flex flex-column align-center">
          <img :src="require('../../public/img/advantage2.webp')" alt="" />
          <div class="th11 text-center">
            Бережно отстирывают, сохраняя цвет и структуру тканей
          </div>
        </v-col>
        <v-col cols="12" md="2" class="d-flex flex-column align-center">
          <img :src="require('../../public/img/advantage3.webp')" alt="" />
          <div class="th11 text-center">
            Быстро растворяются и легко выполаскиваются
          </div>
        </v-col>
        <v-col cols="12" md="2" class="d-flex flex-column align-center">
          <img :src="require('../../public/img/advantage4.webp')" alt="" />
          <div class="th11 text-center">
            Экономят ваше время и деньги
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style></style>
