<script setup>
import FAQ from "./components/sections/FAQ.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import HowToParticipate from "./components/sections/HowToParticipate.vue";
import Prizes from "./components/sections/Prizes.vue";
import Winners from "./components/sections/Winners.vue";
import Footer from "./components/sections/Footer.vue";
import "@/assets/base.css";
</script>

<template>
  <HeroSection></HeroSection>
  <HowToParticipate></HowToParticipate>
  <Prizes></Prizes>
  <FAQ></FAQ>
  <Winners></Winners>
  <Footer></Footer>
</template>

<style scoped>
h1 {
  color: #000;
}
</style>
