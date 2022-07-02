<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  roles: {
    type: Array,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="experienceCard">
    <div class="cardHeader">
      <h3 class="cardTitle">{{ title }}</h3>
      <h4 class="cardSubtitle">{{ company }}</h4>
    </div>
    <div class="cardBody">
      <div class="cardDescription">
        Job Description:
        <ul>
          <li class="cardItem" v-for="descriptions in description">
            {{ descriptions }}
          </li>
        </ul>
      </div>
      <div class="cardDescription">
        Key Roles:
        <ul>
          <li class="cardItem" v-for="role in roles">
            <div>{{ role.title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      learnMore: false,
    };
  },
  computed: {
    handleLabel() {
      if (!this.learnMore) {
        return "Show More";
      }
      return "Show Less";
    },
  },
  methods: {
    handleToggle() {
      this.learnMore = !this.learnMore;
    },
  },
};
</script>
<style scoped>
.experienceCard {
  width: 90%;
  margin: 100px auto;
  border-radius: 25px;
  font-size: 16px;
  text-align: justify;
  padding: 10px 20px;
  background: linear-gradient(112.38deg, #909191 -36.89%, #5d5e5e 112.38%);
}
.experienceCard:hover {
  box-shadow: 0 0 5px 3px white;
  cursor: pointer;
}
.cardHeader {
  text-align: center;
}
button {
  background: transparent;
  border: none;
  color: white;
}
.cardItem {
  text-align: left;
  list-style-type: none;
}
</style>
