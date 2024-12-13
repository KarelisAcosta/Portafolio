<script setup>
import { ref, onMounted } from "vue";
import { database } from "@/lib/database";
import { useRoute } from "vue-router";

const route = useRoute();
const project = ref(null);

onMounted(async () => {
  let db = await database;
  project.value = db.find((p) => p.nombre === route.params.name);
  console.log(project.value);
});
</script>

<template>
  <section v-if="project" class="project-container">
    <h1 class="project-title">{{ project.nombre }}</h1>
    <div class="project-category">Category: {{ project.categoria }}</div>

    <div class="media-section">
      <!-- Imágenes del proyecto -->
      <div
        v-if="project.img1 || project.img2 || project.img3 || project.img4"
        class="image-gallery"
      >
        <div
          v-for="(img, index) in [
            project.img1,
            project.img2,
            project.img3,
            project.img4,
          ]"
          :key="index"
        >
          <img
            v-if="img"
            :src="img.startsWith('/') ? img : '/img/' + img"
            alt="Project Image"
          />
        </div>
      </div>

      <!-- Videos del proyecto -->
      <div v-if="project.video1 || project.video2" class="video-gallery">
        <video v-if="project.video1" :src="project.video1" controls></video>
        <video v-if="project.video2" :src="project.video2" controls></video>
      </div>
    </div>

    <!-- Link externo -->
    <div v-if="project.link_externo" class="external-link">
      <a :href="project.link_externo" target="_blank" rel="noopener noreferrer"
        >Visit External Link</a
      >
    </div>
  </section>
  <p v-else>Loading project details...</p>
</template>

<style scoped>
.project-container {
  padding: 20px;
  max-width: 100%;
  margin: auto;
  text-align: center;
  background-image: url("/img/estrellas.png"); /* Ruta de la imagen */
  background-size: cover; /* Para cubrir todo el contenedor */
  background-position: center; /* Centrar la imagen */
  background-repeat: no-repeat; /* Evitar repetición de la imagen */
}

.project-title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.project-category {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.media-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.image-gallery img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.video-gallery video {
  width: 100%;
  max-height: 400px;
  border-radius: 10px;
}

.external-link a {
  display: inline-block;
  margin-top: 20px;
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
}

.external-link a:hover {
  text-decoration: underline;
}
</style>
