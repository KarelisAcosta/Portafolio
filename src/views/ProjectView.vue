<script setup>
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import ProjectTitle from "@/components/Projects/ProjectTitle.vue";
</script>

<template>
  <section>
    <ProjectTitle />
    <ProjectCard />
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
