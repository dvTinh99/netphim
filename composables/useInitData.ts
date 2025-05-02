import { onBeforeMount } from 'vue'
import { useCategoryStore } from '~/stores'

export function useInitData() {
  const categoryStore = useCategoryStore()
  onBeforeMount(async () => {
    categoryStore.fetchCategory()
  })
}
