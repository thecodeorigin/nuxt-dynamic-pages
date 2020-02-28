<template>
    <component :is="template" :page-data="page">
    </component>
</template>

<script>

export default {
    layout: 'page',
    name: 'LandingPage',
    head () {
        return {
            title: this.page.title,
            description: this.page.description
        }
    },
    data () {
        return {
            template: this.$get_template('contact-form'), // Get the template
            page: this.$fake('pages')[0] // Get the first object in data/fake/pages.js
        }
    },
    mounted () {
        console.log(this.$nuxt);
    }
}
</script>

<style lang="scss">

</style>