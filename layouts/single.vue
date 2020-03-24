<template>
  <b-container fluid class="p-0">
    <Navbar />
    <nuxt />
    <Sidebar />
    <Footer />
  </b-container>
</template>

<script>
export default {
  components: {
    Navbar: () => import("~/components/common/Layout/Navbar.vue"),
    Sidebar: () => import("~/components/common/Layout/Sidebar.vue"),
    Footer: () => import("~/components/common/Layout/Footer.vue")
  }
}
</script>
