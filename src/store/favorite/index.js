import context from '../../api/callback'
import moment from 'moment'
import * as types from '../mutation-types'

const state = {
  week: moment().week(),
  weeks: [
    {
      id: 13,
      products: [
        {
          name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
          img: 'img/h-item-0014.webp',
          url: 'https://www.amway.ru/p/0014',
          sales: 14,
          color: 'red'
        },
        {
          name: 'L.O.C.™ Многофункциональное чистящее средство',
          img: 'img/h-item-0001.webp',
          url: 'https://www.amway.ru/p/0001',
          sales: 12,
          color: 'teal'
        },
        {
          name: 'Glister™ Многофункциональная зубная паста',
          img: 'img/g-item-pasta.webp',
          url: 'https://www.amway.ru/p/6833',
          sales: 11,
          color: 'green'
        },
        {
          name: 'SA8™ Premium Порошок стиральный концентрированный',
          img: 'img/h-item-109849.webp',
          url: 'https://www.amway.ru/p/109849',
          sales: 7,
          color: 'blue'
        },
        {
          name: 'DISH DROPS™ Концентрированная жидкость для мытья посуды',
          img: 'img/h-item-110488-2.webp',
          url: 'https://www.amway.ru/p/110488',
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
          url: 'https://www.amway.ru/p/6833',
          sales: 19,
          color: 'green'
        },
        {
          name: 'L.O.C.™ Многофункциональное чистящее средство',
          img: 'img/h-item-0001.webp',
          url: 'https://www.amway.ru/p/0001',
          sales: 13,
          color: 'teal'
        },
        {
          name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
          img: 'img/h-item-0014.webp',
          url: 'https://www.amway.ru/p/0014',
          sales: 12,
          color: 'red'
        },
        {
          name: 'SA8™ Premium Порошок стиральный концентрированный',
          img: 'img/h-item-109849.webp',
          url: 'https://www.amway.ru/p/109849',
          sales: 7,
          color: 'blue'
        },
        {
          name: 'DISH DROPS™ Концентрированная жидкость для мытья посуды',
          img: 'img/h-item-110488-2.webp',
          url: 'https://www.amway.ru/p/110488',
          sales: 5,
          color: 'yellow'
        }
      ]
    },
    {
      id: 15,
      products: [
        {
          name:
            'Glister™ Концентрированная жидкость для полоскания полости рта',
          img: 'img/g-item-liquid.webp',
          url: 'https://www.amway.ru/p/9949',
          sales: 12,
          color: 'green'
        },
        {
          name: 'L.O.C.™ Влажные очищающие салфетки',
          img: 'img/h-item-110485.webp',
          url:
            'https://www.amway.ru/l-o-c-vlazhnye-ochishchayushchie-salfetki/p/110485',
          sales: 11,
          color: 'teal'
        },
        {
          name: 'DISH DROPS™ SCRUB BUDS™ Металлические губки',
          img: 'img/h-item-110490.webp',
          url:
            'https://www.amway.ru/dish-drops-scrub-buds-metallicheskie-gubki/p/110490',
          sales: 7,
          color: 'red'
        },
        {
          name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
          img: 'img/h-item-0014.webp',
          url: 'https://www.amway.ru/p/0014',
          sales: 5,
          color: 'blue'
        },
        {
          name: 'Glister™ Многофункциональная зубная паста',
          img: 'img/g-item-pasta.webp',
          url: 'https://www.amway.ru/p/6833',
          sales: 4,
          color: 'yellow'
        }
      ]
    },
    {
      id: 16,
      products: [
        {
          name: 'G&H PROTECT+™ Мыло 250 г',
          img: 'img/h-item-118116.webp',
          url: 'https://www.amway.ru/g-h-protect-mylo-250-g/p/118116',
          sales: 9,
          color: 'blue'
        },
        {
          name: 'Glister™ Многофункциональная зубная паста',
          img: 'img/g-item-pasta.webp',
          url: 'https://www.amway.ru/p/6833',
          sales: 8,
          color: 'yellow'
        },
        {
          name:
            'Glister™ Концентрированная жидкость для полоскания полости рта',
          img: 'img/g-item-liquid.webp',
          url: 'https://www.amway.ru/p/9949',
          sales: 7,
          color: 'green'
        },
        {
          name: 'DISH DROPS™ SCRUB BUDS™ Металлические губки',
          img: 'img/h-item-110490.webp',
          url:
            'https://www.amway.ru/dish-drops-scrub-buds-metallicheskie-gubki/p/110490',
          sales: 5,
          color: 'red'
        },
        {
          name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
          img: 'img/h-item-0014.webp',
          url: 'https://www.amway.ru/p/0014',
          sales: 4,
          color: 'teal'
        }
      ]
    },
    {
      id: 17,
      products: [
        {
          name: 'G&H PROTECT+™ Шариковый дезодорант-антиперсперант',
          img: 'img/h-item-118120.webp',
          url:
            'https://www.amway.ru/g-h-protect-sharikovyj-dezodorant-antipersperant/p/118120',
          sales: 10,
          color: 'yellow'
        },
        {
          name:
            'Glister™ Концентрированная жидкость для полоскания полости рта',
          img: 'img/g-item-liquid.webp',
          url: 'https://www.amway.ru/p/9949',
          sales: 9,
          color: 'green'
        },
        {
          name: 'Glister™ Спрей-освежитель для полости рта с запахом мяты',
          img: 'img/g-item-sprey.webp',
          url: 'https://www.amway.ru/p/120351',
          sales: 6,
          color: 'green'
        },
        {
          name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
          img: 'img/h-item-0014.webp',
          url: 'https://www.amway.ru/p/0014',
          sales: 5,
          color: 'red'
        },
        {
          name: 'Glister™ Kids Детская зубная паста',
          img: 'img/g-item-pasta-kids.webp',
          url:
            'https://www.amway.ru/glister-kids-detskaya-zubnaya-pasta/p/120519',
          sales: 3,
          color: 'blue'
        }
      ]
    },
    {
      id: 18,
      products: [
        {
          name: 'Glister™ Спрей-освежитель для полости рта с запахом мяты',
          img: 'img/g-item-sprey.webp',
          url: 'https://www.amway.ru/p/120351',
          sales: 7,
          color: 'orange'
        },
        {
          name:
            'Glister™ Концентрированная жидкость для полоскания полости рта',
          img: 'img/g-item-liquid.webp',
          url: 'https://www.amway.ru/p/9949',
          sales: 5,
          color: 'green'
        },
        {
          name: 'SA8™ Порошок для стирки цветных тканей, 3 кг',
          img: 'img/h-item-109850.webp',
          url:
            'https://www.amway.ru/sa8-poroshok-dlya-stirki-cvetnyh-tkanej-3-kg/p/109850',
          sales: 4,
          color: 'yellow'
        },
        {
          name: 'Glister™ Многофункциональная зубная паста',
          img: 'img/g-item-pasta.webp',
          url: 'https://www.amway.ru/p/6833',
          sales: 4,
          color: 'red'
        },
        {
          name: 'G&H PROTECT+™ Шариковый дезодорант-антиперсперант',
          img: 'img/h-item-118120.webp',
          url:
            'https://www.amway.ru/g-h-protect-sharikovyj-dezodorant-antipersperant/p/118120',
          sales: 2,
          color: 'blue'
        }
      ]
    },
    {
      id: 19,
      products: [
        {
          name:
            'Glister™ Концентрированная жидкость для полоскания полости рта',
          img: 'img/g-item-liquid.webp',
          url: 'https://www.amway.ru/p/9949',
          sales: 6,
          color: 'green'
        },
        {
          name: 'DISH DROPS™ SCRUB BUDS™ Металлические губки',
          img: 'img/h-item-110490.webp',
          url:
            'https://www.amway.ru/dish-drops-scrub-buds-metallicheskie-gubki/p/110490',
          sales: 6,
          color: 'red'
        },
        {
          name: 'Glister™ Многофункциональная зубная паста',
          img: 'img/g-item-pasta.webp',
          url: 'https://www.amway.ru/p/6833',
          sales: 6,
          color: 'green'
        },
        {
          name: 'G&H PROTECT+™ Шариковый дезодорант-антиперсперант',
          img: 'img/h-item-118120.webp',
          url:
            'https://www.amway.ru/g-h-protect-sharikovyj-dezodorant-antipersperant/p/118120',
          sales: 4,
          color: 'blue'
        },
        {
          name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
          img: 'img/h-item-0014.webp',
          url: 'https://www.amway.ru/p/0014',
          sales: 4,
          color: 'teal'
        }
      ]
    },
    {
      id: 20,
      products: [
        {
          name: 'Glister™ Многофункциональная зубная паста',
          img: 'img/g-item-pasta.webp',
          url: 'https://www.amway.ru/p/6833',
          sales: 8,
          color: 'red'
        },
        {
          name: 'SA8™ Порошок для стирки цветных тканей, 3 кг',
          img: 'img/h-item-109850.webp',
          url:
            'https://www.amway.ru/sa8-poroshok-dlya-stirki-cvetnyh-tkanej-3-kg/p/109850',
          sales: 7,
          color: 'yellow'
        },
        {
          name: 'G&H PROTECT+™ Шариковый дезодорант-антиперсперант',
          img: 'img/h-item-118120.webp',
          url:
            'https://www.amway.ru/g-h-protect-sharikovyj-dezodorant-antipersperant/p/118120',
          sales: 6,
          color: 'green'
        },
        {
          name: 'DISH DROPS™ SCRUB BUDS™ Металлические губки',
          img: 'img/h-item-110490.webp',
          url:
            'https://www.amway.ru/dish-drops-scrub-buds-metallicheskie-gubki/p/110490',
          sales: 6,
          color: 'teal'
        },
        {
          name: 'SA8™ Порошок для стирки цветных тканей, 3 кг',
          img: 'img/h-item-109850.webp',
          url:
            'https://www.amway.ru/sa8-poroshok-dlya-stirki-cvetnyh-tkanej-3-kg/p/109850',
          sales: 4,
          color: 'blue'
        }
      ]
    },
    {
      id: 21,
      products: [
        {
          name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
          img: 'img/h-item-0014.webp',
          url: 'https://www.amway.ru/p/0014',
          sales: 14,
          color: 'red'
        },
        {
          name: 'L.O.C.™ Многофункциональное чистящее средство',
          img: 'img/h-item-0001.webp',
          url: 'https://www.amway.ru/p/0001',
          sales: 12,
          color: 'teal'
        },
        {
          name: 'Glister™ Многофункциональная зубная паста',
          img: 'img/g-item-pasta.webp',
          url: 'https://www.amway.ru/p/6833',
          sales: 11,
          color: 'green'
        },
        {
          name: 'SA8™ Premium Порошок стиральный концентрированный',
          img: 'img/h-item-109849.webp',
          url: 'https://www.amway.ru/p/109849',
          sales: 7,
          color: 'blue'
        },
        {
          name: 'DISH DROPS™ Концентрированная жидкость для мытья посуды',
          img: 'img/h-item-110488-2.webp',
          url: 'https://www.amway.ru/p/110488',
          sales: 5,
          color: 'yellow'
        }
      ]
    },
    {
      id: 22,
      products: [
        {
          name: 'Glister™ Многофункциональная зубная паста',
          img: 'img/g-item-pasta.webp',
          url: 'https://www.amway.ru/p/6833',
          sales: 19,
          color: 'green'
        },
        {
          name: 'L.O.C.™ Многофункциональное чистящее средство',
          img: 'img/h-item-0001.webp',
          url: 'https://www.amway.ru/p/0001',
          sales: 13,
          color: 'teal'
        },
        {
          name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
          img: 'img/h-item-0014.webp',
          url: 'https://www.amway.ru/p/0014',
          sales: 12,
          color: 'red'
        },
        {
          name: 'SA8™ Premium Порошок стиральный концентрированный',
          img: 'img/h-item-109849.webp',
          url: 'https://www.amway.ru/p/109849',
          sales: 7,
          color: 'blue'
        },
        {
          name: 'DISH DROPS™ Концентрированная жидкость для мытья посуды',
          img: 'img/h-item-110488-2.webp',
          url: 'https://www.amway.ru/p/110488',
          sales: 5,
          color: 'yellow'
        }
      ]
    },
    {
      id: 23,
      products: [
        {
          name:
            'Glister™ Концентрированная жидкость для полоскания полости рта',
          img: 'img/g-item-liquid.webp',
          url: 'https://www.amway.ru/p/9949',
          sales: 12,
          color: 'green'
        },
        {
          name: 'L.O.C.™ Влажные очищающие салфетки',
          img: 'img/h-item-110485.webp',
          url:
            'https://www.amway.ru/l-o-c-vlazhnye-ochishchayushchie-salfetki/p/110485',
          sales: 11,
          color: 'teal'
        },
        {
          name: 'DISH DROPS™ SCRUB BUDS™ Металлические губки',
          img: 'img/h-item-110490.webp',
          url:
            'https://www.amway.ru/dish-drops-scrub-buds-metallicheskie-gubki/p/110490',
          sales: 7,
          color: 'red'
        },
        {
          name: 'AMWAY™ Чистящее средство-гель для духовых шкафов',
          img: 'img/h-item-0014.webp',
          url: 'https://www.amway.ru/p/0014',
          sales: 5,
          color: 'blue'
        },
        {
          name: 'Glister™ Многофункциональная зубная паста',
          img: 'img/g-item-pasta.webp',
          url: 'https://www.amway.ru/p/6833',
          sales: 4,
          color: 'yellow'
        }
      ]
    }
  ]
}

