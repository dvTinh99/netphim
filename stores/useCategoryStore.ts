import { defineStore } from 'pinia'
import type { Category } from '~/entities/Category'
import { useServer1Api } from '~/composables/useServer1Api'
import type { Country } from '~/entities/Country'
const { fetchFromServer1 } = useServer1Api()

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [] as Category[],
    countries: [] as Country[],
    // years: [] as number[],
  }),
  actions: {
    setCategories(categories: Category[]) {
      console.log('Setting categories:', categories)
      this.categories = categories
    },
    addCategory(category: Category) {
      this.categories.push(category)
    },
    removeCategory(categoryId: string) {
      this.categories = this.categories.filter((c) => c._id !== categoryId)
    },
    async fetchCategory() {
      try {
        const data = await fetchFromServer1('the-loai')
        console.log('Fetched categories:', data)
        this.categories = data
      } catch (error) {
        console.error('API error:', error)
      }
    },
    async fetchCountry() {
      try {
        const data = await fetchFromServer1('quoc-gia')
        console.log('Fetched categories:', data)
        this.countries = data
      } catch (error) {
        console.error('API error:', error)
      }
    },
  },
  persist: { storage: localStorage },
})
