<script setup>
import SkillsCard from "./SkillsCard.vue";
defineProps({
  skill: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="skillGrid">
    <div v-for="skills in Object.entries(skill)" class="skillCardWrapper">
      <h3 class="skillTitle">{{ skills[0] }}</h3>
      <div @click="handleToggle()" class="icon">
        <div v-if="isShown">
          <font-awesome-icon icon="fa-solid fa-toggle-off" size="2x" />
        </div>
        <div v-if="!isShown">
          <font-awesome-icon icon="fa-solid fa-toggle-off" size="2x" />
        </div>
      </div>
      <div v-if="isShown">
        <SkillsCard
          v-for="value in skills[1]"
          class="skillDropDown"
          :title="value.title"
          :proficiency="value.proficiencyLevel"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShown: true,
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
.skillGrid {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  width: 90%;
  margin: 100px auto;
}
.icon {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px 20px;
}
.skillCardWrapper {
  border: none;
  padding: 0;
}
.skillDropDown {
  margin: 10px 20px;
}

@media (max-width: 768px) {
  .skillGrid {
    display: block;
    text-align: left;
    width: 100%;
  }
  .icon {
    display: block;
  }
  .skillCardWrapper {
    border: 1px solid white;
    padding: 10px 20px;
    margin: 10px 20px;
    border-radius: 25px;
  }
}
</style>
