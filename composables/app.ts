import { useLocalStorage } from '@vueuse/core'

export function useCount() {
  const count = useLocalStorage('pinia/counter/count', 0)

  function inc() {
    count.value++
  }
  function dec() {
    count.value--
  }

  return {
    count,
    inc,
    dec,
  }
}