<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="wrapper">
    <div class="icon" @click="handleToggle">
      <font-awesome-icon v-if="!isShown" icon="fa-solid fa-bars" size="2x" />
      
      <div>
        <div v-if="isShown" class="mobileNavItems">
            <font-awesome-icon
            v-if="isShown"
            class="mobileNavIcon"
            icon="fa-solid fa-circle-xmark"
            size="2x"
          />
          <div class="mobileNavLinks">
            <RouterLink class="title" to="/">@Austin Dober</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/work">Work</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="navItems">
      <RouterLink class="title" to="/">@Austin Dober</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/work">Work</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    handleToggle() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  background-color: transparent;
  width: 90%;
  height: var(--nav-height);
  font-size: 12px;
  margin: 0 30px;
  text-align: center;
}
.options {
  position: absolute;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
}
.title {
  margin-top: 20px;
  margin-left: 20px;
}
.icon {
  color: white;
  display: none;
  margin: auto 0;
  height: fit-content;
  width: fit-content;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 10px;
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
@media screen and (max-width: 768px) {
  .iconWrapper {
    display: block;
    border: 1px solid white;
  }
  .icon {
    display: flex;
  }
  .navItems {
    width: 100%;
    margin: 20px auto;
    display: none;
    z-index: 99;
  }
  .navItems a {
    width: 100%;
    border: none;
    text-align: center;
  }
  .mobileNavIcon {
    position: absolute;
    left: 30px;
    top: 30px;
  }
  .mobileNavLinks{
    margin-top: 200px;
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
  }
  .mobileNavItems a {
    width: 100%;
    padding: 10px 20px;
    align-self: center;
    justify-self: center;
    margin: 0 auto;
    color: white;
  }
  .mobileNavItems a:hover {
    background-color: darkgray;
  }
  .mobileNavItems {
    position: fixed;
    background-color: gray;
    align-items: center;
    justify-items: center;
    right: 0;
    top:0;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    z-index: 99;
  }
}
</style>
