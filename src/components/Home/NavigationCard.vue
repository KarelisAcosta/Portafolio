<template>
  <div
    class="navigation-card"
    :class="[`card${index + 1}`]"
    :style="{ '--delay': `${index * 0.7}s` }"
    @click="$emit('cardClick', link)"
  >
    <img :src="image" :alt="title" class="card-image" />
    <h3 v-if="title">{{ title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  index: {
    type: Number,
    required: true,
  },
});

defineEmits(["cardClick"]);
</script>

<style lang="scss" scoped>
.navigation-card {
  width: 150px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15), 0px 6px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 10px;
  pointer-events: auto;
  position: absolute;
  cursor: pointer;
  animation: float 3.5s ease-in-out infinite;
  animation-delay: var(
    --delay,
    0s
  ); // Uses the CSS variable with a fallback of 0s
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

h3 {
  margin-top: 10px;
  font-size: 1em;
  text-align: center;
  color: #333;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
