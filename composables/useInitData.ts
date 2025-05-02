import { onBeforeMount } from 'vue'
import { useCategoryStore, useMovieStore } from '~/stores'

export function useInitData() {
  const categoryStore = useCategoryStore()
  const movieStore = useMovieStore()
  onBeforeMount(async () => {
    categoryStore.fetchCategory()
    categoryStore.fetchCountry()
    movieStore.fetchMovieNews()
  })
}
