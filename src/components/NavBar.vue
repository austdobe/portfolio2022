<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav>
    <RouterLink class='title' to="/">@Austin Dober</RouterLink>
    <div class="options">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/work">Work</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
  </div>
  </nav>
</template>

<style>
nav {
  display: flex;
  width: 100%;
  height: var(--nav-height);
  font-size: 12px;
  margin: 0 30px;
  text-align: center;
}
.options{
  position: absolute;
  right: 0;
  margin-top: 20px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  font-size: 18px;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin: 0;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