// actions
const actions = {
  // async createCallback({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     context
  //       .createCallback(payload)
  //       .then(x => {
  //         if (x.status === 200) {
  //           resolve()
  //         } else {
  //           console.log(x.response.data)
  //           reject(x.response.data)
  //         }
  //       })
  //       .catch(x => {
  //         console.log(x.response.data)
  //         reject(x.response.data)
  //       })
  //   })
  // },
  async saveAdminFeedback({ commit, dispatch }, payload) {
    // console.log(payload)
    dispatch('clearAllMessages')
    return new Promise((resolve, reject) => {
      context
        .saveAdminFeedback(payload)
        .then(x => {
          if (x.status === 200) {
            commit(types.SAVE_ADMIN_FEEDBACK, payload)
            resolve()
          } else {
            reject(x.response.data)
            dispatch('setErrors', x.response.data)
          }
        })
        .catch(x => {
          reject(x.response.data)
          dispatch('setErrors', x.response.data)
        })
    })
  },
  async getAdminFeedbacks({ commit, dispatch }) {
    dispatch('clearAllMessages')
    context
      .getAdminFeedbacks()
      .then(x => {
        if (x.status === 200) {
          commit(types.RECIEVE_ADMIN_FEEDBACKS, x.data)
        } else {
          dispatch('setErrors', x.response.data)
        }
      })
      .catch(x => {
        dispatch('setErrors', x.response.data)
      })
  },
  async getUserFeedbacks({ commit, dispatch }) {
    context
      .getUserFeedbacks()
      .then(x => {
        if (x.status === 200) {
          commit(types.RECIEVE_USER_FEEDBACKS, x.data)
        } else {
          dispatch('setErrors', x.response.data)
        }
      })
      .catch(x => {
        dispatch('setErrors', x.response.data)
      })
  }
}

// mutations
const mutations = {
  [types.RECIEVE_ADMIN_FEEDBACKS](state, payload) {
    state.feedbacksOfAdmin = payload
  },
  [types.RECIEVE_USER_FEEDBACKS](state, payload) {
    state.feedbacksOfUser = payload
  },
  [types.SAVE_ADMIN_FEEDBACK](state, payload) {
    let find = state.feedbacksOfAdmin.find(x => x.id === payload.id)
    if (find !== null && find !== undefined && find !== 'undefined') {
      find.is_show = payload.is_show === false ? 0 : 1
      find.text_user = payload.text_user
      find.text_admin = payload.text_admin
    }
  }
}

// getters
const getters = {
  favs: state => {
    const week = state.weeks.find(x => x.id === state.week)
    if (week && week.products) {
      return week.products
    }
    return null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
