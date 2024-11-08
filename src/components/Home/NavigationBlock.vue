<template>
  <div class="card-container">
    <div
      v-for="(card, index) in cards"
      :key="index"
      :class="['card', `card${index + 1}`]"
      :style="cardStyles[index]"
      @click="handleClick(card.link)"
    >
      <img :src="card.image" alt="Card Image" class="card-image" />
      <h3>{{ card.title }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onUnmounted } from "vue";

// Define card data
const cards = ref([
  { image: "/img/cuadrado.png", title: "About me", link: "1" },
  { image: "/img/cuadrado.png", title: "Skill 2", link: "2" },
  { image: "/img/cuadrado.png", title: "", link: "" },
]);

// Track current dragging status

const cardPositions = reactive([
  { x: 100, y: 100 }, // Initial position of first card
  { x: 1000, y: 400 }, // Initial position of second card
  { x: 400, y: 400 }, // Initial position of second card
]);

// Compute styles based on current position
const cardStyles = ref(
  cardPositions.map((pos) => ({
    left: `${pos.x}px`,
    top: `${pos.y}px`,
    position: "absolute",
    cursor: "pointer",
  }))
);

const handleClick = (link) => {
  console.log(link);
};

// Clean up event listeners
onUnmounted(() => {});
</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* Card styles with floating effect */
.card {
  width: 150px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15), 0px 6px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  animation: float 3s ease-in-out infinite; /* Floating animation */
  padding: 10px;
}

.card1 {
  animation: float 2.5s ease-in-out infinite; /* Floating animation */
}

.card3 {
  width: 100px;
  height: 100px;
  animation: float 3.5s ease-in-out infinite; /* Floating animation */

  img {
  }
}

.card.clicked {
  transform: scale(1.05);
  background-color: #e0e0e0;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.card h3 {
  font-size: 1em;
  text-align: center;
  color: #333;
}

/* Floating animation */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px); /* Elevate slightly */
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
