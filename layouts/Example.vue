<template>
  <div>
    <component v-for="section in layout" :is="section" :key="section"></component>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import( process.env.CONTAINERS_URL + 'Navbar.vue'),
    Header: () => import( process.env.CONTAINERS_URL + 'Header.vue'),
    Sidebar: () => import( process.env.CONTAINERS_URL + 'Sidebar.vue'),
    Footer: () => import( process.env.CONTAINERS_URL + 'Footer.vue'),
  },
  data () {
    return {
      // Why this? Well, you can store this array in database or somewhere => dynamic layout!
      layout: [
        'Navbar',
        'Header',
        'nuxt', // Need exact 1 <nuxt/> no more or less, you can try and see the ugly result :D
                // <nuxt/> will be the view for components in ~/pages
        'Sidebar',
        'Footer',
      ]
    }
  }
}
</script>

<style lang="scss">
  // Import custom SASS variable overrides, or alternatively
  // define your variable overrides here instead
  @import 'themes/Example/assets/scss/custom/variants.scss';

  // Import Bootstrap and BootstrapVue source SCSS files
  // This is required! For variants customization for your theme!
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
</style>