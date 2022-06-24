<script setup>
import LandingImage from './LandingImage.vue';
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
      <h3>
        I am Austin Dober, a Fullstack Software Engineer with the main focus of
        clean UX/UI. Feel free to look around and see what I have to offer. If
        you have any questions, or would like to work together, feel free to
        <a target="_blank" href="mailto: austin.dober@gmail.com">contact</a> me.
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    flies: 15
  }
}
</script>

<style scoped>
.container {

  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(90deg, #181818 36.2%, rgba(24, 24, 24, 0) 112.3%), url('../assets/images/forestBackground.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding: 5px 10px;
  align-items: center;
}
.greetings {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 80%;
  margin: 155px 0;
}

h1 {
  display: block;
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  display: block;
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
