<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <h1>Austin Dober</h1>
    <h2>Full Stack Software Engineer</h2>
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
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 300px;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  align-content: center;
  display: grid;
}
</style>
