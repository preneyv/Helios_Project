<template>
  <div class="container-post">
      <div class="up">
          <div class="user">
              <img v-if="post.makerInfo[0].link_media" :src="post.makerInfo[0].link_media.webContentLink" alt="photo de l'utilisateur">
              <img v-else :src="require('@/assets/defaut-profil.jpg')" alt="photo de l'utilisateur">
              <p class="user-name">{{post.makerInfo[0].pseudo || "utilisateur inconnu"}}</p>
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
          <img v-if="post.link_media" :src="post.link_media.webContentLink" alt="">
      </div>
      <div class="down">
          <div class="actions">
              <div v-if="isLiking" class="action-like">
                  <img class="likes" :src="require('@/assets/likes-full.svg')"  @click="unLikePost" alt="Vous avez aimé ce post">
              </div>
              <div v-else class="action-like">
                  <img class="likes" :src="require('@/assets/likes.svg')"  @click="likePost" alt="Aimez ce post">
              </div>
              <div class="action-comment">
                  <img class="comment" :src="require('@/assets/commentaires.svg')"  alt="Commentaires de ce post">
              </div>
          </div>
          <div class="date">
              <p>Posté le {{formatDate(post.created_at)}}</p>
          </div>
      </div>
      <div class="container-comments">
          <ul class="comments">

          </ul>
      </div>
  </div>
</template>

<script>
import moment from 'moment';
import {getUserInfos} from '@/utils/utils.js'
import {unLikePost, likePost, commentPost} from "@/services/posts.js"

   export default {
     props: ['post'],
     data() {
       return {
        itemPost: this.post,
        userInfo: getUserInfos(),
       }
     },
    methods: {
         formatDate(date) {
          let formatDate = moment(date).format("DD/MM/YY");
           return formatDate;
        },
        likePost(){
            
            likePost(this.itemPost._id)
                .then(res => {
                    this.itemPost.likes.push({user:this.userInfo._id, pseudo: this.userInfo.pseudo})
                })
                .catch((error) => console.log(error))
        },
        unLikePost(){
            unLikePost(this.itemPost._id, this.isLiking._id)
                .then(res => {
                    const indexLike = this.itemPost.likes.findIndex((elt) => elt.user === this.userInfo._id)
                    this.itemPost.likes.splice(indexLike, 1)
                })
                .catch((error) => console.log(error))
        },
        commentPost() {
            commentPost(this.itemPost._id, )
                .then(res => {
                    console.log(res)
                    this.itemPost = res.data.modifiedPost
                })
                .catch((error) => console.log(error))
        }

    },
    computed: {
        isLiking() {
            console.log(this.userInfo)
            const like = this.itemPost.likes.find((elt) =>  elt.user === this.userInfo._id)
            console.log(like)
            return like
        }
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
        height: 45px;
        width: auto;
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
        padding-bottom: 10px;
    }

    img {
        padding-bottom: 10px;
        width: 100%;
        height: auto;
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

     img.likes {
        padding-right: 8px;
        cursor: pointer;
        height: 40px;
        width: auto;
     }

     img.comment {
        padding-left: 8px;  
        cursor: pointer;
        align-self: center;
        height: 40px;
        width: auto;
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