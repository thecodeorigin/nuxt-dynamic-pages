<template>
  <b-container fluid class="p-0">
    <component v-for="section in layout" :is="section" :key="section"></component>
  </b-container>
</template>

<script>
export default {
  components: {
    Navbar: () => import('~/common/Navbar.vue'),
    Sidebar: () => import('~/common/Sidebar.vue'),
    Footer: () => import('~/common/Footer.vue'),
  },
  data () {
    return {
      // Why this? Well, you can store this array in database or somewhere => dynamic layout!
      layout: [
        'Navbar',
        'nuxt', // Need exact 1 <nuxt/> no more or less, you can try and see the ugly result :D
                // <nuxt/> will be the view for components in ~/pages
        'Sidebar',
        'Footer',
      ]
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss">

</style>