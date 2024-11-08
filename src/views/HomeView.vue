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

    <div class="content-layer">
      <!-- Other content goes here -->
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import NavigationBlock from "@/components/Home/NavigationCard.vue";

const cards = ref([
  {
    image: "/img/cuadrado.png",
    title: "About me",
    link: "1",
    position: { x: 100, y: 100 },
  },
  {
    image: "/img/cuadrado.png",
    title: "Skill 2",
    link: "2",
    position: { x: 1000, y: 400 },
  },
  {
    image: "/img/cuadrado.png",
    title: "",
    link: "",
    position: { x: 400, y: 400 },
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
  // Add navigation logic here
};
</script>

<style lang="scss" scoped>
.home-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.content {
  position: relative;
  z-index: 1;
}

.card3 {
  width: 100px;
  height: 100px;
}
</style>
