<template>
  <section class="home-container">
    <NavigationBlock
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
      :style="getCardStyle(card)"
      :index="index"
      @cardClick="handleCardClick"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import NavigationBlock from "@/components/Home/NavigationCard.vue";
import { database } from "@/lib/database";
import { useRouter } from "vue-router"; // Importar useRouter

const router = useRouter(); // Inicializar router
console.log(database);

const cards = ref([
  {
    image: "/img/cuadrado.png",
    title: "About me",
    link: "/about",
    position: { x: 100, y: 100 },
  },
  {
    image: "/img/cuadrado.png",
    title: "Skills",
    link: "/skills",
    position: { x: 1000, y: 400 },
  },
  {
    image: "/img/Recurso26.png",
    title: "",
    link: "",
    position: { x: 200, y: 450 },
  },
  {
    image: "/img/Recurso25.png",
    title: "",
    link: "",
    position: { x: 1200, y: 100 },
  },
]);

const getCardStyle = (card) => ({
  left: `${card.position.x}px`,
  top: `${card.position.y}px`,
  transform: "translate(0, 0)",
});

const handleCardClick = (link) => {
  if (!link) return;
  console.log(link);
  router.push(link); // Usar Vue Router para cambiar de ruta
  // Add navigation logic here
};
</script>

<style lang="scss" scoped>
.home-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url("/img/fondo.png");
  background-size: cover;
  background-position: top;
}

.fondo {
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
}

.content {
  position: relative;
  z-index: 1;
}

.card3 {
  width: 100px;
  height: 100px;
}
.card4 {
  width: 100px;
  height: 100px;
}
</style>
