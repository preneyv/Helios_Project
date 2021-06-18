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
        <PopUp v-if="showModalPost" @close="closeModal('post')" headTitle="Créer un post"  class="post" v-bind:classPopUp = "[errorsPost.length ? 'yes':'no']" >
            <template v-slot:header>
                <button class="modal-default-button" @click="showModalPost = false"><img :src="require('@/assets/cancel.svg')" alt="fermer la pop up"></button>
            </template> 
            <template v-slot:content>
                <form @submit.prevent="signin()">
                    <p class="errors" v-if="errorsPost.length">
                        <b>Veuillez corriger ces erreurs pour vous connecter :</b>
                        <ul>
                        <li class="error" v-for="error in errorsPost" v-bind:key="error">{{ error }}, </li>
                        </ul>
                    </p>
                    <div class="form-group-100">
                        <textarea rows="5" id="desc" name="desc" placeholder="Description" @input="updateFormData"></textarea>
                    </div>
                    <div class="form-group--100">
                        <label for="postImage" class="img-btn">Image +</label>
                        <input type="file" class="img-input" id="postImage" name="postImage" @input="updateFormData">
                        <p class="name-file">{{ formData.file }}</p>
                    </div>
                </form>
            </template>
        </PopUp>
        <PopUp v-if="showModalEvent" @close="closeModal('event')" headTitle="Créer un événement"  class="event" v-bind:classPopUp = "[errorsEvent.length ? 'yes':'no']" >
            <template v-slot:header>
                <button class="modal-default-button" @click="showModalEvent = false"><img :src="require('@/assets/cancel.svg')" alt="fermer la pop up"></button>
            </template> 
            <template v-slot:content>
                <form @submit.prevent="signin()">
                    <p class="errors" v-if="errorsEvent.length">
                        <b>Veuillez corriger ces erreurs pour vous connecter :</b>
                        <ul>
                        <li class="error" v-for="error in errorsEvent" v-bind:key="error">{{ error }}, </li>
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
            
        </div>
    </div>
</div>
</template>
<script>
    /* eslint-disable */ 
    import Nav from '../components/Nav.vue'
    import BandeauRight from '../components/BandeauRight.vue'
    import PopUp from '../components/PopUp.vue'
    import AuthServices from "@/services/auth.js"
    export default {
        name: 'filActu',
        components: {
            Nav,
            BandeauRight,
            PopUp
        },
        data() {
            return {
                currentStateToggle: true,
                showModalPost: false,
                showModalEvent: false,
                formData:{},
                errorsPost: [],
                errorsEvent: [],
                textButton: "Que souhaitez-vous partager aujourd'hui ?",
            }
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
                console.log(modal);
                modal === "post" ? this.showModalPost = false : this.showModalEvent = false
                this.formData = {}
            },
            updateFormData(e) {
                this.formData[e.target.id] = e.target.value
            },
            signin() {
                if (this.desc || this.postImage) {
                    const data = this.formData
                    AuthServices.signin(data)
                        .then(this.handleSuccess())
                        .catch((error) => this.handleError(error))
                }
                this.errors = [];
                if (!this.desc && !this.postImage) {
                    this.errors.push('Description ou image demandé.');
                }
                
                e.preventDefault();
            },
            handleError(error) {
                console.log(error)
                this.error = { type: "error" }
                this.error.message =
                    error.response?.data?.message || "Erreur serveur"
            },
            handleSuccess() {
                const queryString = window.location.search
                console.log(window.location)
                const params = new URLSearchParams(queryString)
                const redirectTo = params.get("redirectTo") || "filActu"
                if (redirectTo === "back")
                {
                    this.$router.go(-1)
                }
                else
                {
                    this.$router.push( redirectTo )
                }
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

}


#desc {
    margin-bottom: 30px;
}
</style>
