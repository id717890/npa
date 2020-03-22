<template>
  <section class="w100">
    <glister class="hidden-sm-and-down" />
    <glister-mobile class="hidden-md-and-up" />
    <glister-kids class="hidden-sm-and-down" />
    <glister-kids-mobile class="hidden-md-and-up" />
  </section>
</template>

<script>
import Glister from '../components/Glister'
import GlisterMobile from '../components/GlisterMobile'
import GlisterKids from '../components/GlisterKids'
import GlisterKidsMobile from '../components/GlisterKidsMobile'
export default {
  props: {
    source: String
  },
  components: {
    Glister,
    GlisterMobile,
    GlisterKids,
    GlisterKidsMobile
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    layoutColor(area) {}
  }
}
</script>
