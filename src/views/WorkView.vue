<script setup>
import appData from "../store/featuredApps.json";
import FeaturedSection from "../components/FeaturedSection.vue";
import ContactMeBanner from "../components/contactMeBanner.vue";
import HeroImage from "../components/HeroImage.vue";
</script>

<template>
  <section>
    <HeroImage />
  </section>
  <section>
    <ContactMeBanner title="Contact me" description="Whether you have a great idea and need some help building it, or, you have some questions about some of my work, better yet, you want to work with me. Let's talk!" />
  </section>
  <section id=featured>
    <FeaturedSection :apps="apps"  />
  </section>
  
</template>

<script>
export default {
  data() {
    return {
      apps: appData.apps,
      showMore: false,
      imageData: [],
    };
  },
  computed: {
    isFeatured() {
      return this.apps.filter((app) => app.isFeatured);
    },
    notFeatured() {
      if (this.showMore) {
        return this.apps.filter((app) => !app.isFeatured);
      }
      return "";
    },
    handleLabel() {
      if (!this.showMore) {
        return "Show More";
      }
      return "Show Less";
    },
    renderImages() {
      this.imageData = this.apps.filter(app => app.images)
    }
  },
  methods: {
    handleShow() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<style>
#featured {
  /* background: linear-gradient(165.6deg, #191919 5%, #d9d2d2 70% );; */
  color: White;
}
.featuredHeader {
  text-decoration: underline;
  font-size: 50px;
  font-family: 'Arima', cursive;
  font-weight: 800;
  padding: 10px 20px;
}
.featuredGrid {
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  gap: 10px;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  z-index:3;
}
.toggleAction {
  color: white;
  margin-top: 200px;
  background: linear-gradient(112.38deg, #797777 -36.38%, #1b1b1b 130.38%);
  padding: 10px 20px;
  border: 1px solid darkgray;
  border-radius: 10px;
  cursor: pointer;
}
.toggleAction:hover {
  background: #999999;
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
