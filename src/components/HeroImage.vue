<script setup>
import ImageCarousel from "./ImageCarousel.vue";

defineProps({
    images: {
        type: Array,
        required: true
    },
    app: {
        type: Array,
        required: true,
    }
});
</script>

<template>
    <div class="hero">
        <ImageCarousel :images="images" :app="app"/>
    </div>
</template>

<style scoped>
.hero {
    display: block;
    height: calc(100vh - var(--nav-height));
    width: 100%;
}
.images {
}
</style>
