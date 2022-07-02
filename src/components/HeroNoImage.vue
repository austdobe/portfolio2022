<script setup>
import { RouterLink } from "vue-router";
defineProps({
  msg: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: false,
  },
});
</script>

<template>
  <div class="hero">
    <div class="heroDetails">
      <h1>{{ msg }}</h1>
    </div>
    <RouterLink to="/about#contact">
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
  height: calc(100vh - var(--nav-height));
  width: 100%;
  background: url({{image}});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.heroDetails {
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: xx-large;
}
.icon {
  color: white;
  position: absolute;
  bottom: 0;
}
</style>
