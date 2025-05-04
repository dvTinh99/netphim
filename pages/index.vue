<template>
  <div class="min-h-screen bg-[#06121e] text-white">
    <!-- Hero Banner -->
    <div class="relative h-[400px] mb-8">
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#06121e]/80 to-transparent z-10"
      />
      <img
        src="/placeholder.svg?height=400&width=1200"
        alt="DUTY AFTER SCHOOL"
        class="w-full h-full object-cover"
      >
      <div
        class="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16"
      >
        <h1 class="text-5xl font-bold mb-2 text-white tracking-wider">DUTY</h1>
        <h2 class="text-3xl font-bold mb-6 text-white">AFTER SCHOOL</h2>
        <p class="text-xl mb-6 text-white">HỌC KỲ SINH TỬ</p>
        <button
          class="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-md w-max font-medium"
        >
          Đăng ký ngay
        </button>
      </div>
    </div>

    <!-- Hot Movies Section -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Phim hot</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div
          v-for="i in movieNews"
          :key="`hot-${i}`"
          class="relative group cursor-pointer h-[270px]"
        >
          <NuxtLink :to="`/movie/${i.slug}`">
            <img
              :src="i.thumb_url"
              :alt="`Hot Movie ${i}`"
              class="w-full h-[270px] object-cover rounded-md"
            >
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
            >
              <div class="p-3 w-full">
                <h3 class="text-sm font-bold">{{ i.name }}</h3>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Promotion Banner -->
    <section class="container mx-auto px-4 mb-8">
      <div
        class="bg-gradient-to-r from-purple-800 to-purple-500 rounded-lg p-4 relative overflow-hidden"
      >
        <div class="flex items-center justify-between">
          <div class="z-10">
            <h2 class="text-2xl font-bold mb-2">TẶNG THÊM 3 THÁNG</h2>
            <p class="text-lg">KHI MUA GÓI 6 THÁNG VỚI 3 THÁNG</p>
            <button
              class="bg-white text-purple-800 px-4 py-1 rounded mt-2 font-medium"
            >
              MUA NGAY
            </button>
          </div>
          <div class="flex space-x-2 z-10">
            <img
              v-for="i in 4"
              :key="`promo-${i}`"
              :src="`/placeholder.svg?height=150&width=100`"
              :alt="`Promo Movie ${i}`"
              class="w-[80px] h-[120px] rounded-md shadow-lg"
            >
          </div>
        </div>
        <div class="absolute -right-4 top-1/2 -translate-y-1/2">
          <div class="w-16 h-16 rounded-full bg-yellow-300 opacity-70" />
        </div>
        <div class="absolute right-20 bottom-2">
          <div class="w-8 h-8 rounded-full bg-yellow-300 opacity-70" />
        </div>
      </div>
    </section>

    <!-- Top 5 New Movies -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Top 5 phim mới hay</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="i in 5"
          :key="`top-${i}`"
          class="relative group cursor-pointer"
        >
          <div
            class="absolute top-0 left-0 w-8 h-8 bg-[#dd003f] text-white flex items-center justify-center font-bold z-10"
          >
            {{ i }}
          </div>
          <img
            :src="`/placeholder.svg?height=250&width=180`"
            :alt="`Top Movie ${i}`"
            class="w-full h-[250px] object-cover rounded-md"
          >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-3 w-full">
              <h3 class="text-sm font-bold">Movie Title {{ i }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Thai Movies -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Phim Thái đặc sắc</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="i in 5"
          :key="`thai-${i}`"
          class="relative group cursor-pointer"
        >
          <img
            :src="`/placeholder.svg?height=250&width=180`"
            :alt="`Thai Movie ${i}`"
            class="w-full h-[250px] object-cover rounded-md"
          >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-3 w-full">
              <h3 class="text-sm font-bold">Thai Movie {{ i }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Crime Documentary -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Phim Tư liệu Hình sự</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="i in 5"
          :key="`crime-${i}`"
          class="relative group cursor-pointer"
        >
          <img
            :src="`/placeholder.svg?height=250&width=180`"
            :alt="`Crime Documentary ${i}`"
            class="w-full h-[250px] object-cover rounded-md"
          >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-3 w-full">
              <h3 class="text-sm font-bold">Crime Documentary {{ i }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mystery Comedy -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Phim Hài huyền bí</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="i in 5"
          :key="`mystery-${i}`"
          class="relative group cursor-pointer"
        >
          <img
            :src="`/placeholder.svg?height=250&width=180`"
            :alt="`Mystery Comedy ${i}`"
            class="w-full h-[250px] object-cover rounded-md"
          >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-3 w-full">
              <h3 class="text-sm font-bold">Mystery Comedy {{ i }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Korean Movies -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Phim Hàn Quốc</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="i in 5"
          :key="`korean-${i}`"
          class="relative group cursor-pointer"
        >
          <img
            :src="`/placeholder.svg?height=250&width=180`"
            :alt="`Korean Movie ${i}`"
            class="w-full h-[250px] object-cover rounded-md"
          >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-3 w-full">
              <h3 class="text-sm font-bold">Korean Movie {{ i }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Anime -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Phim Anime</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="i in 5"
          :key="`anime-${i}`"
          class="relative group cursor-pointer"
        >
          <img
            :src="`/placeholder.svg?height=250&width=180`"
            :alt="`Anime ${i}`"
            class="w-full h-[250px] object-cover rounded-md"
          >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-3 w-full">
              <h3 class="text-sm font-bold">Anime {{ i }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sci-Fi Movies -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Phim Khoa học viễn tưởng</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="i in 5"
          :key="`scifi-${i}`"
          class="relative group cursor-pointer"
        >
          <img
            :src="`/placeholder.svg?height=250&width=180`"
            :alt="`Sci-Fi Movie ${i}`"
            class="w-full h-[250px] object-cover rounded-md"
          >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-3 w-full">
              <h3 class="text-sm font-bold">Sci-Fi Movie {{ i }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Horror Movies -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Phim Kinh dị</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="i in 5"
          :key="`horror-${i}`"
          class="relative group cursor-pointer"
        >
          <img
            :src="`/placeholder.svg?height=250&width=180`"
            :alt="`Horror Movie ${i}`"
            class="w-full h-[250px] object-cover rounded-md"
          >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-3 w-full">
              <h3 class="text-sm font-bold">Horror Movie {{ i }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Special Movies -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">TOP PHIM ĐẶC SẮC</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="i in 3"
          :key="`special-${i}`"
          class="relative group cursor-pointer"
        >
          <div
            class="absolute top-0 left-0 w-8 h-8 bg-[#dd003f] text-white flex items-center justify-center font-bold z-10"
          >
            {{ i }}
          </div>
          <img
            :src="`/placeholder.svg?height=300&width=400`"
            :alt="`Special Movie ${i}`"
            class="w-full h-[300px] object-cover rounded-md"
          >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-3 w-full">
              <h3 class="text-sm font-bold">Special Movie {{ i }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Deal Banner -->
    <section class="container mx-auto px-4 mb-8">
      <div class="relative h-[150px] rounded-lg overflow-hidden">
        <img
          src="/placeholder.svg?height=150&width=1200"
          alt="THE DEAL"
          class="w-full h-full object-cover"
        >
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-8"
        >
          <div>
            <h2 class="text-4xl font-bold mb-2">THE DEAL</h2>
            <p class="text-lg mb-4">BUÔN BÁN BẢN ĐỀ</p>
            <p class="text-sm mb-2">ĐÃ CÓ TRỌN BỘ 8 TẬP</p>
            <button class="bg-[#dd003f] text-white px-4 py-1 rounded">
              XEM NGAY
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Movie Categories -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Khám phá</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(category, index) in [
            'Phim Chiếu rạp',
            'Phim Cổ trang',
            'Phim Hành động',
          ]"
          :key="`category-${index}`"
          class="relative group cursor-pointer"
        >
          <img
            :src="`/placeholder.svg?height=150&width=400`"
            :alt="category"
            class="w-full h-[150px] object-cover rounded-md brightness-50"
          >
          <div class="absolute inset-0 flex items-center justify-center">
            <h3 class="text-xl font-bold">{{ category }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- More Movies -->
    <section class="container mx-auto px-4 mb-8">
      <h2 class="text-xl font-bold mb-4">Phim đặc sắc</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="i in 5"
          :key="`more-${i}`"
          class="relative group cursor-pointer"
        >
          <img
            :src="`/placeholder.svg?height=250&width=180`"
            :alt="`More Movie ${i}`"
            class="w-full h-[250px] object-cover rounded-md"
          >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-3 w-full">
              <h3 class="text-sm font-bold">More Movie {{ i }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '~/entities/Movie'
import { useMovieStore } from '~/stores'
const movieStore = useMovieStore()

const movieNews = computed<Movie[]>(() => movieStore.news)
</script>

<style>
/* You can add any additional custom styles here */
/* Most styling is handled by Tailwind CSS classes */
</style>
