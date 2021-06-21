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
        <!-- :actionButton="signup" -->
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
                        <p class="name-file">{{ formData.file }}</p>
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
                        <p class="name-file">{{ formData.file }}</p>
                    </div>
                </form>
            </template>
        </PopUp>
        
        <div class="actus">
            <ul id="posts">
                <li class="post" v-for="post in listPost" :key="post.id">
                    <!-- {{ post.content }} -->
                    <Post :post="post"></Post>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
    /* eslint-disable */ 
    import Nav from '../components/Nav.vue'
    import BandeauRight from '../components/BandeauRight.vue'
    import PopUp from '../components/PopUp.vue'
    import UploadFile from "@/services/loadImage.js"
    import {isImage} from "@/utils/utils.js"
    import Post from '../components/Post.vue'

    import {getAllPost, insertOnePost} from "@/services/posts.js"

    export default {
        name: 'filActu',
        components: {
            Nav,
            BandeauRight,
            PopUp,
            Post
        },
        data() {
            return {
                currentStateToggle: true,
                showModalPost: false,
                showModalEvent: false,
                formData:{},
                errors: [],
                textButton: "Que souhaitez-vous partager aujourd'hui ?",
                listPost:[]
            }
        },
        async mounted(){
            const {data} = await getAllPost()
            this.listPost = data.posts || []
        },
        methods: {
            togglePosts() {
                if(this.currentStateToggle) {
            
                } else {
                    
                    this.currentStateToggle = !this.currentStateToggle;
                     this.textButton = "Que souhaitez-vous partager aujourd'hui ?"
                }
                
            },
            toggleEvents() {
                if(!this.currentStateToggle) {
                    
                } else { 
                    this.currentStateToggle = !this.currentStateToggle;
                   
                    this.textButton = "Quel événement voulez-vous créer aujourd'hui ?"
                }
            },
            detectPopUp() {
                if(this.currentStateToggle) {
                    this.showModalPost = true
                }else {
                    this.showModalEvent = true
                }
                
            },
            closeModal(modal) {
                modal === "post" ? this.showModalPost = false : this.showModalEvent = false
                this.formData = {}
                this.errors = []
            },
            updateFormData(e) {
                 e.target.type ===  "file" ? this.formData[e.target.id] = e.target.files[0] : this.formData[e.target.id] = e.target.value
            },
            addPost() {
                if (this.formData.content && this.formData.media && isImage(this.formData.media.name)) {
                    UploadFile(this.formData.media)
                    this.formData.media = {name:this.formData.media.name, type: this.formData.media.type}
                    const data = {...this.formData, group: null}
                    insertOnePost(data)
                        // .then(this.handleSuccess())
                        .then(this.handleSuccess(res))
                        .catch((error) => this.handleError(error))
                }

                this.errors = [];
                if (!this.formData.content && !this.formData.media) {
                    this.errors.push('Description ou image demandé.');
                }
                
            },
            handleError(error) {
                this.errors = [...this.errors,  error.response?.data?.message || "Erreur serveur" ]
            },
            handleSuccess() {
                
            },
        },
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
        width: 20%;
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
        width: 20%;
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
</style>
