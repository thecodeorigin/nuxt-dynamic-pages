<template>
  <component :is="template" :page="data" class="animated fadeIn" />
</template>
<script>
import config from "~/constants/config"
export default {
  layout: "archive",
  validate({ params, store }) {
    if (config.models.includes(params.archive)) {
      store.commit("SET_FETCH_MODE", "ARCHIVE")
    } else {
      store.commit("SET_FETCH_MODE", "LANDING")
    }
    // Just use this hook for checking fetch mode
    return true
  },
  async asyncData({ params, store }) {
    // Get fetch mode
    // Landing pages can be stored in state so it won't be requested
    // Archive pages will be requested every time
    // Capitalize it for further use
    var mode_cap = store.state.fetch_mode.toLowerCase()
    mode_cap = mode_cap.charAt(0).toUpperCase() + mode_cap.slice(1)
    // Check if current fetch mode is archive or landing page
    if (store.state.fetch_mode == "ARCHIVE") {
      await store.dispatch(`fetch${mode_cap}`, params.archive)
      return {
        mode: mode_cap.toUpperCase(),
        archive: params.archive,
        data: store.state.archive
      }
    } else {
      // Find if the page had been loaded before
      let data = store.state.landing.find(data => {
        return data.slug == params.archive
      })
      // If it's not loaded
      if (data == undefined) {
        // Fetch it
        await store.dispatch(`fetch${mode_cap}`, params.archive)
        // Then store it to data
        data = store.state.landing.find(data => {
          return data.slug == params.archive
        })
      }
      // If it's already loaded (else case), do nothing, we have the "data" above
      return {
        mode: mode_cap.toUpperCase(),
        archive: params.archive,
        data: data
      }
    }
  },
  computed: {
    template() {
      // If is archive page, use default archive page
      return this.mode == "ARCHIVE"
        ? () => import(`~/templates/archive/${this.archive}`)
        : // If is landing page, use the template of the fetched page
          () => import(`~/templates/landing/${this.data.template}`)
    }
  },
  created() {
    // Layout
    this.$nuxt.setLayout(this.$store.state.fetch_mode.toLowerCase())
  }
}
</script>
