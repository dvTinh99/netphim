<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold my-6">Movies</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :title="movie.title"
        :image="movie.image"
        :rating="movie.rating"
        :duration="movie.duration"
      />
    </div>
  </div>
</template>

<script setup>
import MovieCard from '~/components/MovieCard.vue'

const movies = [
  {
    id: 1,
    title: 'Pirate Caribbean',
    image: '/assets/img/Images/p-2.jpg',
    rating: '9.5',
    duration: '120 mins',
  },
  {
    id: 2,
    title: 'Black Widow',
    image: '/assets/img/Images/p-6.jpg',
    rating: '9.5',
    duration: '120 mins',
  },
  {
    id: 3,
    title: 'Transformer',
    image: '/assets/img/Images/transformer-banner.jpg',
    rating: '9.5',
    duration: '120 mins',
  },
  {
    id: 4,
    title: 'BloodShot',
    image: '/assets/img/Images/p-3.jpg',
    rating: '9.5',
    duration: '120 mins',
  },
  // Add more movie objects as needed
]
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>