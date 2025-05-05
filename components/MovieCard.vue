<template>
  <div class="movie-card bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="image" alt="Movie Poster" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
      <div class="flex items-center justify-between mt-2">
        <span class="text-gray-600">{{ rating }}</span>
        <span class="text-gray-600">{{ duration }}</span>
      </div>
      <p class="text-gray-600 mt-2">{{ description }}</p>
      <div class="mt-4">
        <a :href="trailerLink" class="text-blue-500 hover:underline"
          >Watch Trailer</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  rating: String,
  duration: String,
  description: String,
  trailerLink: String,
})
</script>

<style scoped>
.movie-card {
  transition: transform 0.2s;
}

.movie-card:hover {
  transform: scale(1.05);
}
</style>
