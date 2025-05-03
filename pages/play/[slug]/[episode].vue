<template>
  <div class="min-h-screen bg-[#06121e] text-white">
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Main Content -->
        <div class="flex-1">
          <!-- Video Player -->
          <div class="relative bg-black rounded-md overflow-hidden mb-6">
            <HlsPlayer
              v-if="hlsUrl"
              v-model="hlsUrl"
            />
          </div>

          <!-- Movie Title and Rating -->
          <div class="mb-6">
            <h1 class="text-3xl font-bold mb-1">
              {{ movie?.name }}
            </h1>
            <h2 class="text-xl text-gray-300 mb-3">
              {{ movie?.origin_name }}
            </h2>

            <div class="flex items-center justify-between mb-4">
              <div class="flex">
                <Star
                  v-for="i in 4"
                  :key="`star-filled-${i}`"
                  class="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                />
                <Star class="w-8 h-8 text-gray-500" />
              </div>
              <div class="text-gray-300">{{ movie?.time }}</div>
            </div>
          </div>

          <!-- Episode Selection -->
          <div v-for="(episode, index) in episodes" :key="index" class="mb-8">
            <h3 class="text-lg font-medium mb-3">{{ episode.server_name }}</h3>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="severData in episode.server_data"
                :key="`${severData.slug}`"
                :class="[
                  'w-24 h-10 rounded border border-gray-600 flex items-center justify-center',
                  severData.slug === episodeUrl
                    ? 'bg-[#dd003f] border-[#dd003f]'
                    : 'hover:bg-gray-700',
                ]"
                @click="handleEpisodeClick(severData.slug)"
              >
                {{ severData.slug.replace('tap-', '') }}
              </button>
            </div>
          </div>

          <!-- Movie Details -->
          <div class="flex gap-6 mb-8">
            <div class="w-48 flex-shrink-0">
              <img
                src="/placeholder.svg?height=280&width=190"
                alt="Dragon Ball Super Movie: Broly Poster"
                class="w-full rounded-md"
              />
            </div>

            <div class="flex-1">
              <h2 class="text-xl font-bold mb-3">
                {{ movie?.name }}
              </h2>
              <h3 class="text-lg text-gray-300 mb-4">
                {{ movie?.origin_name }}
              </h3>

              <p class="text-gray-300 mb-6 leading-relaxed">
                {{ movie?.content }}
              </p>

              <!-- Social Actions -->
              <div class="flex gap-4 mt-6">
                <button
                  class="flex items-center gap-2 text-white hover:text-[#dd003f]"
                >
                  <Heart class="w-5 h-5" />
                  Theo dõi
                </button>
                <button
                  class="flex items-center gap-2 text-white hover:text-[#dd003f]"
                >
                  <Share2 class="w-5 h-5" />
                  Chia sẻ
                </button>
                <button
                  class="flex items-center gap-2 text-white hover:text-[#dd003f]"
                >
                  <Facebook class="w-5 h-5" />
                  Lưu vào Facebook
                </button>
              </div>
            </div>
          </div>

          <!-- Comments Section -->
          <!-- <div class="mb-8">
            <h3 class="text-lg font-medium mb-4">1 bình luận</h3> -->

          <!-- Comment -->
          <!-- <div class="flex gap-4 mb-6">
              <div class="w-12 h-12 flex-shrink-0">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="User Avatar"
                  class="w-full h-full rounded-full"
                >
              </div>
              <div class="flex-1">
                <div class="mb-1">
                  <span class="font-medium">Bá Hà Trần</span>
                </div>
                <p class="mb-2">Phim rất hay !</p>
                <div class="flex">
                  <Star
                    v-for="i in 5"
                    :key="`comment-star-${i}`"
                    class="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div> -->

          <!-- Comment Form -->
          <!-- <div class="flex gap-4">
              <div class="w-12 h-12 flex-shrink-0">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="User Avatar"
                  class="w-full h-full rounded-full"
                >
              </div>
              <div class="flex-1">
                <input
                  type="text"
                  placeholder="Viết bình luận của bạn..."
                  class="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white"
                >
              </div>
            </div>
          </div> -->

          <!-- You Might Also Like -->
          <div class="mb-8">
            <h3 class="text-lg font-medium mb-4">Có thể bạn muốn xem</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                v-for="i in 4"
                :key="`related-${i}`"
                class="group cursor-pointer"
              >
                <div class="relative overflow-hidden rounded-md">
                  <img
                    :src="`/placeholder.svg?height=180&width=320`"
                    :alt="`Related Movie ${i}`"
                    class="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                  >
                    <div class="p-3 w-full">
                      <h3 class="text-sm font-bold">Related Movie {{ i }}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="w-full lg:w-80 flex-shrink-0">
          <h3 class="text-lg font-medium mb-4">Các phim tương tự</h3>
          <div class="space-y-4">
            <div
              v-for="i in 4"
              :key="`similar-${i}`"
              class="group cursor-pointer"
            >
              <div class="relative overflow-hidden rounded-md">
                <img
                  :src="`/placeholder.svg?height=180&width=320`"
                  :alt="`Similar Movie ${i}`"
                  class="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                >
                  <div class="p-3 w-full">
                    <h3 class="text-sm font-bold">Similar Movie {{ i }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import HlsPlayer from '~/components/HlsPlayer.vue'
import HlsPlayer from '~/components/PlyrHlsPlayer.vue'
import { Heart, Facebook, Share2 } from 'lucide-vue-next'
import type { Episode, EpisodeData, Movie } from '~/entities/Movie'
import { useRoute, useRouter } from 'vue-router'

import { useMovieStore } from '~/stores'
const movieStore = useMovieStore()
const route = useRoute()
const movie = ref<Movie>()
const episodes = ref<Episode[]>([])
const hlsUrl = ref<string>()

const slug = route.params.slug
const episodeUrl = route.params.episode
onBeforeMount(async () => {
  // Fetch movie data based on the slug
  const data = await movieStore.getMovieBySlug(slug as string)
  if (data) {
    movie.value = data.movie
    episodes.value = data.episodes
  }

  episodes.value[0].server_data.sort((a: EpisodeData, b: EpisodeData) => {
    if (a.slug === episodeUrl || a.slug === 'full') {
      hlsUrl.value = a.link_m3u8
    }

    const numA = parseInt(a.slug.replace('tap-', ''), 10)
    const numB = parseInt(b.slug.replace('tap-', ''), 10)
    return numB - numA
  })
})

const router = useRouter()
const handleEpisodeClick = (slug: string) => {
  router.push(`/play/nhat-ky-cua-me/${slug}`)
}
</script>

<style>
/* You can add any additional custom styles here */
/* Most styling is handled by Tailwind CSS classes */
</style>
