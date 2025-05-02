export function useServer1Api() {
  const config = useRuntimeConfig()

  const fetchFromServer1 = async (endpoint: string) => {
    const res = await $fetch(`${config.public.SERVER_1_URL}/${endpoint}`)
    return res
  }

  const fetchFromServer2 = async (endpoint: string) => {
    const res = await $fetch(`${config.public.SERVER_2_URL}/${endpoint}`)
    return res
  }

  return { fetchFromServer1, fetchFromServer2 }
}
