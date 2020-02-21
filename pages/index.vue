<template>
  <ExampleComponent/>
</template>

<script>
export default {
  layout: process.env.THEME,
  name: 'Home',
  head () {
    return {
      title: 'Home page',
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