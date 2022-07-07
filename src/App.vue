<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import FootBar from "./components/FootBar.vue";
import { getAllRepos, getStatsRepos } from "./hooks/getGithubStats";
</script>

<template>
  <NavBar v-if="!$route.meta.hideNavbar" />

  <RouterView />

  <FootBar v-if="!$route.meta.hideNavbar" />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: hsla(160, 100%, 37%, 1);
  border-radius: 10px;
}

@media (hover: hover) {
  a:hover {
    color: darkgreen;
  }
}
</style>
