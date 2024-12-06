<template>
  <div class="card">
    <img :src="project.img1" alt="Card Image" class="card-image" />
    <img src="/img/marco1.png" class="marco" alt="" />
  </div>
</template>

<script setup>
// Prop para recibir la URL de la imagen
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Card container */
.card {
  width: 200px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Fallback color if no image */
}

/* Image inside the card */
.card-image {
  width: 92%;
  height: 92%;
  object-fit: cover;
}

.marco {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
