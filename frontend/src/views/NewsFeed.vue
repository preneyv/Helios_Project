<template> 
<div class="main">
    <div class="fil-actu">
        <h1 class="h1">Mes actualités</h1>
        <div class="toggle-btns">
            <button class="button toggle" id="btn_posts" @click="togglePosts" :class="[currentStateToggle ? 'active' : '']">Posts</button>
            <button class="button toggle" id="btn_events"  @click="toggleEvents" :class="[!currentStateToggle ? 'active' : '']">Événements</button>
        </div>
        <div class="input-post">
            <button @click="detectPopUp">{{ textButton }}</button>
        </div>
        <PopUp v-if="showModalPost" @close="closeModal('post')" headTitle="Créer un post"  class="post" v-bind:classPopUp = "[errors.length ? 'yes':'no']" :actionButton="addPost">
            <template v-slot:header>
                <button class="modal-default-button" @click="showModalPost = false"><img :src="require('@/assets/cancel.svg')" alt="fermer la pop up"></button>
            </template> 
            <template v-slot:content>
                <form @submit.prevent="">
                    <p class="errors" v-if="errors.length">
                        <b>Veuillez corriger ces erreurs pour vous connecter :</b>
                        <ul>
                            <li class="error" v-for="error in errors" v-bind:key="error">{{ error }}, </li>
                        </ul>
                    </p>
                    <div class="form-group-100">
                        <textarea rows="5" id="content" name="desc" placeholder="Description" @input="updateFormData"></textarea>
                    </div>
                    <div class="form-group--100">
                        <label for="media" class="img-btn">Image +</label>
                        <input type="file" class="img-input" id="media" name="postImage" @input="updateFormData">
                        <span>
                            <p class="name-file" >{{ getImageName }}</p>
                            <button class="modal-default-button" @click=" () => formData.media = null "><img :src="require('@/assets/cancel.svg')" alt="Retirer image"></button>
                        </span>
                    </div>
                </form>
            </template>
        </PopUp>
        <PopUp v-if="showModalEvent" @close="closeModal('event')" headTitle="Créer un événement"  class="event" v-bind:classPopUp = "[errors.length ? 'yes':'no']" >
            <template v-slot:header>
                <button class="modal-default-button" @click="showModalEvent = false"><img :src="require('@/assets/cancel.svg')" alt="fermer la pop up"></button>
            </template> 
            <template v-slot:content>
                <form @submit.prevent="">
                    <p class="errors" v-if="errors.length">
                        <b>Veuillez corriger ces erreurs pour vous connecter :</b>
                        <ul>
                            <li class="error" v-for="error in errors" v-bind:key="error">{{ error }}, </li>
                        </ul>
                    </p>
                    <div class="form-group--100">
                        <input type="text" id="title" name="title" placeholder="Titre" @input="updateFormData"/>
                        <input type="text" id="adress" name="adress" placeholder="Adresse" @input="updateFormData"/>
                        <input type="text" id="members" name="members" placeholder="Membres" @input="updateFormData"/>
                    </div>
                    <div class="form-group--100">
                        <textarea rows="5" id="descEvent" name="desc" placeholder="Description" @input="updateFormData"></textarea>
                    </div>
                     <div class="form-group--100">
                        <label for="date" class="date-label">Date</label>
                        <p class="le">Le</p>
                        <input type="date" class="date" id="date" name="date" @input="updateFormData">
                         <p class="de">de </p>
                        <input type="time" class="horaire start" id="timeStart" name="timeStart" @input="updateFormData">
                        <p class="a">à </p>
                        <input type="time" class="horaire end" id="timeEnd" name="timeEnd" @input="updateFormData">
                    </div>
                    <div class="form-group--100">
                        <label for="postImage" class="img-btn">Image +</label>
                        <input type="file" class="img-input" id="postImage" name="postImage" @input="updateFormData">
                        <span v-if="getImageName">
                            <p class="name-file" >{{ getImageName }}</p>
                            <button class="modal-default-button" @click=" () => formData.media = null "><img :src="require('@/assets/cancel.svg')" alt="Retirer image"></button>
                        </span>
                    </div>
                </form>
            </template>
        </PopUp>
        <PopUp v-if="actionSuccess" headTitle="Post ajouté avec succès" class="popUpSucess" v-bind:class = "[showModalPostSucess ? 'no':'yes']" :actionButton="() => actionSuccess = false ">
             <template v-slot:header>
                <button class="modal-default-button" @click="closeModalSucess"><img :src="require('@/assets/cancel.svg')" alt="fermer la pop up"></button>
            </template> 
        </PopUp>
        <div class="actus">
            <ul v-if="currentStateToggle" id="posts">
                <li class="post" v-for="post in getPosts" :key="post.id">
                    <Post :post="post"></Post>
                </li>
            </ul>
            <ul v-else id="events">
                <li class="event">
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>

import PopUp from '../components/PopUp.vue'
import UploadFile from "@/services/loadImage.js"
import {isImage} from "@/utils/utils.js"
import Post from '../components/Post.vue'

import {getAllPost, insertOnePost} from "@/services/posts.js"
 
