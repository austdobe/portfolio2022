<script setup>
import SkillCards from "./SkillCards.vue";

defineProps({
  profileData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="profileGrid" id="me">
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
    <div class="objective">
      <div class="objective_description" v-for="objectives in objective">
        <p>{{ objectives }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: this.profileData,
      subtitle: this.profileData.subtitle,
      objective: this.profileData.objective,
      jobs: this.profileData.jobs,
      skills: this.profileData.skills[0],
      software: this.profileData.software,
      isModalVisible: false,
      modalData: [],
    };
  },
  methods: {
    openModal(data) {
      this.modalData = data;
      console.log(this.modalData);
      this.isModalVisible = true;
      this.$refs.PopupModal.focus();
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.profileWrapper {
  background: gray;
  color: white;
  width: 100%;
  min-height: 100vh;
}
.profileGrid {
  color: white;
  width: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
}
.label {
  text-decoration: underline;
}

.title {
  margin: auto;
  height: 100%;
  width: 100%;
}
.heading {
  margin: 0 auto;
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
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
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
.objective {
  height: 100%;
  padding: 30px;
}
.objective_description {
  font-size: 18px;
  width: 100%;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.objective_description p {
  margin-top: 20px;
  text-align: left;
}

@media (max-width: 768px) {
  .profileGrid {
    display: block;
  }
}
</style>
