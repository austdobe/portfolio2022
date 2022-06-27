<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  redirect: {
    type: String,
    required: true,
  },
});
const getImageUrl = (image) => {
  return new URL(`../assets/images/${image}`, import.meta.url).href;
};
</script>
<!-- add hover effect onto the details section that shows when image is hovered on.  -->
<template>
  <div class="item">
    <div class="imageWrapper">
      <router-link class="cardAction" :to="{ path: `/work/${redirect}` }">
        <img :src="getImageUrl(image)" />
      </router-link>
    </div>
    <div class="details">
      <h3>
        {{ heading }}
      </h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  width: 75%;
  min-height: 300px;
  display: flex;
  border-radius: 25px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 25px 25px 0 0;
}
.imageWrapper {
  position: absolute;
  height: 50%;
  width: 100%;
  top: 0;
  overflow: hidden;
}
.imageWrapper:hover + .details {
  display: flex;
}
.cardAction {
  color: white;
  cursor: pointer;
}

.details {
  background: linear-gradient(112.38deg, #a6a6a6 -36.8%, #4d4d4d 112.38%);
  color: white;
  display: block;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 25px 25px;
  padding: 10px 20px;
  align-self: center;
  height: 50%;
  width: 100%;
  display: none;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
</style>
