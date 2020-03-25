<template>
  <v-row no-gutters>
    <!-- СРЕДСТВА ДЛЯ МЫТЬЯ ПОСУДЫ -->
    <v-col cols="12">
      <div class="hheader1">СРЕДСТВА ДЛЯ МЫТЬЯ ПОСУДЫ</div>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-img
            height="490"
            :src="require('../../public/img/bg8-1.webp')"
            position="center top"
          >
            <div class="pt-12 pl-12" data-aos="fade-up" data-aos-duration="700">
              <div class="th8">
                <strong>МАШИННАЯ</strong>
                <br />
                МОЙКА
              </div>
            </div>
          </v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            height="490"
            :src="require('../../public/img/bg8-2.webp')"
            position="center top"
          >
            <div class="pt-12 pl-12" data-aos="fade-up" data-aos-duration="700">
              <div class="th8">
                <strong>РУЧНАЯ</strong>
                <br />
                МОЙКА
              </div>
            </div>
          </v-img>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" md="6" class="d-flex flex-column">
          <div class="th13">
            DISH DROPS™ Таблетки для посудомоечной машины
          </div>
          <div class="th14">
            <v-row no-gutters class="pa-12">
              <v-col
                cols="12"
                md="6"
                class="d-flex align-center justify-center"
              >
                <img
                  :src="require('../../public/img/h-item-109867.webp')"
                  data-aos="zoom-out"
                  data-aos-duration="700"
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="d-flex flex-column align-center justify-center"
              >
                <div class="th4">
                  <strong>УДОБНО</strong> <br />
                  Таблетки в индивидуальных водорастворимых упаковках
                </div>
                <div class="th4">
                  <strong>ЭФФЕКТИВНО</strong> <br />
                  Справляются с жиром и засохшими остатками пищи даже в жесткой
                  воде. Не оставляют мутный налет на стекле. Содержат
                  ополаскиватель
                </div>
                <div class="th4">
                  <strong>БЕЗОПАСНО</strong> <br />
                  Не содержат фосфаты. Безопасны для септиков
                </div>
              </v-col>
              <v-col cols="12" md="12">
                <div
                  class="d-flex justify-self-end flex-row flex-wrap justify-space-between px-10 w100"
                >
                  <v-btn
                    large
                    color="teal"
                    outlined
                    @click="
                      openUrl(
                        'https://www.amway.ru/tabletki-dlya-posudomoechnyh-mashin-dish-drops/p/109867'
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
                    @click="orderProduct($event, 1)"
                  >
                    <v-icon class="mr-3">mdi-basket</v-icon>
                    Заказать
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column">
          <div class="th15">
            DISH DROPS™ Концентрированная жидкость для мытья посуды
          </div>
          <div class="th16">
            <v-row no-gutters class="pa-12">
              <v-col cols="12" md="6" class="text-center">
                <img
                  :src="require('../../public/img/h-item-110488.webp')"
                  data-aos="zoom-out"
                  data-aos-duration="700"
                  data-aos-delay="400"
                />
                <div class="bp-bottles" style="width: 120px">
                  <div
                    v-for="i in 8"
                    :key="i"
                    data-aos="zoom-in"
                    data-aos-duration="700"
                    :data-aos-delay="i * 200"
                    class="bp-bottle-item-dish js_bottleItem bp-bottle-item-visible"
                    id="unique_id_50"
                  ></div>
                  <div class="th17">8 флаконов готовой жидкости</div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="th4">
                  <strong style="color: white">ЭКОНОМИЧНО</strong> <br />
                  Из 1 л вы получаете 8 флаконов по 500 мл* готовой жидкости для
                  мытья посуды
                </div>
                <div class="th4">
                  <strong style="color: white">ЭФФЕКТИВНО</strong> <br />
                  Эффективна в холодной воде
                </div>
                <div class="th4">
                  <strong style="color: white">БЕЗОПАСНО</strong> <br />
                  Полностью смывается
                </div>
              </v-col>
              <v-col cols="12" md="12">
                <div
                  class="d-flex justify-self-end flex-row flex-wrap justify-space-between px-10 w100"
                >
                  <v-btn
                    large
                    color="teal"
                    outlined
                    @click="openUrl('https://www.amway.ru/p/110488')"
                  >
                    <v-icon class="mr-3">mdi-web</v-icon>
                    Подробнее
                  </v-btn>
                  <v-btn
                    dark
                    large
                    color="success"
                    @click="orderProduct($event, 2)"
                  >
                    <v-icon class="mr-3">mdi-basket</v-icon>
                    Заказать
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
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
      { id: 1, text: 'DISH DROPS™ Таблетки для посудомоечной машины' },
      { id: 2, text: 'DISH DROPS™ Концентрированная жидкость для мытья посуды' }
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
