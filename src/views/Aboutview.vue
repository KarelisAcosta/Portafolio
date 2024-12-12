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
  image: "/img/muñeca.png",
  name: "Karelis Acosta",
  description:
    "Soy una persona curiosa y apasionada por el aprendizaje. Siempre estoy explorando nuevas ideas, herramientas y tendencias, lo que me permite estar dispuesta a intentar cosas nuevas. Mi enfoque no solo se limita a la creación visual, sino también a compartir y expandir mis conocimientos con otros.",
  skills: [
    "/img/photoshop.png",
    "/img/ilustraitor.png",
    "/img/indesing.png",
    "/img/premiere.png",
    "/img/affter.png",
    "/img/blender.png",
    "/img/visual.png",
    "/img/Audition.png",
  ],
};
</script>

<style scoped>
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("/img/estrellas.png"); /* Ruta de la imagen */
  background-size: cover; /* Para cubrir todo el contenedor */
  background-position: center; /* Centrar la imagen */
}

/* Estilo general del contenedor */
.profile-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: start;
  padding: 20px;
  background-color: white;
  border: 10px solid #5b63a3;
  border-radius: 20px;
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
  transform: translateX(20px);
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
  font-size: 1.2em;
  color: #555;
  margin: 20px 0; /* Márgenes superior e inferior */
  padding: 0px 30px; /* Añadir un poco de relleno a los lados si lo deseas */
  text-align: center;
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
  width: 50px;
  height: 50px;
  height: auto;
  object-fit: contain;
}

/* Media Query para dispositivos con ancho de 00px */

@media screen and (max-width: 800px) {
  /* Estilo para la columna izquierda (imagen) */
  .profile-image img {
    width: 150%; /* Imagen más grande */
    height: 150%; /* Tamaño de la imagen */
    transform: translateX(-30px); /* Eliminar la transformación de la imagen */
    top: 30px;
  }

  @media screen and (max-width: 600px) {
    .profile-card {
      grid-template-columns: 1fr; /* Una sola columna */
      max-width: 100%; /* Aseguramos que ocupe todo el ancho disponible */
      padding: 10px;
    }

    /* Estilo para la columna izquierda (imagen) */
    .profile-image img {
      width: 60%; /* Imagen más grande */
      height: 60%; /* Tamaño de la imagen */
      transform: translateX(85px); /* Eliminar la transformación de la imagen */
    }

    /* Estilo para la columna derecha (información) */
    .profile-info {
      gap: 10px;
    }

    .profile-name {
      font-size: 1.5em; /* Reducir el tamaño */
    }

    .profile-description {
      font-size: 1em; /* Reducir tamaño */
      margin: 10px 0;
    }

    .skills-title {
      font-size: 1.2em; /* Reducir tamaño */
    }

    .skills-grid {
      grid-template-columns: repeat(4, 1fr); /* Reducir el número de columnas */
    }

    .skill-logo img {
      width: 40px;
      height: 40px; /* Reducir el tamaño de los logos */
    }
  }
}
</style>
