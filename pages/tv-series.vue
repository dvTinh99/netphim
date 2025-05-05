<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold my-6">TV Series</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <MovieCard
        v-for="series in tvSeries"
        :key="series.id"
        :title="series.title"
        :image="series.image"
        :rating="series.rating"
        :duration="series.duration"
      />
    </div>
  </div>
</template>

<script setup>
import MovieCard from '~/components/MovieCard.vue'

const tvSeries = [
  {
    id: 1,
    title: 'WandaVision',
    image: '/assets/img/Images/post-9.jpg',
    rating: '9.0',
    duration: '120 mins',
  },
  {
    id: 2,
    title: 'Rumble',
    image: '/assets/img/Images/post-8.jpg',
    rating: '9.0',
    duration: '120 mins',
  },
  {
    id: 3,
    title: 'Venom',
    image: '/assets/img/Images/post-1.jpg',
    rating: '9.0',
    duration: '120 mins',
  },
  {
    id: 4,
    title: 'Luca',
    image: '/assets/img/Images/post-11.jpg',
    rating: '9.0',
    duration: '120 mins',
  },
  {
    id: 5,
    title: 'Annette',
    image: '/assets/img/Images/post-12.jpg',
    rating: '9.0',
    duration: '120 mins',
  },
  {
    id: 6,
    title: 'Star Trek Discovery',
    image: '/assets/img/Images/start-trek.jpeg',
    rating: '9.0',
    duration: '120 mins',
  },
]
</script>

<style scoped>
.container {
  padding: 2rem;
}
</style>
