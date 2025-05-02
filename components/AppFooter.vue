<template>
  <!-- Footer -->
  <footer class="bg-[#09080b] py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between gap-8">
          <div class="flex items-center mb-4 md:mb-0">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="MoonPlay"
              class="w-10 h-10 rounded-full mr-2"
            />
            <span class="text-lg font-bold">MOONPLAY</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-lg font-medium mb-4">Giới thiệu</h3>
              <p class="text-sm text-gray-400 mb-4">
                Moon Play là dịch vụ được cung cấp bởi Công ty Cổ Phần Moon
                Play, thành viên của Công ty Cổ Phần Giải Trí và Giáo Dục Moon
              </p>
            </div>

            <div>
              <h3 class="text-lg font-medium mb-4">Hỗ trợ</h3>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>0843601796</li>
                <li>Hoặc kết nối qua:</li>
                <li class="font-medium text-white">Kết nối với chúng tôi</li>
                <li class="flex space-x-4 mt-2">
                  <NuxtLink to="#" class="hover:text-[#dd003f]">
                    <Facebook class="w-6 h-6" />
                  </NuxtLink>
                  <NuxtLink to="#" class="hover:text-[#dd003f]">
                    <Instagram class="w-6 h-6" />
                  </NuxtLink>
                  <NuxtLink to="#" class="hover:text-[#dd003f]">
                    <Youtube class="w-6 h-6" />
                  </NuxtLink>
                  <NuxtLink to="#" class="hover:text-[#dd003f]">
                    <TikTok class="w-6 h-6" />
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-medium mb-4">Quy chế</h3>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>
                  <NuxtLink to="#" class="hover:text-[#dd003f]">
                    Quy chế sử dụng dịch vụ
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="hover:text-[#dd003f]">
                    Chính sách bảo mật
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="hover:text-[#dd003f]">
                    Khuyến mãi
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>
