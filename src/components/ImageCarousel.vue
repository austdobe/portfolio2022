<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
defineProps({
    images : {
        type: Array,
        required: true
    },
    app: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <Carousel class="imageCarousel" :autoplay="3000" :wrap-around="true" :pauseAutoplayOnHover="true">
        <Slide v-for="image in renderImages" :key="image">
            <!-- <h3 class="slideOverlay">{{appData}}</h3> -->
            <img class="carouselImages" :src='image' />
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </carousel>
</template>
<script>
export default {
    data() {
        return {
            appData: this.app
        }
    },
    computed: {
        renderImages() {
            const imageURL = []
            const images = this.appData.map(image => {
                console.log(image.images)
                for(let i in image.images) {
                imageURL.push(new URL(`../assets/images/hero/${image.images[i]}`, import.meta.url).href)
                }
            });
            console.log(imageURL)
            return imageURL
        }
    }
}
</script>

<style scoped>
.carouselImages {
    width: 100%;
    height: 100%;
    object-position: right;
    right: 0;
    border-radius: 20px;
}
.slideOverlay{
    position: absolute;
    z-index: 2;
    width: 100%;
    left: 20px;
    height: 100%;
    top: 0;
    vertical-align: middle;
    background: rgba(25,25,25,0.3)
}
.carousel__prev,
.carousel__next {
  display: none;
}
</style>
