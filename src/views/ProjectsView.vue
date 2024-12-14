<script setup>
import { useRoute, useRouter } from "vue-router"; // Importar useRouter
import ProjectTitle from "@/components/Projects/ProjectTitle.vue";
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import { database } from "@/lib/database";
import { onMounted, ref } from "vue";

const route = useRoute();
const router = useRouter(); // Crear una instancia del enrutador

const projects = ref([]);
onMounted(async () => {
  let p = await database;
  projects.value = p.filter((e) => e.categoria == route.params.category);
  console.log(projects.value);
});

// Función para regresar a SkillView (o cualquier ruta que desees)
const goBack = () => {
  router.push({ name: "skills" }); // Redirigir a la ruta 'skills'
};
</script>

<template>
  <section class="project-section">
    <!-- Título en la parte superior -->
    <div class="title-section">
      <ProjectTitle :category="route.params.category" />
    </div>

    <!-- Tarjetas debajo del título -->
    <div class="cards-section">
      <ProjectCard
        v-for="project in projects"
        :key="project.nombre"
        :project="project"
        @click.native="
          $router.push({ name: 'project', params: { name: project.nombre } })
        "
      />
    </div>

    <!-- Botón para regresar -->
    <button @click="goBack" class="back-button">Back</button>
  </section>
</template>

<style scoped>
/* Contenedor principal para la sección */
.project-section {
  display: flex;
  flex-direction: column; /* Estructura en columna */
  align-items: center;
  justify-content: flex-start; /* Título en la parte superior */
  gap: 40px; /* Espaciado entre el título y las tarjetas */
  padding: 20px;
  box-sizing: border-box; /* Incluye el padding en las dimensiones */
  background-image: url("/img/estrellas.png"); /* Ruta de la imagen */
  background-size: cover; /* Para cubrir todo el contenedor */
  background-position: center; /* Centrar la imagen */
  background-attachment: fixed; /* Fija la imagen cuando se haga scroll */
  background-repeat: repeat-y;
  min-height: 100vh; /* Asegura que el contenedor ocupe todo el alto de la pantalla */
}

/* Estilos para la sección del título */
.title-section {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
}

/* Estilos para la sección de las tarjetas */
.cards-section {
  display: flex;
  gap: 20px; /* Espaciado entre tarjetas */
  flex-wrap: wrap; /* Permite que las tarjetas se ajusten en varias filas si es necesario */
  justify-content: center;
  width: 100%; /* Asegura que ocupe todo el ancho disponible */
  padding-bottom: 80px; /* Añadido para evitar que el botón se sobreponga */
  margin-bottom: 80px; /* Asegura que las tarjetas no se superpongan al botón */
}

/* Estilos para el botón */
.back-button {
  position: fixed;
  bottom: 20px; /* Lo coloca al fondo */
  left: 50%;
  transform: translateX(-50%); /* Centrado horizontal */
  background-color: #333;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 10; /* Asegura que el botón esté por encima de otros elementos */
}

.back-button:hover {
  background-color: #555;
}
</style>
