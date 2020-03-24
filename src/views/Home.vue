<template>
  <section class="w100">
    <home-loc class="hidden-sm-and-down" />
    <home-loc-mobile class="hidden-md-and-up" />
    <home-special class="hidden-sm-and-down" />
    <home-special-mobile class="hidden-md-and-up" />
    <home-wash class="hidden-sm-and-down" />
    <home-wash-mobile class="hidden-md-and-up" />
    <home-dish class="hidden-sm-and-down" />
    <home-dish-mobile class="hidden-md-and-up" />
  </section>
</template>

<script>
import HomeLoc from '../components/HomeLoc'
import HomeLocMobile from '../components/HomeLocMobile'
import HomeWash from '../components/HomeWash'
import HomeWashMobile from '../components/HomeWashMobile'
import HomeDish from '../components/HomeDish'
import HomeDishMobile from '../components/HomeDishMobile'
import HomeSpecial from '../components/HomeSpecial'
import HomeSpecialMobile from '../components/HomeSpecialMobile'
export default {
  props: {
    source: String
  },
  components: {
    HomeLoc,
    HomeLocMobile,
    HomeWash,
    HomeWashMobile,
    HomeDish,
    HomeDishMobile,
    HomeSpecial,
    HomeSpecialMobile
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    layoutColor(area) {}
  }
}
</script>
