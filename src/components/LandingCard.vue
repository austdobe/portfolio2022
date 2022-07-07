<script setup>
import { RouterLink } from "vue-router";
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
        clean UX/UI. Feel free to look around and get to
        <RouterLink to="/about">know me</RouterLink>. If you have any questions,
        or would like to work together,
        <RouterLink to="/contact">contact</RouterLink> me
        directly.
        <div class="links">
          <a href="https://linkedin.com/in/austin-dober" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
          </a>
          <a href="https://www.facebook.com/adoberweb" target="_blank">
            <font-awesome-icon icon="fa-brands fa-facebook-f" size="2x" />
          </a>
          <RouterLink to="./resume">
            <font-awesome-icon icon="fa-brands fa-readme" size="2x" />
          </RouterLink>
          <a href="https://github.com/austdobe" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github-square" size="2x" />
          </a>
        </div>
      </h3>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(90deg, #181818 36.2%, rgba(24, 24, 24, 0) 112.3%),
    url("../assets/images/forestBackground.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
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
  margin: 155px 30px;
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
.links {
  display: grid;
  grid-auto-flow: column;
  margin-top: 20px;
  text-align: center;
  width: 50%;
}

.links a {
  color: white;
  height: 100%;
  width: 100%;
}
.links a:hover {
  color: #636261;
  background-color: transparent;
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
@media (max-width: 768px) {
  .container {
    display: block;
    background: linear-gradient(
        180deg,
        rgba(24, 24, 24, 0.8) 50%,
        rgba(24, 24, 24, 0) 112.3%
      ),
      url("../assets/images/forestBackground.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .greetings {
    color: white;
    width: 90%;
    font-size: 28px;
    margin: 20px auto;
    align-items: center;
    justify-content: center;
    align-content: center;
    justify-items: center;
  }
  .links {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
