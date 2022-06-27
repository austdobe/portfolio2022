<script setup>
import profileData from "../store/profileData.json";
import ExperienceCard from "./ExperienceCard.vue";
import PopupModal from "../components/PopupModal.vue";
</script>

<template>
  <div class="wrapper">
    <PopupModal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <h3>{{ modalData.title }}</h3>
        <h3>{{ modalData.company }}</h3>
      </template>

      <template v-slot:body>
        <div v-for="descriptions in modalData.description">
          <h3>{{ descriptions }}</h3>
        </div>
        <div v-for="role in modalData.roles">
          <h3>{{ role.title }}</h3>
          <ul>
            <li v-for="descriptions in role.description">{{ descriptions }}</li>
          </ul>
        </div>
      </template>
      <template v-slot:footer></template>
    </PopupModal>
    <div class="grid">
      <div class="title">
        <img class="profileImage" src="../assets/images/Headshot.jpg" />
        <div class="heading">
          <h1>{{ profile.title }}</h1>
          <h3 v-for="subs in subtitle">{{ subs }}</h3>
          <div class="links">
            <a :href="profile.linkedIn" target="_blank">
              <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
            </a>
            <a :href="profile.facebook" target="_blank">
              <font-awesome-icon icon="fa-brands fa-facebook-f" size="2x" />
            </a>
            <RouterLink to="./resume">
              <font-awesome-icon icon="fa-brands fa-readme" size="2x" />
            </RouterLink>
            <a :href="profile.github" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github-square" size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div class="skills">
        <h1 class="Label">Skills</h1>
        <ul>
          <li v-for="skill in skills"></li>
        </ul>
      </div>
      <div class="experience">
        <h1 class="label">Professional Experience</h1>
        <ExperienceCard
          @click="openModal(job)"
          v-for="job in jobs"
          :bind="key"
          :title="job.title"
          :company="job.company"
          :description="job.description"
          :roles="job.roles"
        />
      </div>
      <div class="objective">
        <div class="objective_description">
          {{ objective }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: profileData[0],
      subtitle: profileData[0].subtitle,
      objective: profileData[0].objective,
      jobs: profileData[0].jobs,
      skills: profileData[0].skills,
      isModalVisible: false,
      modalData: [],
    };
  },
  methods: {
    openModal(data) {
      this.modalData = data;
      console.log(this.modalData)
      this.isModalVisible = true;
      this.$refs.PopupModal.focus()
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.wrapper {
  background: gray;
  color: white;
  width: 100%;
  min-height: 100vh;
}
.grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "skillsColumn titleColumn experienceColumn" "objectiveColumn objectiveColumn objectiveColumn";
}
.label {
  text-decoration: underline;
}

.title {
  margin: auto;
  height: 100%;
  width: 100%;
  justify-self: center;
  align-self: center;
  grid-area: titleColumn;
  grid-column-start: 2;
}
.heading {
  margin: 30px auto 0;
  width: 60%;
  height: 100%;
  text-align: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
}
.profileImage {
  width: 60%;
  margin: 30px 20px;
  border-radius: 50%;
  border: 5px solid white;
}
.links {
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  color: white;
  margin: 20px auto;
  text-align: center;
  width: 60%;
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

.skills {
  margin: auto;
  height: 100%;
  width: 100%;
  grid-column-start: 1;
  grid-area: skillsColumn;
}

.experience {
  margin: auto;
  height: 100%;
  width: 100%;
  grid-column-start: 3;
  grid-area: experienceColumn;
}
.objective {
  margin: auto;
  height: 100%;
  width: 100%;
  grid-row-start: 4;
  grid-area: objectiveColumn;
}
.objective_description {
  font-size: 16px;
  width: 80%;
  margin: 20px auto;
}

@media (max-width: 768px) {
  .grid {
    display: block;
  }
}
</style>
