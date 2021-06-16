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
            <button @click="actionButton">{{headTitle}}</button>
        </div>
    </div>
</template>
<script>
 
export default {
    name: "PopUp",
    props: {
        headTitle: String,
        actionButton: Function
    },
}
</script>

<style lang="scss" scoped>

.basic-popUp {
    position: absolute;
    height: fit-content;
    width: 50vw;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    margin: auto;
    background-color: $white;
    color: $black;
    border-radius: 20px;
    font-family: $mainFont;
   padding: 0 0 15px 0;
}

.basic-popUp-head {
    position: relative;

    h2 {
        font-size: 24px;
        text-align: center;
        font-weight: 500;
    }

    button {
        position: absolute;
        right: 15px;
        top: 15px;
    }
}

.basic-popUp-footer {
    display: flex;
    justify-content: center;

    button {
        @include btnBlueAndBlack;
        margin-top: 20px;
        padding: 8px 40px;
    }
}
</style>