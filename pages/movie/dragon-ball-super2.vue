<template>
  <div class="min-h-screen bg-[#06121e] text-white">
    <!-- Header -->
    <header class="bg-[#09080b] py-3 px-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/" class="mr-8">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="MoonPlay"
              class="w-10 h-10 rounded-full"
            >
          </NuxtLink>
          <nav class="hidden md:flex space-x-6">
            <NuxtLink to="/" class="text-white hover:text-[#dd003f]">
              Trang chủ
            </NuxtLink>
            <NuxtLink to="/gioi-thieu" class="text-white hover:text-[#dd003f]">
              Giới thiệu
            </NuxtLink>
            <NuxtLink to="/kho-phim" class="text-white hover:text-[#dd003f]">
              Kho phim
            </NuxtLink>
            <NuxtLink to="/phim-dien-anh" class="text-white hover:text-[#dd003f]">
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
        <button class="bg-[#dd003f] hover:bg-[#dd003f]/80 text-white rounded-md px-4 py-1">
          Đăng nhập
        </button>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Main Content -->
        <div class="w-full lg:w-3/4">
          <!-- Video Player -->
          <div class="relative bg-black rounded-md overflow-hidden mb-6">
            <img 
              src="/placeholder.svg?height=500&width=900" 
              alt="Dragon Ball Super Movie: Broly" 
              class="w-full aspect-video object-cover"
            >
            
            <!-- Video Controls -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-4">
                  <button class="text-white hover:text-[#dd003f]">
                    <Play class="w-6 h-6" />
                  </button>
                  <button class="text-white hover:text-[#dd003f]">
                    <RotateCcw class="w-5 h-5" />
                  </button>
                  <button class="text-white hover:text-[#dd003f]">
                    <RefreshCw class="w-5 h-5" />
                  </button>
                  <button class="text-white hover:text-[#dd003f]">
                    <Volume2 class="w-5 h-5" />
                  </button>
                </div>
                <div class="flex items-center gap-3">
                  <button class="text-white hover:text-[#dd003f]">
                    <Maximize2 class="w-5 h-5" />
                  </button>
                  <button class="text-white hover:text-[#dd003f]">
                    <Settings class="w-5 h-5" />
                  </button>
                  <button class="text-white hover:text-[#dd003f]">
                    <LayoutPanelLeft class="w-5 h-5" />
                  </button>
                  <button class="text-white hover:text-[#dd003f]">
                    <MonitorSmartphone class="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <!-- Progress Bar -->
              <div class="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                <div class="h-full bg-[#dd003f] w-[40%]"/>
              </div>
            </div>
            
            <!-- Center Play Button -->
            <div class="absolute inset-0 flex items-center justify-center">
              <button class="bg-white/20 rounded-full p-4 backdrop-blur-sm">
                <Pause class="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
          
          <!-- Movie Title and Rating -->
          <div class="mb-6">
            <h1 class="text-3xl font-bold mb-1">Dragon Ball Super Movie: Broly</h1>
            <h2 class="text-xl text-gray-300 mb-3">Bảy Viên Ngọc Rồng Siêu Cấp: Huyền Thoại Broly (2018)</h2>
            
            <div class="flex items-center justify-between mb-4">
              <div class="flex">
                <Star v-for="i in 4" :key="`star-filled-${i}`" class="w-8 h-8 text-yellow-400" fill="currentColor" />
                <Star class="w-8 h-8 text-gray-500" />
              </div>
              <div class="text-gray-300">
                Thuyết minh: 10/10
              </div>
            </div>
          </div>
          
          <!-- Episode Selection -->
          <div class="mb-8">
            <h3 class="text-lg font-medium mb-3">Danh sách tập</h3>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="episode in 10" 
                :key="`episode-${episode}`"
                :class="[
                  'w-12 h-10 rounded border border-gray-600 flex items-center justify-center',
                  episode === 1 ? 'bg-[#dd003f] border-[#dd003f]' : 'hover:bg-gray-700'
                ]"
              >
                {{ episode }}
              </button>
            </div>
          </div>
          
          <!-- Movie Details -->
          <div class="flex flex-col md:flex-row gap-6 mb-8">
            <div class="w-full md:w-48 flex-shrink-0">
              <img 
                src="/placeholder.svg?height=280&width=190" 
                alt="Dragon Ball Super Movie: Broly Poster" 
                class="w-full rounded-md"
              >
            </div>
            
            <div class="flex-1">
              <h2 class="text-xl font-bold mb-3">Dragon Ball Super Movie: Broly</h2>
              <h3 class="text-lg text-gray-300 mb-4">Bảy Viên Ngọc Rồng Siêu Cấp: Huyền Thoại Broly (2018)</h3>
              
              <p class="text-gray-300 mb-6 leading-relaxed">
                Chào mừng bạn đến với trang web MoonPlay - nơi bạn có thể khám phá thế giới tuyệt vời của điện ảnh và trải nghiệm những bộ phim đẹp và đầy cảm xúc. Với một thư viện phong phú được đăng hàng ngàn bộ phim từ mọi thể loại, chúng tôi mang đến cho bạn những giờ phút thư giãn và hứng khởi.
              </p>
              <p class="text-gray-300 leading-relaxed">
                Cốt truyện của "Bảy Viên Ngọc Rồng" xoay quanh việc tìm kiếm và thu thập bảy viên ngọc rồng. Mỗi viên ngọc có khả năng...
              </p>
              
              <!-- Social Actions -->
              <div class="flex gap-4 mt-6">
                <button class="flex items-center gap-2 text-white hover:text-[#dd003f]">
                  <Heart class="w-5 h-5" />
                  Theo dõi
                </button>
                <button class="flex items-center gap-2 text-white hover:text-[#dd003f]">
                  <Share2 class="w-5 h-5" />
                  Chia sẻ
                </button>
                <button class="flex items-center gap-2 text-white hover:text-[#dd003f]">
                  <Facebook class="w-5 h-5" />
                  Lưu vào Facebook
                </button>
              </div>
            </div>
          </div>
          
          <!-- Comments Section -->
          <div class="mb-8">
            <h3 class="text-lg font-medium mb-4">1 bình luận</h3>
            
            <!-- Comment -->
            <div class="flex gap-4 mb-6">
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
                  <Star v-for="i in 5" :key="`comment-star-${i}`" class="w-4 h-4 text-yellow-400" fill="currentColor" />
                </div>
              </div>
            </div>
            
            <!-- Comment Form -->
            <div class="flex gap-4">
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
          </div>
          
          <!-- You Might Also Like -->
          <div class="mb-8">
            <h3 class="text-lg font-medium mb-4">Có thể bạn muốn xem</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div v-for="i in 4" :key="`related-${i}`" class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-md">
                  <img 
                    :src="`/placeholder.svg?height=180&width=320`" 
                    :alt="`Related Movie ${i}`" 
                    class="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
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
        <div class="w-full lg:w-1/4 flex-shrink-0">
          <h3 class="text-lg font-medium mb-4">Các phim tương tự</h3>
          <div class="space-y-4">
            <div v-for="i in 4" :key="`similar-${i}`" class="group cursor-pointer">
              <div class="relative overflow-hidden rounded-md">
                <img 
                  :src="`/placeholder.svg?height=180&width=320`" 
                  :alt="`Similar Movie ${i}`" 
                  class="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
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

    <!-- Footer -->
    <footer class="bg-[#09080b] py-8 mt-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between gap-8">
          <div class="flex items-center mb-4 md:mb-0">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="MoonPlay"
              class="w-10 h-10 rounded-full mr-2"
            >
            <span class="text-lg font-bold">MOONPLAY</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-lg font-medium mb-4">Giới thiệu</h3>
              <p class="text-sm text-gray-400 mb-4">
                Moon Play là dịch vụ được cung cấp bởi Công ty Cổ Phần Moon Play, thành viên của Công ty Cổ Phần Giải
                Trí và Giáo Dục Moon
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
  </div>
</template>

<script setup>
import { 
  Play,
  Pause,
  RotateCcw,
  RefreshCw,
  Volume2,
  Maximize2,
  Settings,
  LayoutPanelLeft,
  MonitorSmartphone,
  Star,
  Heart,
  Share2,
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter as TikTok 
} from 'lucide-vue-next'
</script>