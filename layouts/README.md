# Layout sample
``` vue
<template>
  <div>
    <component v-for="section in layout" :is="section" :key="section"></component>
    <!--
    This will render from layout to:
    <Navbar/>
    <Header/>
    <nuxt/> You only need 1 <nuxt/> (like you only need 1 <router-view>...)
    <Sidebar/>
    <Footer/>
    -->
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
      layout: [
        'Navbar',
        'Header',
        'nuxt', // Need exact 1 <nuxt/> no more or less, you can try and see the ugly result :D
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
  @import 'themes/[YOUR_THEME_NAME]/assets/scss/variants.scss';

  // Import Bootstrap and BootstrapVue source SCSS files
  // This is required! For variants customization for your theme!
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
</style>

```