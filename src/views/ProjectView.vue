<script setup>
import { ref, onMounted, computed } from "vue";
import { database } from "@/lib/database";
import { useRoute, useRouter } from "vue-router"; // Importa useRouter

const route = useRoute();
const router = useRouter(); // Usar useRouter para tener acceso al objeto router
const project = ref(null);

// Computed property for images
const images = computed(() => {
  if (!project.value) return [];
  return [
    project.value.img1,
    project.value.img2,
    project.value.img3,
    project.value.img4,
  ].filter((img) => img);
});

// Computed property for category color
const categoryColor = computed(() => {
  if (!project.value) return "";
  const colors = {
    web: "#5BA6A3", // Color para "web"
    editorial: "#AA81D0", // Color para "editorial"
  };
  return colors[project.value.categoria] || "#000"; // Default a negro si no hay categoría
});

onMounted(async () => {
  let db = await database;
  project.value = db.find((p) => p.nombre === route.params.name);
  console.log(project.value);
});

// Función para regresar a la página anterior
const goBack = () => {
  router.go(-1); // O también puedes usar router.back();
};
</script>

<template>
  <section v-if="project" class="project-container">
    <h1 class="project-title">{{ project.nombre }}</h1>

    <div class="media-section">
      <!-- Imágenes del proyecto -->
      <div v-if="images.length" class="image-gallery">
        <div v-for="(img, index) in images" :key="index">
          <img :src="img" alt="Project Image" />
        </div>
      </div>

      <!-- Videos del proyecto -->
      <div v-if="project.video1 || project.video2" class="video-gallery">
        <video v-if="project.video1" :src="project.video1" controls></video>
        <video v-if="project.video2" :src="project.video2" controls></video>
      </div>
    </div>

    <!-- Link externo como botón estilizado -->
    <div v-if="project.link_externo" class="external-link">
      <a
        :href="project.link_externo"
        target="_blank"
        class="link-button"
        :style="{ backgroundColor: categoryColor }"
      >
        Visit External Link
      </a>
    </div>

    <!-- Botón para regresar -->
    <button @click="goBack" class="back-button">Back to Projects</button>
  </section>
  <p v-else>Loading project details...</p>
</template>

<style scoped>
.project-container {
  padding: 30px;
  width: 100%;
  min-height: 100dvh;
  min-height: 100vh;
  margin: auto;
  text-align: center;
  background-image: url("/img/estrellas.png"); /* Ruta de la imagen */
  background-size: cover; /* Para cubrir todo el contenedor */
  background-position: center; /* Centrar la imagen */
  background-repeat: no-repeat; /* Evitar repetición de la imagen */
  align-items: center;
  justify-content: center;
  position: relative; /* Necesario para posicionar los botones dentro del contenedor */
}

.project-title {
  font-size: 2rem;
  margin-bottom: 30px;
  font-size: 60px;
}

.media-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.image-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.image-gallery img {
  width: auto;
  height: 500px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.video-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-gallery video {
  width: 100%;
  max-height: 400px;
  border-radius: 10px;
}

/* Botón estilizado para el enlace externo */
.link-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff; /* Texto blanco */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;
}

.link-button:hover {
  transform: scale(1.05);
  text-decoration: none;
}

/* Contenedor para los botones de regresar y link externo */
.buttons-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px; /* Espacio entre los botones */
}

/* Estilos para el botón de regresar */
.back-button {
  left: 560px;
  bottom: 50px;
  background-color: #333;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.back-button:hover {
  background-color: #555;
}

/* Estilos para el botón de link externo */
.link-button {
  background-color: #5ba6a3;
}
</style>
