<script setup>
defineProps({
  image: {
    type: Array,
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
<template>
  <div class="item">
    <div class="imageWrapper">
       
        <img :src="getImageUrl(image)" />

        <div class="cardAction"> 
          <div class="detailHeading">
            <h2>{{ heading }} </h2>
            <p>{{ description }}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  height: 200px;
  width: 200px;
  display: flex;
  border-radius: 25px;
  text-align: center;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 25px;

}
.cardAction {
  display: none;
  color: white;
  height: 100%;
  background: linear-gradient(360deg,  rgba(77, 77, 77, .8) 100%, rgba(166, 166, 166, 0.3)60.38%);
  color: white;
  display: block;
  position: absolute;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  top:0;
  border-radius: 25px;
  cursor: pointer;
  text-align: center;

}
.cardAction:hover {
  background-color: rgba(77, 77, 77, .8);
  transition: background-color .4s ease-in-out;
}
.detailHeading {
  position: absolute;
  width:100%;
  padding: 10px 20px;
  margin: 0 auto;
  bottom: 10px;
}
</style>
