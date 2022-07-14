<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
<div>
  <a class="return" href="/" target="_blank">
            return to top
  </a>
  <hr>
  <div class="wrapper">
    <div class="details">
      <h1>Austin Dober</h1>
      <h2>Full Stack Software Engineer</h2>
      
      <div class="links">
          <h3>Check out my socials!</h3>
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
    </div>
    <div class="linkWrapper">
      <div>
        <h3>
          Site Links
        </h3>
        <RouterLink to="/about">About me</RouterLink>
        <RouterLink to="/work">My Work</RouterLink>
        <RouterLink to="/contact">Contact me</RouterLink>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
a{
  width: 100%;
  margin: 10px;
  color: white;
}
.wrapper {
  width: 90%;
  height: var(--footer-height);
  font-size: 12px;
  margin: 30px auto;
  display: grid;
  align-content: center;
  align-items: center;
  color: white;
  grid-template-columns: 2fr 1fr;
}
.details {
  display: block;
}
.links{
  width: 25%;
  margin: 0 auto;
}
.links h3{
  width: 100%;
  display: block;
  margin-bottom: 10px;
}
.links a{
  color: white;
  margin: 10px;
}
.linkWrapper{
  display: block;
  margin: 0 auto;
}
.linkWrapper a{
  display: flex;
  align-self: center;
  color: white;
  justify-self: center;}
</style>
