<template>
  <header class="bg-gray-800 text-white">
    <div class="container mx-auto flex justify-between items-center p-4">
      <a href="/" class="flex items-center">
        <i class="bx bx-movie-play bx-tada text-3xl mr-2" />
        <span class="text-2xl font-bold">Flix</span>
      </a>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="/" class="hover:text-gray-400">Home</a></li>
          <li><a href="/movies" class="hover:text-gray-400">Movies</a></li>
          <li>
            <a href="/tv-series" class="hover:text-gray-400">TV Series</a>
          </li>
          <li><a href="/settings" class="hover:text-gray-400">Settings</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// No script needed for this header component
</script>

<style scoped>
/* Additional styles can be added here if necessary */
</style>
