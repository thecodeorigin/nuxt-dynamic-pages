<template>
  <div>
    <component v-for="section in layout" :is="section" :key="section"></component>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('~/common/Navbar.vue'),
    Footer: () => import('~/common/Footer.vue'),
  },
  data () {
    return {
      // Why this? Well, you can store this array in database or somewhere => dynamic layout!
      layout: [
        'Navbar',
        'nuxt', // Need exact 1 <nuxt/> no more or less, you can try and see the ugly result :D
                // <nuxt/> will be the view for components in ~/pages
        'Footer',
      ]
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss">
  // Import custom SASS variable overrides, or alternatively
  // define your variable overrides here instead
  @import 'assets/scss/bootstrap-vue/custom.scss';

  // Import Bootstrap and BootstrapVue source SCSS files
  // This is required! For variants customization for your theme!
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
</style>