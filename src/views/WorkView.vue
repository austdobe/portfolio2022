<script setup>
import FeaturedItems from "../components/FeaturedItems.vue";
import appData from "../store/featuredApps.json";
import HeroImage from "../components/HeroImage.vue";
import FeaturedSection from "../components/FeaturedSection.vue";
</script>

<template>
<HeroImage :images="renderImages" :app="imageData" />
<FeaturedSection :apps="apps" id=featured />
<!-- <div id="featured">
  <h1 class="featuredHeader">Featured Applications</h1>
  <div class="featuredGrid">
    <FeaturedItems
      v-for="app in apps"
      :image="app.image"
      :heading="app.heading"
      :description="app.description"
      :redirect="app.redirect"
    />
  </div>
</div> -->
</template>
<script>
export default {
  data() {
    return {
      apps: appData.apps,
      showMore: false,
      imageData: []
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
  background: linear-gradient(165.6deg, #191919 5%, #d9d2d2 70%, #191919 );;
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
  min-height: 100vh;
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
@media screen and (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
