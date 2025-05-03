import { onBeforeMount } from 'vue'
import { useCategoryStore, useMovieStore } from '~/stores'

export function useInitData() {
  const categoryStore = useCategoryStore()
  const movieStore = useMovieStore()
  onBeforeMount(async () => {
    if (categoryStore.categories.length === 0) {
      await categoryStore.fetchCategory()
    }
    if (categoryStore.countries.length === 0) {
      await categoryStore.fetchCountry()
    }
    if (movieStore.news.length === 0) {
      await movieStore.fetchMovieNews()
    }
  })
}
