<script setup>
import { getRepoLanguages } from "../hooks/getGithubStats";
import { getAllRepos } from "../hooks/getGithubStats";
import { store } from "../store/store";
</script>

<template>
  <h1>JavaScript Project Count: {{ javascriptProjects }}</h1>
  <h1 v-for="language in languages">{{ language }}</h1>
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
