<template>
    <div class="prospects">
        <div class="fields">
            <div class="field">Nom</div>
            <div class="field">Email</div>
            <div class="field">Telephone</div>
            <div class="field">Message</div>
        </div>
        <div class="prospect" v-for="prospect in prospects"
        :key="prospect.id">
            <div class="name">
                {{prospect.name}}
            </div>
            <div class="email">
                {{prospect.email}}
            </div>
            <div class="telephone">
                {{prospect.telephone}}
            </div>
            <div class="message">
                {{prospect.message}}
            </div>
            <div>
                <button @click="remove(prospect.id)">supprimer</button>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from "../firebase"
import Prospect from "../models/Prospect"

export default {
    data(){
        return {
            prospects: []
        }
    },
    mounted(){
        firebase.collection("prospects").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.prospects.push(Prospect.fromAPI(doc.id, doc.data()));
            });
        });
    },
    methods: {
        remove(prospect_id){
            firebase.collection("prospects").doc(prospect_id)
            .delete().then(() => {
                this.prospects = this.prospects.filter((prospect) => {
                    return prospect_id !== prospect.id;
                });
            })
        }
    }
}
</script>
<style>
.prospects{
}
.prospect{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        border-bottom: 1px solid grey;
        padding: 8px;
    }
.fields{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        font-size: 18px;
        font-weight: 600;
        border-bottom: 1px solid grey;
    }
@media screen and (max-width: 700px) {
    .fields{
        display: block;
    }
    .prospect{
        display: block;
    }

}
</style>