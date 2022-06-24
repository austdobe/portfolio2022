<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav>
    <RouterLink to="/">Austin Dober</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/work">Work</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
</template>

<style>
nav {
  display: flex;
  width: 100%;
  max-height: 80px;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
