<script setup>
import GameFeature from './GameFeature.vue';

defineProps({
    apps: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="featuredWrapper">
        <FeaturedItems
            @click="handleIFrame(app)"
            v-for="app in apps"
            :image="app.image"
            :heading="app.heading"
            :description="app.description"
            :redirect="app.redirect"
        />
    </div>
    <div class="featuredDropdown">
        <font-awesome-icon  icon="fa-solid fa-caret-down" />
        <button class="dropdownItem" @click="toggleScreen('mobile')">Mobile</button>
        <button class="dropdownItem" @click="toggleScreen('desktop')">Desktop</button>
    </div>
    <GameFeature class="gameFeature" :appURL="iFrameData" :screenSize="screenSize"></GameFeature>
    
</template>

<script>
import FeaturedItems from './FeaturedItems.vue'
export default {
    data(){
        return {
            iFrameData: '',
            screenSize: 'Desktop'
        }
    },
    methods: {
        handleIFrame(job) { 
            this.iFrameData = job.application 

        },
        toggleScreen(value) {
            this.screenSize = value
        }
    }
}
</script>

<style>
.featuredWrapper {
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
    align-items: center;
    justify-items: center;
    width: 100%;
}
.featuredDropdown {
    width: 50px;
    height: 30px;
    border-radius: 20px;
    z-index: 1;
}
.featuredDropdown:hover .dropdownItem{
    display: block;
    color: white;
    position: relative;
    background-color: gray;
}
.dropdownItem{
    display: none;
    border-radius: 10px;
    list-style: none;
}
.gameFeature{
    grid-row-start: 2;
}
@media (max-width: 768px) {
    .featuredWrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-items: center;
        justify-content: center;
    }
}
</style>