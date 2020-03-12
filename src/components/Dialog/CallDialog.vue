<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="12" cols="12" v-if="form">
        <v-form lazy-validation v-model="valid" ref="form">
          <v-container>
            <v-row no-gutters>
              <v-col sm="12" cols="12">
                <v-alert type="info">
                  {{ notify }}
                </v-alert>
                <v-textarea
                  :autofocus="true"
                  filled
                  v-model="contact"
                  :rules="contactRules"
                  :counter="100"
                  required
                ></v-textarea>
              </v-col>
              <v-col sm="12" class="text-center" cols="12">
                <v-btn
                  :disabled="!valid"
                  :loading="loading"
                  x-large
                  tile
                  color="primary"
                  @click="submit"
                  class="w100"
                >
                  <v-icon>mdi-check</v-icon>
                  ОК
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col sm="12" cols="12" v-if="success">
        <v-alert type="success" class="mt-3"
          >Ваш запрос успешно отправлен!</v-alert
        >
      </v-col>
      <v-col sm="12" cols="12" v-if="error">
        <v-alert type="error" class="mt-3"
          >Возникла ошибка! Попробуйте повторить попытку.</v-alert
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from './Alert'
const settings = {
  height: 'auto',
  maxWidth: 400,
  adaptive: true,
  transition: 'nice-modal-fade',
  clickToClose: true
}
export default {
  props: ['result'],
  data: () => ({
    form: true,
    success: false,
    error: false,
    loading: false,
    valid: true,
    contact: null,
    labelRu:
      'Введите имя, контакты для связи (E-mail или телефон) и краткое сообщение',
    notify:
      'Не забудьте указать имя и контакты (E-mail или телефон) чтобы мы могли связаться с Вами',
    contactRules: [
      v => !!v || 'Поле не должно быть пустым',
      v =>
        (v && v.length <= 100) || 'Поле должно содержать не более 100 символов'
    ]
  }),
  mounted() {
    this.contact = this.result
  },
  methods: {
    ...mapActions(['createCallback']),
    reset() {
      this.form = true
      this.success = false
      this.error = false
    },
    submit(e) {
      e.preventDefault()
      this.loading = true
      if (this.$refs.form.validate()) {
        this.createCallback({ contact: 'Amway сайт', result: this.contact })
          .then(() => {
            this.loading = false
            this.form = false
            this.$emit('close')
            this.$modal.show(
              Alert,
              {
                type: 'success',
                message: 'Запрос успешно отправлен!',
                message2:
                  'Если Вы правильно указали свои контакты, мы свяжемся с Вами в ближайшее время.'
              },
              settings
            )
            this.$refs.form.reset()
          })
          .catch(x => {
            this.loading = false
            this.$modal.show(
              Alert,
              {
                type: 'error',
                message: 'Ошибка при отправке запроса!',
                message2: x
              },
              settings
            )
            this.$refs.form.reset()
          })
      } else this.loading = false
    }
  }
}
</script>
