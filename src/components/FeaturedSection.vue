<script setup>
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
            v-for="app in apps"
            :image="app.image"
            :heading="app.heading"
            :description="app.description"
            :redirect="app.redirect"
        />
    </div>
</template>

<script>
import FeaturedItems from './FeaturedItems.vue';
</script>

<style>
.featuredWrapper {
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
    width: 100%;
    min-height: 100vh;
}
@media (max-width: 768px) {
    .featuredWrapper {
        display: block;
        align-items: center;
        justify-items: center;
    }
}
</style>