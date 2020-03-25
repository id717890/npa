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
          <img
            :src="require('../../public/img/advantage1.webp')"
            alt=""
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="200"
          />
          <div
            class="th11 text-center"
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            Эффективны даже в холодной воде
          </div>
        </v-col>
        <v-col cols="12" md="2" class="d-flex flex-column align-center">
          <img
            :src="require('../../public/img/advantage2.webp')"
            alt=""
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="350"
          />
          <div
            class="th11 text-center"
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="450"
          >
            Бережно отстирывают, сохраняя цвет и структуру тканей
          </div>
        </v-col>
        <v-col cols="12" md="2" class="d-flex flex-column align-center">
          <img
            :src="require('../../public/img/advantage3.webp')"
            alt=""
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="500"
          />
          <div
            class="th11 text-center"
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            Быстро растворяются и легко выполаскиваются
          </div>
        </v-col>
        <v-col cols="12" md="2" class="d-flex flex-column align-center">
          <img
            :src="require('../../public/img/advantage4.webp')"
            alt=""
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="650"
          />
          <div
            class="th11 text-center"
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="750"
          >
            Экономят ваше время и деньги
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      md="6"
      cols="12"
      v-for="product in products"
      :key="product.id"
      class="px-12"
    >
      <div class="d-flex flex-column align-center  px-12 py-12 h100">
        <img
          :src="product.img"
          alt=""
          style="max-height: 320px;"
          data-aos="zoom-in"
          data-aos-duration="600"
        />
        <div v-html="product.name" class="th12 align-self-start"></div>
        <div>
          <div class="th4" v-for="(plus, index) in product.plus" :key="index">
            <strong>{{ plus.title }}</strong> <br />
            {{ plus.text }}
          </div>
        </div>
        <div
          class="d-flex justify-self-end flex-row flex-wrap justify-space-between px-10 w100"
        >
          <v-btn large color="teal" outlined @click="openUrl(product.url)">
            <v-icon class="mr-3">mdi-web</v-icon>
            Подробнее
          </v-btn>
          <v-btn
            dark
            large
            color="success"
            @click="orderProduct($event, product.id)"
          >
            <v-icon class="mr-3">mdi-basket</v-icon>
            Заказать
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CallDialogMixin from '../mixins/CallDialogMixin'
export default {
  mixins: [CallDialogMixin],
  methods: {
    openUrl(url) {
      this.openAmway(url)
    },
    orderProduct(e, product) {
      e.preventDefault()
      const find = this.products.find(x => x.id === product)
      if (find) this.showCallDialog(find.text)
    }
  },
  data: () => ({
    products: [
      {
        id: 1,
        name: 'SA8™Liquid<br/>Концентрированное жидкое средство для стирки',
        text: 'SA8™Liquid Концентрированное жидкое средство для стирки',
        url: 'https://www.amway.ru/p/112532',
        img: 'img/h-item-112532.webp',
        plus: [
          {
            title: 'ЭКОНОМИЧНО',
            text:
              'SA8™Liquid Концентрированное жидкое средство для стирки в 3-4 раза экономичнее популярных на рынке жидких средств для стирки.'
          },
          {
            title: 'ЭФФЕКТИВНО',
            text:
              'Энзимы, входящие в состав средства, справляются даже с белковыми загрязнениями: например, с молоком или кровью. Подходит для тканей всех видов. Сохраняет яркость цветных и белизну белых тканей.'
          },
          {
            title: 'БЕЗОПАСНО',
            text: 'Прошло дерматологическое тестирование*, биоразлагаемое.'
          }
        ]
      },
      {
        id: 2,
        name: 'SA8™Premium <br/>Порошок стиральный концентрированный',
        text: 'SA8™Premium Порошок стиральный концентрированный',
        url: 'https://www.amway.ru/p/109849',
        img: 'img/h-item-109849.webp',
        plus: [
          {
            title: 'ЭКОНОМИЧНО',
            text:
              'SA8™ Premium Порошок стиральный концентрированный более чем в 4 раза экономичнее, чем порошки наиболее популярных на российском рынке марок.'
          },
          {
            title: 'ЭФФЕКТИВНО',
            text:
              'Быстро растворяется. Превосходно выполаскивается, не оставляя осадка.'
          },
          {
            title: 'БЕЗОПАСНО',
            text: 'Прошел дерматологическое тестирование, биоразлагаемый.'
          }
        ]
      },
      {
        id: 3,
        name:
          'SA8™Color <br/> Концентрированное жидкое средство для стирки цветного и чёрного белья',
        text:
          'SA8™Color Концентрированное жидкое средство для стирки цветного и чёрного белья',
        url:
          'https://www.amway.ru/sa8-koncentrirovannoe-zhidkoe-sredstvo-dlya-stirki-cvetnogo-i-chernogo-belya/p/124456',
        img: 'img/h-item-124456.webp',
        plus: [
          {
            title: 'ЭФФЕКТИВНО',
            text:
              'Способствует восстановлению структуры старых хлопчатобумажных тканей, предотвращает образование катышков. Надолго сохраняет цвет цветной и черной одежды и первоначальную яркость вещей. Предотвращает перенос красителя с одной вещи на другую.'
          },
          {
            title: 'ЭКОНОМИЧНО',
            text: '1 л данного средства хватает на 50 стирок*.'
          },
          {
            title: 'БЕЗОПАСНО',
            text: 'Прошло дерматологическое тестирование**, биоразлагаемое***.'
          }
        ]
      },
      {
        id: 4,
        name:
          'SA8™Delicate <br/> Концентрированное жидкое средство для стирки мягкого действия',
        text:
          'SA8™Delicate Концентрированное жидкое средство для стирки мягкого действия',
        url: 'https://www.amway.ru/p/110479',
        img: 'img/h-item-110479.webp',
        plus: [
          {
            title: 'ЭФФЕКТИВНО',
            text:
              'Подходит для спортивной одежды из высокотехнологичных материалов. Эффективно удаляет пятна. Для деликатных тканей: шерсти, шелка, льна.'
          },
          {
            title: 'БЕЗОПАСНО',
            text: 'Прошло дерматологическое тестирование*, биоразлагаемое**.'
          }
        ]
      },
      {
        id: 5,
        name:
          'SA8™Baby <br/>Концентрированное жидкое средство для стирки детского белья с кондиционирующим эффектом',
        text:
          'SA8™Baby Концентрированное жидкое средство для стирки детского белья с кондиционирующим эффектом',
        url: 'https://www.amway.ru/p/120536',
        img: 'img/h-item-120536.webp',
        plus: [
          {
            title: 'ЭФФЕКТИВНО',
            text:
              'Делает белье чистым и мягким, борется с пятнами, предохраняет ткани от выцветания.'
          },
          {
            title: 'БЕЗОПАСНО',
            text:
              'Для детей с первых дней жизни1. Выполаскивается, не оставляя осадка, способного вызвать раздражение чувствительной кожи. Не содержит красителей, хлорных и оптических отбеливателей.'
          }
        ]
      },
      {
        id: 6,
        name:
          'SA8™Baby <br/>Концентрированный стиральный порошок для детского белья',
        text:
          'SA8™Baby Концентрированный стиральный порошок для детского белья',
        url: 'https://www.amway.ru/p/109851',
        img: 'img/h-item-109851.webp',
        plus: [
          {
            title: 'ЭФФЕКТИВНО',
            text:
              'Эффективно удаляет пятна с помощью ферментов. Предотвращает коррозию металла на молниях, пуговицах, в стиральной машине. Отстирывает даже при низких температурах (от 30 °C).'
          },
          {
            title: 'БЕЗОПАСНО',
            text:
              'Специально разработан для нежной чувствительной кожи. Одобрен Союзом педиатров России. Прошел дерматологическое тестирование, биоразлагаемый. Для детей с первых дней жизни.'
          }
        ]
      },
      {
        id: 7,
        name: 'SA8™ <br/>Универсальный отбеливатель для всех типов тканей',
        text: 'SA8™ Универсальный отбеливатель для всех типов тканей',
        url: 'https://www.amway.ru/p/110481',
        img: 'img/h-item-110481.webp',
        plus: [
          {
            title: 'ЭФФЕКТИВНО',
            text:
              'Удаляет даже такие трудные пятна, как следы от кофе и чая. Усиливает действие обычного стирального порошка. Подходит как для белых, так и для цветных тканей.'
          },
          {
            title: 'БЕЗОПАСНО',
            text: 'Прошел дерматологическое тестирование*, биоразлагаемый.'
          }
        ]
      },
      {
        id: 8,
        name: 'SA8™ <br/>Спрей для предварительного выведения пятен',
        text: 'SA8™ Спрей для предварительного выведения пятен',
        url: 'https://www.amway.ru/p/110403',
        img: 'img/h-item-110403.webp',
        plus: [
          {
            title: 'ЭФФЕКТИВНО',
            text:
              'Быстрое удаление сильных загрязнений без застирывания и замачивания. Отлично подходит для обработки воротников и манжет. Для всех типов нелиняющих цветных тканей.'
          }
        ]
      },
      {
        id: 9,
        name:
          'SA8™ <br/> Концентрированный кондиционер для белья «Садовые цветы»',
        text: 'SA8™ Концентрированный кондиционер для белья «Садовые цветы»',
        url: 'https://www.amway.ru/p/110480',
        img: 'img/h-item-110480.webp',
        plus: [
          {
            title: 'ЭФФЕКТИВНО',
            text:
              'Сокращает износ ткани, увеличивая срок службы одежды. Повышает несминаемость материала, что облегчает глажку. Подходит для ручной и машинной стирки, а также для добавления в сушилку.'
          },
          {
            title: 'БЕЗОПАСНО',
            text:
              'Не оставляет осадка, способного раздражать кожу. Прошел дерматологическое тестирование, биоразлагаемый.'
          }
        ]
      },
      {
        id: 10,
        name:
          'SA8™ <br/> Концентрированный кондиционер для белья «Альпийские луга»',
        text: 'SA8™ Концентрированный кондиционер для белья «Альпийские луга»',
        url: 'https://www.amway.ru/p/109852',
        img: 'img/h-item-109852.webp',
        plus: [
          {
            title: 'ЭФФЕКТИВНО',
            text:
              'Сокращает износ ткани, увеличивая срок службы одежды. Повышает несминаемость материала, что облегчает глажку. Подходит для ручной и машинной стирки, а также для добавления в сушилку.'
          },
          {
            title: 'БЕЗОПАСНО',
            text:
              'Не оставляет осадка, способного раздражать кожу. Прошел дерматологическое тестирование*, биоразлагаемый.'
          }
        ]
      }
    ]
  })
}
</script>

<style></style>
