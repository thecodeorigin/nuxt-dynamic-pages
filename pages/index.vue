<template>
  <b-container fluid>
    <ExampleComponent/>
  </b-container>
</template>

<script>

export default {
  layout: 'page',
  name: 'Home',
  head () {
    return {
      title: 'Home page',
      description: 'A short dummy description'
    }
  },
  components: {
    ExampleComponent: () => import('~/components/ExampleComponent.vue'),
  },
  methods: {

  },
  created () {

  }
}
</script>