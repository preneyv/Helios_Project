<template>
    <div :class="[classPopUp,'basic-popUp']">
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
        actionButton: Function,
        classPopUp: Array
    },
}
</script>

<style lang="scss" scoped>

.basic-popUp {
    position: absolute;
    height: 85%;
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
    z-index: 100;

    @include responsive('xl-desktop'){
      height: 55%;
    }

    input,
    textarea {
      @include input;
    }
}


.basic-popUp-head {
    position: relative;

    h2 {
        font-size: 24px;
        text-align: center;
        font-weight: 500;
         padding: 30px 0 25px 0;
    }

    button {
        position: absolute;
        right: 15px;
        top: 15px;
    }

    .modal-default-button {
        width: 15px;
        height: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
}
  .basic-popUp-content {
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 10% 10px 10%;
    }

    .error {
      color: red;
    }

    .errors {
      padding-bottom: 10px;
    }
  }

  .form-group-50 {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    
    input {
      width: 45%;
    }
  }

  .form-group--100 {
     input {
      width: 100%;
    }
    .img-input {
       display: none;
    }
    #password {
      margin-bottom: 25px;
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

  .img-btn {
    padding: 5px 20px;
    background-color: $black;
    color: $white;
    border-radius: 10px;
    font-size: 14px;
    border: 1px solid $black;
    transition: all 0.2s linear;

    &:hover {
        background-color: transparent;
        border: 1px solid $black;
        color: $black;
        transition: all 0.2s linear;
    }
  }

//Register

.inscription.yes.basic-popUp  {
    height: 98%;
    width: 55vw;

     @include responsive('xl-desktop'){
      height: 63%;
    }
}

//add a post 

.post.no.basic-popUp  {
    height: 64%;
    width: 55vw;

    #content {
        width: 100%;
    }

     @include responsive('xl-desktop'){
      height: 43%;
      width: 45vw;
    }
}

//add an event 
.event.basic-popUp {
    height: 116%;

   @include responsive('xl-desktop'){
      height: 78%;
    }

  .form-group--100 {
    display: inline-flex; 
    flex-wrap: wrap;

    input,
    textarea {
      width: 100%;
    }

    .de,
    .a {
      width: 5%;
      margin: 0 12px 0 15px;
      font-size: 14px;
      text-align: right;
      font-size: 14px;
    }
  
    .le { 
      width: 4%;
      text-align: left;
      font-size: 14px;
    }

    #timeStart,
    #timeEnd {
      padding-left: 30px;
      width: 18%;
    }

    #time,
    #date {
      width: 35%;
    }
  }

  .date-label {
    width: 100%;
    padding-top: 1rem;
    font-weight: 600;
    padding-bottom: 15px;
  }

  #descEvent {
    margin-bottom: 10px;
  }

  .img-btn {
    margin-top: 5px;
  }
}

</style>