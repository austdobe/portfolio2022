<script setup>

</script>

<template>
    <div class="hero">
        <video class="heroVideo" autoplay loop preload muted>
            <source src="../assets/video/EditAppDemo.mp4" type="video/mp4">
        </video>
    </div>
</template>

<style scoped>
.hero {
    display: block;
    width: 100%;
    background: rgba(25,25,25, .3);
}
.heroVideo{
    min-width: 100%;
    min-height:calc(100vh - var(--nav-height));
    border-radius: 20px;
    height: auto;
    width: auto;
    z-index: -1;
}
.icon {
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  bottom: var(--nav-height);
}
.workCarousel {
    position: absolute;
    right: 0;
    width: 60%;
}
</style>
