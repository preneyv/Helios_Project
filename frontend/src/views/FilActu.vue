<template> 
    <div class="fil-actu">
        <!-- currentStateToggle="true" -->
        <ToggleButtonHome  currentStateToggle="true"></ToggleButtonHome>
        <div class="actus">
            
        </div>
    </div>
</template>
<script>
    /* eslint-disable */ 
    import Nav from '../components/Nav.vue'
    import BandeauRight from '../components/BandeauRight.vue'
    import ToggleButtonHome from '../components/ToggleButtonHome.vue'

    export default {
        name: 'filActu',
        components: {
            Nav,
            BandeauRight,
            ToggleButtonHome
        },
        // props: {
        //     currentStateToggle: Boolean,
        // },
        data() {
            return {
               currentStateToggle: true,
            }
        },
    }
</script>

<style lang="scss">



</style>

