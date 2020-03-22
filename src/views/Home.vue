<template>
  <section class="w100">
    <home-loc class="hidden-sm-and-down" />
    <home-wash class="hidden-sm-and-down" />
  </section>
</template>

<script>
import HomeLoc from '../components/HomeLoc'
import HomeWash from '../components/HomeWash'
export default {
  props: {
    source: String
  },
  components: {
    HomeLoc,
    HomeWash
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    layoutColor(area) {}
  }
}
</script>
