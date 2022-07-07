<script setup>
defineProps({
    appURL: {
      type: String,
      required: true
    },
    screenSize: {
      type: String,
      required: true
    }
})


</script>
<template>
  <div v-if="!appURL" class="hiddenDiv">Select an option  to demo.</div>
  <iframe :src="appURL" :class="screenSize === 'desktop' ? '' : 'mobileFrame'">
    <p>Your browser doesn't support iframe</p>
  </iframe>
</template>
<style>
  iframe{
    min-height: 500px;
    max-width: 90vw;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    margin: 10px auto;
    border: 10px solid #191919;
    padding-bottom: 20px;
    background: linear-gradient(155deg, rgb(25,25,25));
  }
  .hiddenDiv{
    font-size: 20px;
    text-align: center;
  }
  .mobileFrame{
    height: 100%;
    max-width: 90vw;
    width: 412px;
    object-position: center;
  }
  
</style>
