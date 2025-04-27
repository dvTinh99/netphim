<template>
    <div class="bg-gray-900 text-white">
      <header class="p-4 bg-black">
        <h1 class="text-4xl font-bold text-center">Xem Phim</h1>
        <div class="flex justify-center mt-4">
          <input
            type="text"
            class="p-2 w-2/3 rounded bg-gray-800 text-white"
            placeholder="Tìm kiếm phim..."
          />
        </div>
      </header>
  
      <section class="mt-8 p-4">
        <h2 class="text-3xl font-semibold mb-4">Phim Mới Nhất</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <!-- Card Phim -->
          <div class="bg-gray-800 p-4 rounded-lg">
            <img src="https://via.placeholder.com/300x450" alt="Phim" class="w-full h-auto rounded-t-lg" />
            <h3 class="mt-4 text-xl font-semibold">Tên Phim</h3>
            <p class="text-sm text-gray-400">Thể loại: Hành động, Phiêu lưu</p>
          </div>
          <!-- Thêm nhiều phim tại đây -->
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
    // Bạn có thể gọi API hoặc lấy dữ liệu từ store ở đây để hiển thị phim.
  </script>
  
  <style scoped>
  /* Bạn có thể thêm các CSS tuỳ chỉnh tại đây */
  </style>
  