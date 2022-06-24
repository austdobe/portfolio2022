<script setup>
import FeaturedItems from '../components/FeaturedItems.vue';
import appData from '../store/featuredApps.json'
import GameFeature from '../components/gameFeature.vue';
</script>

<template>
    <div class="grid">
        <FeaturedItems v-for="app in isFeatured" 
            :image="app.image"
            :heading="app.heading"
            :description="app.description"
            :redirect="app.redirect"
        />
        <FeaturedItems v-if="showMore" v-for="app in notFeatured"
            :image="app.image"
            :heading="app.heading"
            :description="app.description"
            :redirect="app.redirect"
        />
    </div>  
    <button @click="handleShow" class="toggleAction">{{handleLabel}}</button>      
     
</template>
<script>
export default {
    data() {
        return {
            apps: appData,
            showMore: false
        }
    },
    computed: {
        isFeatured(){
            return this.apps.filter(app => app.isFeatured)
        },
        notFeatured(){
            return this.apps.filter(app => !app.isFeatured)
        },
        handleLabel(){
            if(!this.showMore){
                return "Show More"
            }
            return "Show Less"
        }
    },
    methods: {
        handleShow(){
            this.showMore = !this.showMore
        }
    }
}
</script>

<style>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
}
.toggleAction {
    color: white;
    margin-top: 200px;
    background: linear-gradient(112.38deg, #797777 -36.38%, #1b1b1b 130.38%);
    padding: 10px 20px;
    border: 1px solid darkgray;
    border-radius: 10px;
    cursor: pointer;
}
.toggleAction:hover {
    background: #999999;
}
</style>