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
    border-radius: 20px;
    align-self: center;
    justify-self: center;
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
@media (max-width: 768px) {
    .heroVideo {
        width: 100%;
        border-radius: 0;
    }
}
</style>
