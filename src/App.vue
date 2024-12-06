<script setup>
import { ref, onMounted } from "vue";

// Estado para controlar la visibilidad de la animación
const showAnimation = ref(true);

// Al montar el componente, después de un retraso (el tiempo de la animación), ocultamos el fondo blanco y la tarjeta
onMounted(() => {
  setTimeout(() => {
    showAnimation.value = false;
  }, 3000); // 3 segundos de animación (ajustable)
});
</script>

<template>
  <div v-if="showAnimation" class="animation-container">
    <div class="card"></div>
  </div>

  <!-- Contenido principal -->
  <header></header>
  <RouterView />
  <footer></footer>
</template>

<style scoped>
/* Estilo para el fondo de la animación y la tarjeta */
.animation-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeout 800ms linear 2200ms forwards;
}

.card {
  width: 300px;
  height: 400px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform-origin: center;
  animation: rotateCard 3s forwards;
}

/* Animación de rotación de la tarjeta en el eje X (horizontal) */
@keyframes rotateCard {
  0% {
    transform: rotateZ(0deg);
    opacity: 1;
  }
  50% {
    transform: rotateZ(360deg);
    opacity: 1;
  }
  100% {
    transform: rotateZ(360deg);
    opacity: 0;
  }
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

/* Estilos para el header y footer */
header,
footer {
  background-color: black;
  height: 0px;
  width: 100%;
  position: absolute;
  left: 0;
}

header {
  top: 0;
}

footer {
  bottom: 0;
}
</style>
