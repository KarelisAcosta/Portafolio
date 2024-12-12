<template>
  <div class="background-container" :style="containerStyles">
    <h1 class="title">{{ title }}</h1>
    <img :src="`/img/${category}.png`" alt="" />
  </div>
</template>

<script setup>
import { computed } from "vue";

// Props for customization
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  currentSection: {
    type: String,
    default: "", // Sección actual (puede ser 'ilustracion', 'web', etc.)
  },
  category: {
    type: String,
    default: "",
  },
});

// Ruta de las imágenes
const images = {
  ilustracion: "/img/ilustracion.png",
  web: "/img/web.png",
  modelado: "/img/3d.png",
  editorial: "/img/editorial.png",
};

// Determina la imagen según la sección actual
const backgroundImage = computed(() => {
  return images[props.currentSection] || "/img/default.png"; // Default image if no section matches
});

// Dynamic styles for the container
const containerStyles = computed(() => ({
  backgroundImage: `url(${backgroundImage.value})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
}));
</script>

<style lang="scss" scoped>
/* Container styles */
.background-container {
  border-radius: 50px; /* Editable */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Editable */
  height: 300px; /* Ajusta según sea necesario */

  img {
    height: 100%;
    object-fit: contain;
  }
}
</style>