export default {
    name: 'NewsFeed',
    components: {
        PopUp,
        Post
    },
    data() {
        return {
            currentStateToggle: true,
            showModalPost: false,
            showModalEvent: false,
            showModalPostSucess: false,
            formData:{},
            errors: [],
            textButton: "Que souhaitez-vous partager aujourd'hui ?",
            listPost:[],
            actionSuccess: false
        }
    },
    /*
    * Récupération des posts à partir de l'API en backend
    */
    async mounted(){
        const {data} = await getAllPost()
        this.listPost = data.posts || []
    },
    computed: {
        /*
        * Méthode retournant les posts de la donnée "listPost"
        */
        getPosts() {
            return this.listPost;
        },

        /*
        * Méthode retournant le nom de l'image ajouté lors de la création d'un post
        */
        getImageName() {
            return this.formData.media?.name
        }
    },
    methods: {

        /*
        * Méthode permettant de savoir quel type de post afficher dans le feed et 
        * également quel type de message afficher dans l'input pour créer un post ou un événement
        */
        togglePosts() {
            if(!this.currentStateToggle) {
             this.currentStateToggle = !this.currentStateToggle;
                this.textButton = "Que souhaitez-vous partager aujourd'hui ?"
            } 
        },

        /*
        * Méthode permettant de savoir quel type de post afficher dans le feed et 
        * également quel type de message afficher dans l'input pour créer un post ou un événement
        */
        toggleEvents() {
            if(this.currentStateToggle) {
                this.currentStateToggle = !this.currentStateToggle;
                this.textButton = "Quel événement voulez-vous créer aujourd'hui ?"  
            }
        },

        /*
        * Méthode permettant de savoir quelle pop up afficher 
        * en fonction du type de post que l'on souhaite créer (post ou événement)
        */
        detectPopUp() {
            if(this.currentStateToggle) {
                this.showModalPost = true
            }else {
                this.showModalEvent = true
            }
        },

        /*
        * Méthode permettant de fermer une pop up
        */
        closeModal(modal) {
            modal === "post" ? this.showModalPost = false : this.showModalEvent = false
            this.formData = {}
            this.errors = []
        },

        closeModalSucess() {
            console.log(this.showModalPostSucess);
            this.showModalPostSucess = false;
             console.log(this.showModalPostSucess);
            
        },

        updateFormData(e) {
            e.target.type ===  "file" ? this.formData[e.target.id] = e.target.files[0] : this.formData[e.target.id] = e.target.value      
        },

        /*
        * Méthode permettant d'ajouter un post dans la BDD
        */
        addPost() {
            if (this.formData.content) {
                    
                if(this.formData.media && isImage(this.formData.media.name)) {
                    UploadFile(this.formData.media)
                    this.formData.media = {name:this.formData.media.name, type: this.formData.media.type}
                }
                    
                const data = {...this.formData, group: null}
                insertOnePost(data)
                    .then(res => this.handleSuccess(res, "post"))
                    .catch((error) => this.handleError(error))
            }

            this.errors = [];
            if (!this.formData.content && !this.formData.media) {
                this.errors.push('Description ou image demandé.');
            }  
        },

        /*
        * Méthode qui va afficher un message d'erreur si un problème survient au niveau du serveur
        */
        handleError(error) {
            this.errors = [...this.errors,  error.response?.data?.error || "Erreur serveur" ]
        },

        /*
        * Méthode permettant de gérer le succès de l'ajout d'un post, elle permet d'ajouter
        * le nouveau post à la list des posts actuelles et donc de permettre l'affichage de celui-ci
        * la connexion ou l'inscription s'est bien déroulée
        */
        handleSuccess(res, type) {
            this.closeModal(type)
            this.actionSuccess = true;
              this.showModalPostSucess = true;
            let newPost = res.data;
            this.listPost = [newPost, ...this.listPost]
        },
    }
}
</script>

<style lang="scss">

    .fil-actu {
        height: 100%;

        .toggle-btns {
            display: inline-flex;
            width: 100%;
            padding-bottom: 2%;

            button {
                padding: 9px 28px;
                color: $white;
                width: 25%;
                background-color: $light-black;
                border-radius: 10px;
                filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
                margin-right: 10px;
                transition: all 0.2s linear;
                border: none;

                &:hover {
                    border: none;
                    background-color: $light-black;
                }
            }

            button.active {
                padding: 9px 28px;
                color: $white;
                width: 25%;
                background-color: $black;
                border-radius: 10px;
                filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
                margin-right: 10px;
                transition: all 0.2s linear;
                border: none;
            }       
        }

        .input-post {
            button {
                padding: 9px 20px 9px 20px;
                color: $white;
                width: 100%;
                background-color: $black;
                border-radius: 10px;
                filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
                margin-right: 10px;
                text-align: left;
                font-size: 16px;
                border: none;

                &:hover {
                    border: none;
                    background-color: $light-black;
                }
            }
        }

        .actus {
            padding-bottom: 10px;
        }

    }

    #content {
        margin-bottom: 30px;
    }

    // Post 
    .post {
        background-color: $black;
        color: $white;
        margin: 25px 0;
        border-radius: 20px;
    }

    //Pop up sucess creation post
    .popUpSucess {
        height: 12%;
        background-color: $primary !important;
        color: $white;
        padding: 0 !important;

        .basic-popUp-head {
            height: 100%;
            display: flex;
            justify-content: center;

            h2 {
                font-size: 20px;
                display: flex;
                align-items: center;
                padding: 20px 0 !important;
            }
        }

        .basic-popUp-footer {
            display: none;
        }
    }

    .popUpSucess.yes {
        display: none;
    }

    .name-file {
        color: $black;
        padding-top: 15px;
    }

</style>
