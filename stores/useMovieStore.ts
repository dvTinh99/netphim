import { defineStore } from 'pinia'
import { useServer1Api } from '~/composables/useServer1Api'
import type { Movie } from '~/entities/Movie'
const { fetchFromServer1 } = useServer1Api()

export const useMovieStore = defineStore('movie', {
  state: () => ({
    news: [] as Movie[],
    // years: [] as number[],
  }),
  actions: {
    async fetchMovieNews() {
      try {
        const data = await fetchFromServer1('danh-sach/phim-moi-cap-nhat-v3')
        console.log('Fetched movie news:', data)
        this.news = data.items.slice(0, 6)
      } catch (error) {
        console.error('API error:', error)
      }
    },
  },
})
