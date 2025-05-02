<template>
<div class="min-h-screen bg-[#06121e] text-white">
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

    <!-- Hero Section with Movie Background -->
    <div class="relative">
    <div class="absolute inset-0 bg-gradient-to-r from-[#06121e] via-[#06121e]/70 to-transparent z-10"></div>
    <div class="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-60"></div>

    <div class="container mx-auto relative z-20 px-4 py-8">
        <div class="flex flex-col md:flex-row gap-8">
        <!-- Movie Poster -->
        <div class="flex-shrink-0">
            <img
            src="/placeholder.svg?height=400&width=270"
            alt="Dragon Ball Super: Broly"
            class="w-[270px] h-[400px] rounded-lg shadow-lg"
            />
            <button class="w-full mt-4 bg-[#dd003f] hover:bg-[#dd003f]/80 text-white py-3 flex items-center justify-center gap-2 rounded-md">
            <Youtube class="w-5 h-5" />
            XEM PHIM
            </button>
        </div>

        <!-- Movie Details -->
        <div class="flex-1">
            <h1 class="text-3xl md:text-4xl font-bold mb-2">Dragon Ball Super Movie: Broly</h1>
            <h2 class="text-xl text-gray-300 mb-6">Bảy Viên Ngọc Rồng Siêu Cấp: Huyền Thoại Broly (2018)</h2>

            <div class="flex items-center gap-6 mb-4">
            <div class="flex items-center gap-2">
                <Clock class="w-5 h-5 text-gray-400" />
                <span>1 giờ 41 phút</span>
            </div>
            <div class="flex items-center gap-2 bg-[#ffff00] text-black px-2 py-0.5 rounded">
                <Star class="w-4 h-4" />
                <span class="font-bold">7.7</span>
            </div>
            </div>

            <div class="flex items-center gap-4 mb-6">
            <button class="text-white hover:text-[#dd003f] p-0 flex items-center">
                <Facebook class="w-5 h-5 mr-2" />
                Chia sẻ
            </button>
            <button class="text-white hover:text-[#dd003f] p-0 flex items-center">
                <Share2 class="w-5 h-5 mr-2" />
                Đã xem
            </button>
            </div>

            <div class="flex flex-wrap gap-2 mb-8">
            <span class="px-4 py-1 bg-[#09080b] rounded-full text-sm border border-gray-700">Hành động</span>
            <span class="px-4 py-1 bg-[#09080b] rounded-full text-sm border border-gray-700">Hoạt hình</span>
            <span class="px-4 py-1 bg-[#09080b] rounded-full text-sm border border-gray-700">Viễn tưởng</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
                <p class="text-gray-400 mb-1">Đạo diễn</p>
                <p>Tatsuya Nagamine</p>
            </div>
            <div>
                <p class="text-gray-400 mb-1">Quốc gia</p>
                <p>Nhật bản</p>
            </div>
            <div>
                <p class="text-gray-400 mb-1">Khởi chiếu</p>
                <p>14/12/2018</p>
            </div>
            </div>

            <div class="mb-8">
            <p class="text-sm leading-relaxed">
                Dragon Ball Super Movie: Broly là bộ phim thứ 20 trong series Dragon Ball, và là Movie đầu tiên mang
                thương hiệu Dragon Ball Super, lấy bối cảnh khi đế chế Frieza đang lớn, đã gặp không ít bất ngờ.
                Saiyan phải phục vụ làm việc dưới quyền của chúng. Khi đó 3 đứa trẻ Saiyan đã được sinh ra cùng một
                lúc, nhưng số phận của chúng lại hoàn toàn khác nhau: Vegeta là hoàng tử của tộc người Saiyan, Kakarot
                (Goku) là con trai của người quân Bardock, và Broly là con của Paragus.
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
        <div v-for="(actor, index) in actors" :key="index" class="text-center">
        <div class="relative mx-auto w-24 h-24 mb-2">
            <img
            :src="actor.image"
            :alt="actor.name"
            class="w-full h-full rounded-full object-cover"
            />
        </div>
        <h3 class="font-medium text-sm">{{ actor.name }}</h3>
        <p class="text-gray-400 text-xs">{{ actor.character }}</p>
        </div>
    </div>
    </div>

    <!-- Trailer Section -->
    <div class="container mx-auto px-4 py-8">
    <h2 class="text-xl font-bold mb-6 uppercase">Trailer</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(trailer, index) in 3" :key="index" class="relative group cursor-pointer">
        <img
            :src="`/placeholder.svg?height=180&width=320`"
            :alt="`Trailer ${index + 1}`"
            class="rounded-md w-full"
        />
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="bg-[#dd003f] rounded-full p-3">
            <Youtube class="w-6 h-6" />
            </div>
        </div>
        <div v-if="index === 0" class="absolute top-2 left-2 bg-[#dd003f] text-white px-2 py-0.5 text-sm font-bold">
            HD
        </div>
        <div v-if="index > 0" class="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center font-bold">
            TRAILER
        </div>
        </div>
    </div>
    </div>

    <!-- Related Movies -->
    <div class="container mx-auto px-4 py-8">
    <h2 class="text-xl font-bold mb-6 uppercase">Phim tương tự</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div v-for="(movie, index) in 4" :key="index" class="group cursor-pointer">
        <div class="relative overflow-hidden rounded-md">
            <img
            :src="`/placeholder.svg?height=300&width=200`"
            :alt="`Related Movie ${index + 1}`"
            class="w-full transition-transform group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div class="p-3 w-full">
                <h3 class="text-sm font-bold">Dragon Ball Z: {{ index + 1 }}</h3>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

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
Clock, 
Star, 
Facebook, 
Share2, 
Youtube, 
Instagram, 
Twitter as TikTok 
} from 'lucide-vue-next'

// Sample actor data
const actors = [
{
    name: "Masako Nozawa",
    character: "Son Goku / Son Goten / Gogeta / Bardock (Voice)",
    image: "/placeholder.svg?height=150&width=150",
},
{
    name: "Ryou Horikawa",
    character: "Vegeta / Gogeta (Voice)",
    image: "/placeholder.svg?height=150&width=150",
},
{ 
    name: "Bin Shimada", 
    character: "Broly (Voice)", 
    image: "/placeholder.svg?height=150&width=150" 
},
{ 
    name: "Ryusei Nakao", 
    character: "Freeza (Voice)", 
    image: "/placeholder.svg?height=150&width=150" 
},
{
    name: "Banjou Ginga",
    character: "King Vegeta III (Voice)",
    image: "/placeholder.svg?height=150&width=150",
},
]
</script>

<style>
/* You can add any additional custom styles here */
/* Most styling is handled by Tailwind CSS classes */
</style>