<template>
    <div class="basic-popUp">
        <div class="basic-popUp-head">
            <h2>{{headTitle}}</h2>
            <slot name="header"></slot>
        </div>
        <div class="basic-popUp-content">
            <slot name="content"></slot>
        </div>   
        <div class="basic-popUp-footer">
            <button></button>
        </div>
    </div>
</template>
<script>
 
export default {
    name: "PopUp",
    props: {
        headTitle: String,
        footerBtnTitle: String,
    },
}
</script>

<style lang="scss" scoped>

.basic-popUp {
   bottom: 0;
    height: 400px;
    width:600px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    background-color: $white;
    color: $black;
    border-radius: 20px;
}

.basic-popUp-head {
    h2 {
        font-size: 24px;
        text-align: center;
        font-weight: 400;
    }
}
</style>