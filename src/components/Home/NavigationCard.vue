<template>
  <div
    class="navigation-card"
    :class="[`card${index + 1}`]"
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
  animation: float 3s ease-in-out infinite;
  padding: 10px;
  pointer-events: auto;
  position: absolute;
  cursor: pointer;
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
