<template>
  <div class="container-post">
      <div class="up">
          <div class="user">
              <img :src="require('@/assets/defaut-profil.jpg')" alt="photo de l'utilisateur">
              <p class="user-name">John Doe</p>
          </div>
          <div class="plus">
              <div class="social-media">
                  <img :src="require('@/assets/share.svg')" alt="Partager ce post sur les réseaux sociaux">
              </div>
              <div class="more-info">
                  <img :src="require('@/assets/Informations.svg')" alt="Plus de fonctionnalités">
              </div>
          </div>
      </div>
      <div class="content">
          <p>{{ post.content }}</p>
          <img src="" alt="">
      </div>
      <div class="down">
          <div class="actions">
              <img class="likes" :src="require('@/assets/likes.svg')"  alt="Nombre de j'aimes sur ce post">
              <img class="comment" :src="require('@/assets/commentaires.svg')"  alt="Commentaires de ce post">
          </div>
          <div class="date">
              <p>Posté le {{formatDate(post.created_at)}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment';

   export default {
     props: ['post'],
     data() {
       return {
        
       }
     },
    methods: {
         formatDate(date) {
          console.log(date);
          let formatDate = moment(date).format("DD/MM/YY");
          console.log(formatDate);
           return formatDate;
        }
    },
    computed: {
    //   formatDate(date) {
    //       console.log(date);
    //       let formatDate = moment(date).format("YYYY-MM-DD");
    //       console.log(formatDate);
    //        return formatDate;
    //     }
    }
   }
</script>

<style lang="scss">

.container-post {
    padding: 20px 35px 0 35px;
}

.up {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    padding-bottom: 15px;
}

.user {
 display: inline-flex;
 align-items: center;
 justify-content: center;

    img {
        clip-path: circle(50%);
        align-self: center;
    }

    .user-name {
        padding-left: 10px;
    }
}

.plus {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    .social-media {
        padding-right: 8px;
        cursor: pointer;
    }

    .more-info {
        padding-left: 8px;
        cursor: pointer;
    }

}

.content {
    padding: 5px 0;

    p {
        text-align: justify;
    }
}

.down {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.226);
    // padding-top: 5px;
}

.actions {
     display: inline-flex;
     align-items: center;
     justify-content: center;

     .likes {
        padding-right: 8px;
        cursor: pointer;

         img {
            height: 50px;
            width: auto;
        }
     }

     .comment {
        padding-left: 8px;  
        cursor: pointer;
        align-self: center;

        img {
            height: 28px;
            width: auto;
        }
     }

     img {

     }
}

.date {
   display: flex;
   align-items: center;

   p {
       font-size: 14px;
   }
}
   
</style>