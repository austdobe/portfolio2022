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
    <GameFeature class="gameFeature" :appURL="iFrameData" :screenSize="mobile"></GameFeature>
    <ul class="featuredDropdown">
        <li class="dropdownItem">Mobile</li>
        <li class="dropdownItem">Desktop</li>
    </ul>
</template>

<script>
import FeaturedItems from './FeaturedItems.vue'
export default {
    data(){
        return {
            iFrameData: ''
        }
    },
    methods: {
        handleIFrame(job) { 
            this.iFrameData = job.application 

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
.dropdownItem{
    list-style: none;
}
.gameFeature{
    grid-row-start: 2;
}
@media (max-width: 768px) {
    .featuredWrapper {
        display: block;
        align-items: center;
        justify-items: center;
    }
}
</style>