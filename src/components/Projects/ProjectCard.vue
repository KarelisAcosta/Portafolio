<template>
  <div class="card">
    <img :src="imageUrl" alt="Card Image" class="card-image" />
  </div>
</template>

<script setup>
// Prop para recibir la URL de la imagen
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Card container */
.card {
  width: 200px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Fallback color if no image */
}

/* Image inside the card */
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image fills the card without distortion */
}
</style>
