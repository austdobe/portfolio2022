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
        <RouterLink to="/work#featured">
            <font-awesome-icon
                class="icon"
                icon="fa-solid fa-angle-down"
                size="2x"
                bounce
            />
        </RouterLink>
    </div>
</template>

<style scoped>
.hero {
    display: block;
    height: calc(100vh - var(--nav-height));
    width: 100%;
}
.icon {
  color: white;
  position: absolute;
  bottom: var(--nav-height);
}
</style>
