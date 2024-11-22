<script setup>
import ProjectTitle from "@/components/Projects/ProjectTitle.vue";
import ProjectCard from "@/components/Projects/ProjectCard.vue";
</script>

<template>
  <section class="project-section">
    <!-- Título en la parte superior -->
    <div class="title-section">
      <ProjectTitle />
    </div>

    <!-- Tarjetas debajo del título -->
    <div class="cards-section">
      <ProjectCard />
    </div>
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
  height: 100vh; /* Altura completa de la vista */
  padding: 20px;
  box-sizing: border-box; /* Incluye el padding en las dimensiones */
}

/* Estilos para la sección del título */
.title-section {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Estilos para la sección de las tarjetas */
.cards-section {
  display: flex;
  gap: 20px; /* Espaciado entre tarjetas */
  flex-wrap: wrap; /* Permite que las tarjetas se ajusten en varias filas si es necesario */
  justify-content: center;
  width: 100%; /* Asegura que ocupe todo el ancho disponible */
}
</style>
