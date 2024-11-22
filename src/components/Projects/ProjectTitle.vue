<template>
  <div class="background-container" :style="containerStyles">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

// Props for customization
const props = defineProps({
  title: {
    type: String,
    default: "Ilustración",
  },
  backgroundImage: {
    type: String,
    default: "", // Default to no background image
  },
});

// Dynamic styles for the container
const containerStyles = computed(() => ({
  width: props.width,
  height: props.height,
  backgroundImage: props.backgroundImage
    ? `url(${props.backgroundImage})`
    : "none",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
}));
</script>

<style scoped>
/* Import custom font */
@import url("https://fonts.googleapis.com/css2?family=Averia+Libre:wght@400;700&display=swap");

/* Container styles */
.background-container {
  border-radius: 8px; /* Editable */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Editable */
  width: 1000px;
  height: 200px;
}

/* Title styles */
.title {
  position: absolute;
  color: white;
  font-family: "Averia Libre", cursive;
  font-size: 1.5em; /* Editable */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add contrast */
  text-align: center;
  margin: 0;
}
</style>
