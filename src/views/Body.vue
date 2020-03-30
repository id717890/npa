<template>
  <section class="w100">
    <body-skin class="hidden-sm-and-down" />
    <body-skin-mobile class="hidden-md-and-up" />
    <body-hair class="hidden-sm-and-down" />
    <body-hair-mobile class="hidden-md-and-up" />
  </section>
</template>
<script>
import BodySkin from '../components/BodySkin'
import BodyHair from '../components/BodyHair'
import BodySkinMobile from '../components/BodySkinMobile'
import BodyHairMobile from '../components/BodyHairMobile'
export default {
  props: {
    source: String
  },
  components: {
    BodySkin,
    BodySkinMobile,
    BodyHair,
    BodyHairMobile
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    layoutColor(area) {}
  }
}
</script>
