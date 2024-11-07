<template>
  <div class="card-grid-wrapper">
    <div class="card-grid">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        @mouseenter="flipCard(index)"
      >
        <div class="card-inner" :class="{ 'is-flipped': flippedCards[index] }">
          <!-- Front of the card -->
          <div class="card-front">
            <img
              :src="`/img/skillcards_0${index + 1}.png`"
              alt="Card Front"
              class="card-image"
            />
          </div>

          <!-- Back of the card -->
          <div class="card-back">
            <img :src="card.icon" alt="Icon" class="card-icon" />
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Array of card data for the back side of each card
const cards = ref([
  {
    icon: "/img/skillcards_01.png", // Icon for card 1
    title: "Skill 1",
    description: "Description for skill 1.",
  },
  {
    icon: "/img/skillcards_01.png", // Icon for card 2
    title: "Skill 2",
    description: "Description for skill 2.",
  },
  {
    icon: "/img/skillcards_01.png", // Icon for card 3
    title: "Skill 3",
    description: "Description for skill 3.",
  },
  {
    icon: "/img/skillcards_01.png", // Icon for card 4
    title: "Skill 4",
    description: "Description for skill 4.",
  },
]);

// Track flipped state of each card
const flippedCards = ref(Array(cards.value.length).fill(false));

// Function to toggle flip state
const flipCard = (index) => {
  flippedCards.value[index] = !flippedCards.value[index];
};
</script>

<style scoped>
/* Wrapper to center grid vertically and add side padding */
.card-grid-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px; /* Add horizontal padding */
  min-height: 100vh; /* Center vertically */
}

/* Container for the grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* Card styles */
.card {
  perspective: 1000px;
  width: 200px;
  height: 300px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
}

.card-inner.is-flipped {
  transform: rotateY(180deg);
}

/* Front and back face styles */
.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.card-front {
  background-color: #fff;
}

.card-back {
  background-color: #f8f9fa;
  color: #333;
  transform: rotateY(180deg);
  padding: 20px;
  text-align: center;
}

/* Front image */
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Back icon */
.card-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

/* Card title and description */
.card-back h3 {
  font-size: 1.2em;
  margin: 10px 0;
}

.card-back p {
  font-size: 0.9em;
  color: #666;
}
</style>
