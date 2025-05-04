<template>
  <nav class="bg-gray-800">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <a href="/" class="text-white text-2xl font-bold">
          <i class='bx bx-movie-play bx-tada'/>Fl<span class="text-main-color">i</span>x
        </a>
      </div>
      <div class="hidden md:flex space-x-4">
        <a href="/" class="text-white hover:text-gray-300">Home</a>
        <a href="/movies" class="text-white hover:text-gray-300">Movies</a>
        <a href="/tv-series" class="text-white hover:text-gray-300">TV Series</a>
        <a href="/settings" class="text-white hover:text-gray-300">Settings</a>
        <a href="#" class="text-white hover:text-gray-300">Account</a>
      </div>
      <div class="md:hidden">
        <button class="text-white focus:outline-none" @click="toggleMenu">
          <i class='bx bx-menu'/>
        </button>
      </div>
    </div>
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="bg-gray-700">
        <a href="/" class="block text-white px-4 py-2">Home</a>
        <a href="/movies" class="block text-white px-4 py-2">Movies</a>
        <a href="/tv-series" class="block text-white px-4 py-2">TV Series</a>
        <a href="/settings" class="block text-white px-4 py-2">Settings</a>
        <a href="#" class="block text-white px-4 py-2">Account</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.text-main-color {
  color: #ff4757; /* Example color for main color */
}
</style>