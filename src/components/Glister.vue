<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-img :src="require('../../public/img/bg10.jpg')">
        <header class="d-flex flex-row h100 w100 text-left">
          <div
            class="justify-center d-flex flex-column  align-start px-12 ml-12"
            style="flex: 1 1 50%"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div class="t1">
              Уход
              <br />
              за&nbsp;зубами
            </div>
            <div class="py-4">
              <img :src="require('../../public/img/logo-glister.png')" />
            </div>
            <div class="t2">
              Glister™ от&nbsp;Amway это уникальный комплексный набор
              эффективных, универсальных средств по&nbsp;уходу
              за&nbsp;полостью&nbsp;рта.
            </div>
          </div>
          <div class="" style="flex: 1 1  50%"></div>
        </header>
      </v-img>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters class="py-12">
        <v-col lg="4" offset-lg="2" md="6" sm="12" cols="12">
          <div class="d-flex flex-row flex-nowrap align-center justify-center">
            <div>
              <img
                :src="require('../../public/img/logo-50-years.jpg')"
                alt=""
              />
            </div>
            <div class="pl-10">
              <span style="font-weight: 500">Glister™ дарит улыбку людям</span>
              <br />
              уже более 50 лет во всём мире.
            </div>
          </div>
        </v-col>
        <v-col lg="4" md="6" sm="12" cols="12">
          <div class="d-flex flex-row flex-nowrap align-center justify-center">
            <div>
              <img
                :src="require('../../public/img/logo-stomatology.jpg')"
                alt=""
              />
            </div>
            <div class="pl-10">
              <span style="font-weight: 500">Одобрено </span>
              Стоматологической Ассоциацией России
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <div class="bg1" style="min-height: 500px">
        <v-row class="py-12" no-gutters>
          <v-col
            cols="12"
            md="2"
            offset-md="2"
            sm="12"
            class="d-flex flex-column justify-content-around"
          >
            <div
              class="d-flex flex-row flex-nowrap align-center cursor"
              @click="scrollTo($event, 'schetky')"
            >
              <v-btn class="mx-2" fab dark color="success">
                <v-icon dark>mdi-check-outline</v-icon>
              </v-btn>
              <div style="font-size: 18px">
                Универсальные
                <br />
                <span style="text-transform: uppercase">зубные щетки</span>
              </div>
            </div>
            <div
              class="d-flex flex-row flex-nowrap align-center cursor"
              @click="scrollTo($event, 'pasta')"
            >
              <v-btn class="mx-2" fab dark color="success">
                <v-icon dark>mdi-check-outline</v-icon>
              </v-btn>
              <div style="font-size: 18px">
                Многофункциональная
                <br />
                <span style="text-transform: uppercase">Зубная паста</span>
              </div>
            </div>
            <div
              class="d-flex flex-row flex-nowrap align-center cursor"
              @click="scrollTo($event, 'nit')"
            >
              <v-btn class="mx-2" fab dark color="success">
                <v-icon dark>mdi-check-outline</v-icon>
              </v-btn>
              <div style="font-size: 18px">
                <span style="text-transform: uppercase">Зубная нить</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" sm="12" class="text-center">
            <img
              :src="require('../../public/img/glitster-products.png')"
              alt=""
            />
          </v-col>
          <v-col
            cols="12"
            md="4"
            sm="12"
            class="d-flex flex-column justify-content-around"
          >
            <div
              class="d-flex flex-row flex-nowrap align-center cursor"
              @click="scrollTo($event, 'sprey')"
            >
              <v-btn class="mx-2" fab dark color="success">
                <v-icon dark>mdi-check-outline</v-icon>
              </v-btn>
              <div style="font-size: 18px">
                <span style="text-transform: uppercase">Спрей-освежитель</span>
                <br />
                <span style="text-transform: uppercase">полости рта</span>
                <br />
                <span>с&nbsp;запахом мяты</span>
              </div>
            </div>
            <div
              class="d-flex flex-row flex-nowrap align-center cursor"
              @click="scrollTo($event, 'concentrat')"
            >
              <v-btn class="mx-2" fab dark color="success">
                <v-icon dark>mdi-check-outline</v-icon>
              </v-btn>
              <div style="font-size: 18px">
                Концентрированная
                <br />
                <span style="text-transform: uppercase">жидкость для</span>
                <br />
                <span style="text-transform: uppercase">полоскания</span>
                <br />
                <span style="text-transform: uppercase">полости рта</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" ref="schetky">
      <div class="glister-item">
        <v-row no-gutters>
          <v-col cols="12" lg="4" offset-lg="2" class="text-center pt-5">
            <img
              :src="require('../../public/img/g-item-schetky.jpg')"
              alt=""
              data-aos="flip-right"
              data-aos-duration="800"
              data-aos-delay="300"
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            class="d-flex flex-column align-start justify-center"
          >
            <img :src="require('../../public/img/logo-glister-sm.png')" />
            <div class="glister-item-header mt-0 mb-7">
              Универсальные ЗУБНЫЕ ЩЕТКИ
            </div>
            <div class="t3">
              Уникальная конусообразная головка позволяет качественно прочистить
              труднодоступные места и межзубные промежутки.
            </div>
            <div class="t3">
              Щетинки средней жесткости отлично чистят зубы и не повреждают
              десны.
            </div>
            <div class="t3">
              Эргономичная форма ручки удобна, не скользит и обеспечивает полный
              контроль за чисткой зубов.
            </div>
            <div
              class="d-flex flex-row flex-wrap justify-space-between px-10 w100"
            >
              <v-btn
                large
                color="teal"
                outlined
                @click="openAmway('https://www.amway.ru/p/100957')"
              >
                <v-icon class="mr-3">mdi-web</v-icon>
                Подробнее
              </v-btn>
              <v-btn
                dark
                large
                color="success"
                @click="showCallDialog($event, 1)"
              >
                <v-icon class="mr-3">mdi-basket</v-icon>
                Заказать
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" ref="pasta">
      <div class="glister-item">
        <v-row no-gutters>
          <v-col cols="12" lg="4" class="text-center order-lg-2">
            <img
              :src="require('../../public/img/g-item-pasta.jpg')"
              alt=""
              data-aos="flip-right"
              data-aos-duration="800"
              data-aos-delay="300"
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            offset-lg="2"
            class="d-flex flex-column align-start justify-center order-lg-1"
          >
            <img :src="require('../../public/img/logo-glister-sm.png')" />
            <div class="glister-item-header mt-0 mb-7">
              МНОГОФУНКЦИОНАЛЬНАЯ ЗУБНАЯ ПАСТА
            </div>
            <div class="t3">
              Зубная паста с фтором безопасно очищает зубы.
            </div>
            <div class="t3">
              Эффективно удаляет зубной налет, не повреждая зубную эмаль.
            </div>
            <div class="t3">
              Обладает отбеливающим эффектом и освежает дыхание.
            </div>
            <div class="t3">
              Формула REMINACT™ способствует реминерализации зубной эмали,
              делает зубы крепче и предотвращает образование кариеса.
            </div>
            <div
              class="d-flex flex-row flex-wrap justify-space-between px-10 w100"
            >
              <v-btn
                large
                color="teal"
                outlined
                @click="openAmway('https://www.amway.ru/p/6833')"
              >
                <v-icon class="mr-3">mdi-web</v-icon>
                Подробнее
              </v-btn>
              <v-btn
                dark
                large
                color="success"
                @click="showCallDialog($event, 2)"
              >
                <v-icon class="mr-3">mdi-basket</v-icon>
                Заказать
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" ref="concentrat">
      <div class="glister-item">
        <v-row no-gutters>
          <v-col cols="12" lg="4" offset-lg="2" class="text-center">
            <img
              style="max-height: 400px"
              :src="require('../../public/img/g-item-liquid.jpg')"
              alt=""
              data-aos="flip-right"
              data-aos-duration="800"
              data-aos-delay="300"
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            class="d-flex flex-column align-start justify-center"
          >
            <img :src="require('../../public/img/logo-glister-sm.png')" />
            <div class="glister-item-header mt-0 mb-7">
              КОНЦЕНТРИРОВАННАЯ ЖИДКОСТЬ ДЛЯ ПОЛОСКАНИЯ ПОЛОСТИ РТА
            </div>
            <div class="t3">
              Эффективно удаляет зубной налет.
            </div>
            <div class="t3">
              Освежает дыхание, обладает мятным вкусом.
            </div>
            <div
              class="d-flex flex-row flex-wrap justify-space-between px-10 w100"
            >
              <v-btn
                large
                color="teal"
                outlined
                @click="openAmway('https://www.amway.ru/p/9949')"
              >
                <v-icon class="mr-3">mdi-web</v-icon>
                Подробнее
              </v-btn>
              <v-btn
                dark
                large
                color="success"
                @click="showCallDialog($event, 3)"
              >
                <v-icon class="mr-3">mdi-basket</v-icon>
                Заказать
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" ref="sprey">
      <div class="glister-item">
        <v-row no-gutters>
          <v-col cols="12" lg="4" class="text-center order-lg-2">
            <img
              :src="require('../../public/img/g-item-sprey.jpg')"
              alt=""
              data-aos="flip-right"
              data-aos-duration="800"
              data-aos-delay="300"
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            offset-lg="2"
            class="d-flex flex-column align-start justify-center order-lg-1"
          >
            <img :src="require('../../public/img/logo-glister-sm.png')" />
            <div class="glister-item-header mt-0 mb-7">
              СПРЕЙ-ОСВЕЖИТЕЛЬ ПОЛОСТИ РТА С ЗАПАХОМ МЯТЫ
            </div>
            <div class="t3">
              Надолго обеспечивает чистую мятную свежесть дыхания в любое время
              и в любом месте.
            </div>
            <div class="t3">
              Не содержит сахара.
            </div>
            <div class="t3">
              Легко помещается в кармане.
            </div>
            <div
              class="d-flex flex-row flex-wrap justify-space-between px-10 w100"
            >
              <v-btn
                large
                color="teal"
                outlined
                @click="openAmway('https://www.amway.ru/p/120351')"
              >
                <v-icon class="mr-3">mdi-web</v-icon>
                Подробнее
              </v-btn>
              <v-btn
                dark
                large
                color="success"
                @click="showCallDialog($event, 4)"
              >
                <v-icon class="mr-3">mdi-basket</v-icon>
                Заказать
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="12" ref="nit">
      <div class="glister-item">
        <v-row no-gutters>
          <v-col cols="12" lg="4" offset-lg="2" class="text-center">
            <img
              :src="require('../../public/img/g-item-nit.jpg')"
              alt=""
              data-aos="flip-right"
              data-aos-duration="800"
              data-aos-delay="300"
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            class="d-flex flex-column align-start justify-center"
          >
            <img :src="require('../../public/img/logo-glister-sm.png')" />
            <div class="glister-item-header mt-0 mb-7">
              ЗУБНАЯ НИТЬ
            </div>
            <div class="t3">
              Невощеная тонкая зубная нить не повреждает десны и бережно очищает
              межзубные промежутки, не расщепляясь и не оставляя волокон.
            </div>
            <div
              class="d-flex flex-row flex-wrap justify-space-between px-10 w100"
            >
              <v-btn
                large
                color="teal"
                outlined
                @click="openAmway('https://www.amway.ru/p/0994')"
              >
                <v-icon class="mr-3">mdi-web</v-icon>
                Подробнее
              </v-btn>
              <v-btn
                dark
                large
                color="success"
                @click="showCallDialog($event, 5)"
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
      { id: 1, text: 'УНИВЕРСАЛЬНЫЕ ЗУБНЫЕ ЩЕТКИ' },
      { id: 2, text: 'МНОГОФУНКЦИОНАЛЬНАЯ ЗУБНАЯ ПАСТА' },
      { id: 3, text: 'КОНЦЕНТРИРОВАННАЯ ЖИДКОСТЬ ДЛЯ ПОЛОСКАНИЯ ПОЛОСТИ РТА' },
      { id: 4, text: 'СПРЕЙ-ОСВЕЖИТЕЛЬ С ЗАПАХОМ МЯТЫ' },
      { id: 5, text: 'ЗУБНАЯ НИТЬ' }
    ]
  }),
  methods: {
    showCallDialog(e, product) {
      e.preventDefault()
      let result = ''
      const find = this.products.find(x => x.id === product)
      if (find) result = find.text + '\r\n'
      this.$modal.show(CallDialog, { result: result }, settings)
    },
    openAmway(url) {
      window.open(url, '_blank')
    },
    scrollTo(e, elementName) {
      e.preventDefault()
      let element = this.$refs[elementName]
      setTimeout(() => {
        var top = element.offsetTop
        window.scrollTo({ top: top, left: 0, behavior: 'smooth' })
        this.drawer = false
      }, 200)
    }
  }
}
</script>

<style></style>
