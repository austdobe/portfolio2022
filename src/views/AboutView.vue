<script setup>
import HeroNoImage from "../components/HeroNoImage.vue";
import ProfileSection from "../components/ProfileSection.vue";
import PopupModal from "../components/PopupModal.vue";
import ExperienceCard from "../components/ExperienceCard.vue";

import profileData from "../store/profileData.json";
import SkillCards from "../components/SkillCards.vue";
import ContactMeBanner from "../components/contactMeBanner.vue";
</script>

<template>
  <PopupModal
    v-show="isModalVisible"
    @close="closeModal"
    :modalData="modalData"
  />
  <section>
    <HeroNoImage msg="I BUILD FULL STACK DIGITAL ASSETS" />
  </section>
  <section id="contact">
    <ContactMeBanner title="Contact me" description="Have a great idea or want to work on something together?" />
  </section>
  <section>
    <ProfileSection id="me" :profileData="profile" />
  </section>
  
  <section class="aboutGrid">
    <ExperienceCard
      @click="openModal(job)"
      v-for="job in jobs"
      :title="job.title"
      :company="job.company"
      :description="job.description"
      :roles="job.roles"
    />
  </section>
  <section>
    <SkillCards :skill="skills" />
  </section>
  
</template>

<script>
export default {
  data() {
    return {
      profile: profileData[0],
      jobs: profileData[0].jobs,
      skills: profileData[0].skills[0],
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

<style>
template {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.aboutGrid {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
}
section {
  margin-bottom: 30px;
}
@media (max-width: 768px) {
  .aboutGrid {
    display: block;
    margin: 0 auto;
    justify-self: center;
    align-self: center;
  }
}
</style>
