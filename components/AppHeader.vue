<template>
  <!-- Header -->
  <header class="bg-[#09080b] py-3 px-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/" class="mr-6">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="MoonPlay"
              class="w-10 h-10 rounded-full"
            />
          </NuxtLink>
          <nav class="hidden md:flex space-x-4 lg:space-x-6">
            <!-- Thể loại with submenu -->
            <div class="relative group">
              <NuxtLink to="/kho-phim" class="text-white hover:text-[#dd003f] text-sm flex items-center gap-1">
                Thể loại
                <ChevronDown class="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </NuxtLink>
              
              <!-- Submenu -->
              <div class="absolute left-0 top-full mt-1 bg-[#0d0d0d] border border-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[800px] p-4">
                <div class="grid grid-cols-5">
                  <div v-for="column in 5" :key="`column-${column}`">
                    <ul class="">
                      <li v-for="item in getColumnItems(column)" :key="`submenu-${item}`">
                        <NuxtLink 
                          :to="`/kho-phim/${item.slug}`" 
                          class="text-gray-300 hover:text-[#dd003f] text-sm flex items-center gap-1"
                        >
                          <Film class="w-3 h-3" />
                          Phim {{ item.name }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="mt-4 pt-3 border-t border-gray-800">
                  <NuxtLink to="/kho-phim" class="text-[#dd003f] hover:underline text-sm flex items-center justify-center gap-1">
                    Xem tất cả phim
                    <ArrowRight class="w-3 h-3" />
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- Quốc gia with submenu -->
            <div class="relative group">
              <NuxtLink to="/kho-phim" class="text-white hover:text-[#dd003f] text-sm flex items-center gap-1">
                Quốc gia
                <ChevronDown class="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </NuxtLink>
              
              <!-- Submenu -->
              <div class="absolute left-0 top-full mt-1 bg-[#0d0d0d] border border-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[800px] p-4">
                <div class="grid grid-cols-5">
                  <div v-for="column in 5" :key="`column-${column}`">
                    <ul class="">
                      <li v-for="item in getCountryItems(column)" :key="`submenu-${item}`">
                        <NuxtLink 
                          :to="`/kho-phim/${item.slug}`" 
                          class="text-gray-300 hover:text-[#dd003f] text-sm flex items-center gap-1"
                        >
                          <Film class="w-3 h-3" />
                          Phim {{ item.name }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="mt-4 pt-3 border-t border-gray-800">
                  <NuxtLink to="/kho-phim" class="text-[#dd003f] hover:underline text-sm flex items-center justify-center gap-1">
                    Xem tất cả phim
                    <ArrowRight class="w-3 h-3" />
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- Năm with submenu -->
            <div class="relative group">
              <NuxtLink to="/kho-phim" class="text-white hover:text-[#dd003f] text-sm flex items-center gap-1">
                Năm
                <ChevronDown class="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </NuxtLink>
              
              <!-- Submenu -->
              <div class="absolute left-0 top-full mt-1 bg-[#0d0d0d] border border-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[800px] p-4">
                <div class="grid grid-cols-5">
                  <div v-for="column in 5" :key="`column-${column}`">
                    <ul class="">
                      <li v-for="item in getColumnItems(column)" :key="`submenu-${item}`">
                        <NuxtLink 
                          :to="`/kho-phim/${item.slug}`" 
                          class="text-gray-300 hover:text-[#dd003f] text-sm flex items-center gap-1"
                        >
                          <Film class="w-3 h-3" />
                          Phim {{ item.name }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="mt-4 pt-3 border-t border-gray-800">
                  <NuxtLink to="/kho-phim" class="text-[#dd003f] hover:underline text-sm flex items-center justify-center gap-1">
                    Xem tất cả phim
                    <ArrowRight class="w-3 h-3" />
                  </NuxtLink>
                </div>
              </div>
            </div>
            
            <NuxtLink to="/phim-dien-anh" class="text-white hover:text-[#dd003f] text-sm">
              Phim lẻ
            </NuxtLink>
            <NuxtLink to="/phim-bo" class="text-white hover:text-[#dd003f] text-sm">
              Phim bộ
            </NuxtLink>
          </nav>
          
          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu" 
            class="md:hidden text-white hover:text-[#dd003f] ml-2"
          >
            <Menu class="w-6 h-6" v-if="!showMobileMenu" />
            <X class="w-6 h-6" v-else />
          </button>
        </div>
        
        <div class="flex items-center gap-3">
          <!-- Search Input -->
          <div class="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Tìm kiếm phim..." 
              class="bg-[#1a1a1a] border border-gray-700 rounded-full pl-10 pr-4 py-1.5 text-sm w-[200px] lg:w-[250px] focus:outline-none focus:border-[#dd003f] focus:ring-1 focus:ring-[#dd003f]"
              v-model="searchQuery"
            />
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <button 
              v-if="searchQuery" 
              @click="clearSearch" 
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X class="w-3 h-3" />
            </button>
          </div>
          
          <!-- Mobile Search Button -->
          <button 
            @click="toggleMobileSearch" 
            class="md:hidden text-white hover:text-[#dd003f]"
          >
            <Search class="w-5 h-5" />
          </button>
          
          <button class="bg-[#dd003f] hover:bg-[#dd003f]/80 text-white rounded-md px-4 py-1 text-sm">
            Đăng nhập
          </button>
        </div>
      </div>
      
      <!-- Mobile Search Input (Expandable) -->
      <div 
        v-if="showMobileSearch" 
        class="mt-3 px-4 py-2 md:hidden"
      >
        <div class="relative">
          <input 
            type="text" 
            placeholder="Tìm kiếm phim..." 
            class="bg-[#1a1a1a] border border-gray-700 rounded-full pl-10 pr-10 py-2 text-sm w-full focus:outline-none focus:border-[#dd003f] focus:ring-1 focus:ring-[#dd003f] text-white"
            v-model="searchQuery"
            ref="mobileSearchInput"
          />
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <button 
            @click="toggleMobileSearch" 
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X class="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-if="showMobileMenu" 
        class="md:hidden mt-3 bg-[#0d0d0d] border-t border-gray-800"
      >
        <ul class="py-2">
          <li>
            <NuxtLink to="/" class="block px-4 py-2 text-white hover:bg-gray-800">
              Trang chủ
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gioi-thieu" class="block px-4 py-2 text-white hover:bg-gray-800">
              Giới thiệu
            </NuxtLink>
          </li>
          <li>
            <div>
              <button 
                @click="toggleMobileSubmenu" 
                class="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-gray-800"
              >
                <span>Thể loại</span>
                <ChevronDown 
                  class="w-4 h-4" 
                  :class="{ 'rotate-180': showMobileSubmenu }"
                />
              </button>
              
              <div v-if="showMobileSubmenu" class="bg-[#1a1a1a] py-2">
                <NuxtLink 
                  v-for="i in 10" 
                  :key="`mobile-submenu-${i}`"
                  :to="`/kho-phim/phim-${i}`" 
                  class="block px-8 py-2 text-gray-300 hover:bg-gray-800 hover:text-[#dd003f] text-sm"
                >
                  Phim {{ i }}
                </NuxtLink>
                
                <div class="px-8 py-2 border-t border-gray-800 mt-2">
                  <NuxtLink to="/kho-phim" class="text-[#dd003f] hover:underline text-sm flex items-center gap-1">
                    Xem tất cả phim
                    <ArrowRight class="w-3 h-3" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </li>
          <li>
            <NuxtLink to="/phim-dien-anh" class="block px-4 py-2 text-white hover:bg-gray-800">
              Phim điện ảnh
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/phim-bo" class="block px-4 py-2 text-white hover:bg-gray-800">
              Phim bộ
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/khuyen-mai" class="block px-4 py-2 text-white hover:bg-gray-800">
              Khuyến mãi
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tin-tuc" class="block px-4 py-2 text-white hover:bg-gray-800">
              Tin tức
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lien-he" class="block px-4 py-2 text-white hover:bg-gray-800">
              Liên hệ
            </NuxtLink>
          </li>
        </ul>
      </div>
    </header>
</template>
<script setup lang="ts">
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
  Twitter as TikTok,
  Search,
  X,
  ChevronDown,
  ArrowRight,
  Menu,
  Film
} from 'lucide-vue-next'
import type { Category } from '~/entities/Category'
import { useCategoryStore } from '~/stores'
const categoryStore = useCategoryStore()

const categories = computed<Category[]>(() => categoryStore.categories)
const countries = computed<Category[]>(() => categoryStore.countries)
const searchQuery = ref('')
const showMobileSearch = ref(false)
const mobileSearchInput = ref<HTMLElement>()

// Mobile menu functionality
const showMobileMenu = ref(false)
const showMobileSubmenu = ref(false)

const clearSearch = () => {
  searchQuery.value = ''
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  // Close search when opening menu
  if (showMobileMenu.value) {
    showMobileSearch.value = false
  }
}

const toggleMobileSubmenu = () => {
  showMobileSubmenu.value = !showMobileSubmenu.value
}

// Helper function to distribute items across columns
const getColumnItems = (column : number) => {
  const itemsPerColumn = Math.ceil(categories.value.length / 5)
  const startIndex = (column - 1) * itemsPerColumn
  const endIndex = startIndex + itemsPerColumn
  return categories.value.slice(startIndex, endIndex)
}

const getCountryItems = (column : number) => {
  const itemsPerColumn = Math.ceil(countries.value.length / 5)
  const startIndex = (column - 1) * itemsPerColumn
  const endIndex = startIndex + itemsPerColumn
  return countries.value.slice(startIndex, endIndex)
}

const toggleMobileSearch = () => {
  showMobileSearch.value = !showMobileSearch.value
  
  // Focus the input when opening the search
  if (showMobileSearch.value) {
    nextTick(() => {
      mobileSearchInput.value?.focus()
    })
  }
}

// Mock search function
const performSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value)
    // Here you would implement actual search functionality
    // For example: navigating to search results page or showing results dropdown
  }
}
</script>
