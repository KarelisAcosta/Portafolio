<template>
  <div class="card-wrapper">
    <div class="profile-card">
      <!-- Columna izquierda: Imagen -->
      <div class="profile-image">
        <img :src="profileData.image" alt="Profile Image" />
      </div>

      <!-- Columna derecha: Información -->
      <div class="profile-info">
        <!-- Título: Nombre -->
        <h1 class="profile-name">{{ profileData.name }}</h1>

        <!-- Descripción -->
        <p class="profile-description">{{ profileData.description }}</p>

        <!-- Título: Software Skills -->
        <h2 class="skills-title">Software Skills</h2>

        <!-- Grid de logos -->
        <div class="skills-grid">
          <div
            v-for="(logo, index) in profileData.skills"
            :key="index"
            class="skill-logo"
          >
            <img :src="logo" alt="Skill Logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const profileData = {
  image: "/img/skillcards_01.png",
  name: "Karelis Acosta",
  description: "Una descripción breve sobre el perfil",
  skills: [
    "/img/logo1.png",
    "/img/logo2.png",
    "/img/logo3.png",
    "/img/logo4.png",
    "/img/logo5.png",
    "/img/logo6.png",
    "/img/logo7.png",
    "/img/logo8.png",
  ],
};
</script>

<style scoped>
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Estilo general del contenedor */
.profile-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: start;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;
}

/* Estilo para la columna izquierda (imagen) */
.profile-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

/* Estilo para la columna derecha (información) */
.profile-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.profile-name {
  font-size: 1.8em;
  font-weight: bold;
  margin: 0;
}

.profile-description {
  font-size: 1em;
  color: #555;
  margin: 0;
}

.skills-title {
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
}

/* Grid de logos */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.skill-logo img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
