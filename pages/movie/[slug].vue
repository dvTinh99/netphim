<template>
  <div class="min-h-screen bg-[#06121e] text-white">
    <!-- Hero Section with Movie Background -->
    <div class="relative">
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#06121e] via-[#06121e]/70 to-transparent z-10"
      />
      <div
        :class="`absolute inset-0 bg-[url('${movie?.thumb_url}')] bg-cover bg-center opacity-60`"
      />

      <div class="container mx-auto relative z-20 px-4 py-8">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Movie Poster -->
          <div class="flex-shrink-0">
            <img
              :src="movie?.poster_url"
              :alt="movie?.slug"
              class="w-[270px] h-[400px] rounded-lg shadow-lg"
            >
            <NuxtLink :to="`/play/${movie?.slug}/tap-01`">
              <button
                class="w-full mt-4 bg-[#dd003f] hover:bg-[#dd003f]/80 text-white py-3 flex items-center justify-center gap-2 rounded-md"
              >
                <Youtube class="w-5 h-5" />
                XEM PHIM
              </button>
            </NuxtLink>
          </div>

          <!-- Movie Details -->
          <div class="flex-1">
            <h1 class="text-3xl md:text-4xl font-bold mb-2">
              {{ movie?.name }}
            </h1>
            <h2 class="text-xl text-gray-300 mb-6">
              {{ movie?.content }}
            </h2>

            <div class="flex items-center gap-6 mb-4">
              <div class="flex items-center gap-2">
                <Clock class="w-5 h-5 text-gray-400" />
                <span>{{ movie?.time }}</span>
              </div>
              <div
                class="flex items-center gap-2 bg-[#ffff00] text-black px-2 py-0.5 rounded"
              >
                <Star class="w-4 h-4" />
                <span class="font-bold">7.7</span>
              </div>
            </div>

            <div class="flex items-center gap-4 mb-6">
              <button
                class="text-white hover:text-[#dd003f] p-0 flex items-center"
              >
                <Facebook class="w-5 h-5 mr-2" />
                Chia sẻ
              </button>
              <button
                class="text-white hover:text-[#dd003f] p-0 flex items-center"
              >
                <Share2 class="w-5 h-5 mr-2" />
                Đã xem
              </button>
            </div>

            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="category in movie?.category"
                :key="category._id"
                class="px-4 py-1 bg-[#09080b] rounded-full text-sm border border-gray-700"
                >{{ category.name }}</span
              >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div v-for="(director, index) in movie?.director" :key="index">
                <p class="text-gray-400 mb-1">Đạo diễn</p>
                <p>{{ director }}</p>
              </div>
              <div v-for="(country, index) in movie?.country" :key="index">
                <p class="text-gray-400 mb-1">Quốc gia</p>
                <p>{{ country.name }}</p>
              </div>
              <!-- <div>
                <p class="text-gray-400 mb-1">Khởi chiếu</p>
                <p>14/12/2018</p>
              </div> -->
            </div>

            <div class="mb-8">
              <p class="text-sm leading-relaxed">
                Dragon Ball Super Movie: Broly là bộ phim thứ 20 trong series
                Dragon Ball, và là Movie đầu tiên mang thương hiệu Dragon Ball
                Super, lấy bối cảnh khi đế chế Frieza đang lớn, đã gặp không ít
                bất ngờ. Saiyan phải phục vụ làm việc dưới quyền của chúng. Khi
                đó 3 đứa trẻ Saiyan đã được sinh ra cùng một lúc, nhưng số phận
                của chúng lại hoàn toàn khác nhau: Vegeta là hoàng tử của tộc
                người Saiyan, Kakarot (Goku) là con trai của người quân Bardock,
                và Broly là con của Paragus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cast Section -->
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-xl font-bold mb-6 uppercase">Diễn viên</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div
          v-for="(actor, index) in movie?.actor"
          :key="index"
          class="text-center"
        >
          <div class="relative mx-auto w-24 h-24 mb-2">
            <img
              src="/avatar.webp"
              class="w-full h-full rounded-full object-cover"
            >
          </div>
          <h3 class="font-medium text-sm">{{ actor }}</h3>
          <!-- <p class="text-gray-400 text-xs">{{ actor.character }}</p> -->
        </div>
      </div>
    </div>

    <!-- Trailer Section -->
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-xl font-bold mb-6 uppercase">Trailer</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(trailer, index) in 3"
          :key="index"
          class="relative group cursor-pointer"
        >
          <img
            :src="`/placeholder.svg?height=180&width=320`"
            :alt="`Trailer ${index + 1}`"
            class="rounded-md w-full"
          >
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div class="bg-[#dd003f] rounded-full p-3">
              <Youtube class="w-6 h-6" />
            </div>
          </div>
          <div
            v-if="index === 0"
            class="absolute top-2 left-2 bg-[#dd003f] text-white px-2 py-0.5 text-sm font-bold"
          >
            HD
          </div>
          <div
            v-if="index > 0"
            class="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center font-bold"
          >
            TRAILER
          </div>
        </div>
      </div>
    </div>

    <!-- Related Movies -->
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-xl font-bold mb-6 uppercase">Phim tương tự</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="(movie, index) in 4"
          :key="index"
          class="group cursor-pointer"
        >
          <div class="relative overflow-hidden rounded-md">
            <img
              :src="`/placeholder.svg?height=300&width=200`"
              :alt="`Related Movie ${index + 1}`"
              class="w-full transition-transform group-hover:scale-105"
            >
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
            >
              <div class="p-3 w-full">
                <h3 class="text-sm font-bold">
                  Dragon Ball Z: {{ index + 1 }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock, Star, Facebook, Share2, Youtube } from 'lucide-vue-next'
import type { Movie } from '~/entities/Movie'
import { useMovieStore } from '~/stores'
const movieStore = useMovieStore()
const route = useRoute()
const movie = ref<Movie>()

const slug = route.params.slug
console.log('slug', slug);

onBeforeMount(async () => {
  console.log('before mount');
  
  const data = await movieStore.getMovieBySlug(slug as string)
  if (data) {
    movie.value = data.movie
  } else {
    // Handle the case where the movie is not found
    console.error('Movie not found')
  }
  console.log('movie', movie)
})

</script>

<style>
/* You can add any additional custom styles here */
/* Most styling is handled by Tailwind CSS classes */
</style>
