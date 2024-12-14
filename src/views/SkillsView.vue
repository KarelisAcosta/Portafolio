<template>
  <div class="skills-wrapper">
    <!-- Botón de volver -->
    <button class="back-button" @click="goBack">Back</button>

    <!-- Contenedor de las tarjetas -->
    <div class="card-grid-wrapper">
      <div class="card-grid">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="card"
          @mouseleave="flipCard(index)"
          @click="handleClick(card)"
        >
          <div
            class="card-inner"
            :class="{ 'is-flipped': flippedCards[index] }"
          >
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

// Function to go back to the previous page
const goBack = () => {
  router.go(-1); // Navega hacia atrás
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
/* Wrapper para centrar las tarjetas */
.skills-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
  background-image: url("/img/estrellas.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

/* Contenedor de las tarjetas */
.card-grid-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* Estilos de las tarjetas */
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
}

.card-front {
  background-color: #fff;
}

.card-back {
  background-color: #f8f9fa;
  transform: rotateY(180deg);
  border-radius: 8px;
}

.card-back-image,
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Estilos para el botón de volver */
.back-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 10;
}

.back-button:hover {
  background-color: #555;
}

/* Estilos responsive */

/* 800px layout: 2 tarjetas por fila */
@media (max-width: 800px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 tarjetas por fila */
  }
}

/* 500px layout: Una tarjeta por fila */
@media (max-width: 500px) {
  .card-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 200px; /* Mantiene el tamaño fijo */
    height: 300px;
    margin-bottom: 20px; /* Espacio entre las tarjetas */
  }
}
</style>
