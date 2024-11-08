<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header></header>

  <RouterView />
  <footer></footer>
</template>

<style scoped>
header,
footer {
  background-color: black;
  height: 50px;
  width: 100%;
  position: absolute;
}

header {
  top: 0;
}

footer {
  bottom: 0;
}
</style>
