<script setup>
import { store } from "../store/store";
</script>

<template>
<div class="statsWrapper">
    <div class="statsGrid">
        <h4>JavaScript Project Count: {{ javascriptProjects }}</h4>
        <h4>Current Projects Count: {{projects.length}}</h4>
        <h3 v-for="project in projects">{{project.name}}</h3>
    </div>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      projects: store.projects,
      languages: store.languages,
    };
  },
  computed: {
    javascriptProjects() {
      console.log(this.projects)
      const project = this.projects.filter(
        (project) => project.language === "JavaScript"
      );
      return project.length;
    },
    languagesRepo() {
      console.log(this.languages);
      return this.languages;
    },
  },
};
</script>
<style>
.statsWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
  min-height: 100vh
}

</style>
