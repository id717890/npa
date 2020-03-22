import CallDialog from '../components/Dialog/CallDialog'
const settings = {
  height: 'auto',
  maxWidth: 430,
  adaptive: true,
  transition: 'nice-modal-fade',
  clickToClose: true
}
export default {
  methods: {
    showCallDialog(product) {
      let result = product + '\r\n'
      this.$modal.show(CallDialog, { result: result }, settings)
    },
    openAmway(url) {
      window.open(url, '_blank')
    }
  }
}
