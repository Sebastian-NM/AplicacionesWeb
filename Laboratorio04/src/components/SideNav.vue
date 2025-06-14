<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <!-- Imagen de perfil (elimina el texto "Start Bootstrap") -->
    <RouterLink to="/" class="navbar-brand js-scroll-trigger d-flex flex-column align-items-center">
      <span class="d-none d-lg-block">
        <img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="/img/profile.jpg"
          alt="Profile"
        />
      </span>
    </RouterLink>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav text-uppercase mx-auto">
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: route.path === '/about' }" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: route.path === '/experience' }" to="/experience">Experience</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: route.path === '/education' }" to="/education">Education</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: route.path === '/skills' }" to="/skills">Skills</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: route.path === '/interests' }" to="/interests">Interests</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: route.path === '/awards' }" to="/awards">Awards</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
