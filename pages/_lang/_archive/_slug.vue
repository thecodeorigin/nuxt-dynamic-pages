<template>
  <component :is="template" :page="data" class="animated fadeIn" />
</template>
<script>
export default {
  layout: "single",
  async asyncData({ params, store }) {
    // Fetch single page's data of archive from slug
    await store.dispatch(`fetchSingle`, {
      archive: params.archive,
      slug: params.slug
    })
    return {
      post_type: params.archive,
      data: store.state.single
    }
  },
  computed: {
    template() {
      return () => import(`~/templates/single/${this.post_type}`)
    }
  }
}
</script>
