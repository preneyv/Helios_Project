<template>
  <li>
    <div class="user">
      <img v-if="comment.mediaProfil" :src="comment.mediaProfil" alt="photo de l'utilisateur">
      <img v-else :src="require('@/assets/defaut-profil.jpg')" alt="photo de l'utilisateur">
      <!-- <p class="user-name">{{post.makerInfo[0].pseudo || "utilisateur inconnu"}}</p> -->
    </div>
    <div class="comment">
      <p class="user-name">{{ comment.pseudoAuthor }}</p>
      <p class="content">{{ comment.content }}</p>
    </div>  
  </li>
</template>

<script>


   export default {
    props: ['comment'],
     data() {
       return {
      
       }
     },
    methods: {
    
    }
   }
</script>

<style lang="scss">

.comments {
  font-size: $mainFont;
  li {
    display: inline-flex;
  }

  .comment {
    padding: 10px;
    margin-left: 10px;
    background-color: $gray;
    font-size: 14px;
    border-radius: 10px;

    .content {
      color: #bebebe;
    }
  }
}
   
</style>