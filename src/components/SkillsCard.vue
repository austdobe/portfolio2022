<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  proficiency: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="skillCard">
    <h3 class="skillHeader">{{ title }}</h3>
    <p class="skillMeter"></p>
  </div>
</template>
<style>
.skillCard {
  width: 90%;
  font-size: 14px;
  margin: 10px auto;
  border: 1px solid white;
  border-radius: 10px;
  text-align: left;
}
.skillHeader {
  margin: 10px 20px;
}
.skillMeter {
  margin: 10px 20px;
}
</style>
