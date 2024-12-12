<template>
  <div class="card-grid-wrapper">
    <div class="card-grid">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        @mouseleave="flipCard(index)"
        @click="handleClick(card)"
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
            <img
              :src="card.backImage"
              alt="Card Back"
              class="card-back-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

// Array of card data for the back side of each card
const cards = ref([
  {
    icon: "/img/skillcards_01.png", // Icon for card 1
    title: " Ilustración",
    description: "Description for skill 1.",
    backImage: "/img/skillcard_1.png", // Back image for card 1
    category: "ilustracion",
  },
  {
    icon: "/img/skillcards_01.png", // Icon for card 2
    title: "Animación",
    description: "Description for skill 2.",
    backImage: "/img/skillcard_2.png", // Back image for card 2
    category: "3d",
  },
  {
    icon: "/img/skillcards_01.png", // Icon for card 3
    title: "Web",
    description: "Description for skill 3.",
    backImage: "/img/skillcard_3.png", // Back image for card 3
    category: "web",
  },
  {
    icon: "/img/skillcards_01.png", // Icon for card 4
    title: "Editorial",
    description: "Description for skill 4.",
    backImage: "/img/skillcard_4.png", // Back image for card 4
    category: "editorial",
  },
]);

// Track flipped state of each card
const flippedCards = ref(Array(cards.value.length).fill(false));

// Function to toggle flip state
const flipCard = (index) => {
  flippedCards.value[index] = !flippedCards.value[index];
};

const handleClick = (card) => {
  // Check if the card has a category and navigate to the project page
  if (card.category) {
    router.push({ name: "projects", params: { category: card.category } });
  } else {
    console.log("No category for this card");
  }
};

// Automatically flip cards in sequence after 2 seconds
onMounted(() => {
  setTimeout(() => {
    cards.value.forEach((_, index) => {
      setTimeout(() => {
        flipCard(index);
      }, 200 * index); // Delay each card by 500ms after the previous one
    });
  }, 1000); // Start flipping after 2 seconds
});
</script>

<style scoped>
/* Wrapper to center grid vertically and add side padding */
.card-grid-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px; /* Add horizontal padding */
  height: 100vh;
  background-image: url("/img/estrellas.png"); /* Ruta de la imagen */
  background-size: cover; /* Para cubrir todo el contenedor */
  background-position: center; /* Centrar la imagen */
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
  cursor: pointer;
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
  background-color: #f8f9fa; /* Optional: fallback background */
  transform: rotateY(180deg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.card-back-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire area */
}

/* Front image */
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive styles */

/* 800px layout: 2 cards per row */
@media (max-width: 800px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
  }
}

/* 500px layout: single column with flex-wrap */
@media (max-width: 500px) {
  .card-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 200px; /* Keep the fixed width */
    height: 300px; /* Keep the fixed height */
    margin-bottom: 20px; /* Add margin between cards */
  }
}
</style>
