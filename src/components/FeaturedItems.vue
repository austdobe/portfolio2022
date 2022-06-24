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
  }
  
});
const getImageUrl = (image) => {
  return new URL(`../assets/images/${image}`, import.meta.url).href
}
</script>

<template>
  <div class="item">
    <div class="imageWrapper">
      <img :src='getImageUrl(image)' />
    </div>
    <div class="details">
      <h3>
        {{heading}}
      </h3>
      <p>{{description}}</p>
      <router-link class="cardAction" :to='{path: `${redirect}`}'>Check it out</router-link>
    </div>
    
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  width: 75%;
  min-height: 300px;
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 25px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 25px 25px 0 0;
}
.imageWrapper{
  position: absolute;
  height: 50%;
  width: 100%;
  top: 0;
  overflow: hidden;
}
.cardAction{
  color: white;
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;

}
.cardAction:hover {
  background-color: #a6a6a6;
}
.details{
  background: linear-gradient(112.38deg, #a6a6a6 -36.8%, #4d4d4d 112.38%);
  color: white;
  display: block;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 25px 25px;
  align-self: center;
  height: 50%;
  width: 100%;
}
h3 {
  margin: 10px 20px; 
}
p{
  margin: 10px 20px;
}

</style>
