<template>
  <section class="w100">
    <home-loc class="hidden-sm-and-down" />
    <home-special class="hidden-sm-and-down" />
    <home-wash class="hidden-sm-and-down" />
    <home-dish class="hidden-sm-and-down" />
  </section>
</template>

<script>
import HomeLoc from '../components/HomeLoc'
import HomeWash from '../components/HomeWash'
import HomeDish from '../components/HomeDish'
import HomeSpecial from '../components/HomeSpecial'
export default {
  props: {
    source: String
  },
  components: {
    HomeLoc,
    HomeWash,
    HomeDish,
    HomeSpecial
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    layoutColor(area) {}
  }
}
</script>
