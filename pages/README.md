# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

This will be displayed for the <nuxt/> tag of the picked layout, make sure your pages look like:
``` vue
<template>
  <ExampleComponent/>
</template>

<script>
export default {
  layout: process.env.THEME, // important
  name: 'ExamplePage',
  head () {
    return {
      title: 'Example page',
      description: 'A short dummy description'
    }
  },
  components: {
    ExampleComponent: () => import(process.env.COMPONENTS_URL + 'ExampleComponent.vue')
  },
  created () {

  }
}
</script>
```
The pages directory is for landing pages
More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).
