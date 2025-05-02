<template>
  <!-- Header -->
  <header class="bg-[#09080b]/80 py-3 px-4 sticky top-0 z-50">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/" class="mr-8">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="MoonPlay"
              class="w-10 h-10 rounded-full"
            />
          </NuxtLink>
          <nav class="hidden md:flex space-x-6">
            <NuxtLink to="/gioi-thieu" class="text-white hover:text-[#dd003f]">
              Giới thiệu
            </NuxtLink>
            <NuxtLink to="/kho-phim" class="text-white hover:text-[#dd003f]">
              Kho phim
            </NuxtLink>
            <NuxtLink
              to="/phim-dien-anh"
              class="text-white hover:text-[#dd003f]"
            >
              Phim điện ảnh
            </NuxtLink>
            <NuxtLink to="/phim-bo" class="text-white hover:text-[#dd003f]">
              Phim bộ
            </NuxtLink>
            <NuxtLink to="/khuyen-mai" class="text-white hover:text-[#dd003f]">
              Khuyến mãi
            </NuxtLink>
            <NuxtLink to="/tin-tuc" class="text-white hover:text-[#dd003f]">
              Tin tức
            </NuxtLink>
            <NuxtLink to="/lien-he" class="text-white hover:text-[#dd003f]">
              Liên hệ
            </NuxtLink>
          </nav>
        </div>
        <button
          class="bg-[#dd003f] hover:bg-[#dd003f]/80 text-white rounded-md px-4 py-1"
        >
          Đăng nhập
        </button>
      </div>
    </header>
</template>
