<template>
    <component :is="getTemplate">

    </component>
</template>

<script>
export default {
    components: {
        
    },
    data() {
        return {
            template: 'contact-form',
            data: {
                
            }
        }
    },
    methods: {

    },
    computed : {
        getTemplate() {
            return () => import(process.env.TEMPLATES_URL + this.template + '.vue')
        }
    },
    created() {

    }
}
</script>

<style lang="scss">

</style>