<template>
    <div class="toggle-btns">
        <button class="button toggle" id="btn_posts" @click="togglePosts" :class="[currentStateToggle ? 'active' : '']">Posts</button>
        <button class="button toggle" id="btn_events"  @click="toggleEvents" :class="[!currentStateToggle ? 'active' : '']">Événements</button>
    </div>
</template>

<script>
export default {
    
    name: 'ToggleButtonHome',
    props: {
        // currentStateToggle: Boolean
    },
    data() {
        return {
            currentStateToggle : this.currentStateToggle
        } 
    },

    methods: {
        togglePosts() {
            console.log(this.$route);
            if(this.currentStateToggle) {
        
            } else {
                
                 this.currentStateToggle = !this.currentStateToggle;
            }
            
        },
        toggleEvents() {
            if(!this.currentStateToggle) {
                
            } else {
                 this.currentStateToggle = !this.currentStateToggle;
            }
        }
    }
}
</script>

<style lang="scss">

 .toggle-btns {
    display: inline-flex;
    width: 100%;

    button {
        color: $white;
        width: 20%;
        background-color: $primary;
    }
 }


</style>