import { useLocalStorage } from '@vueuse/core'

export function useCount() {
  const count = useLocalStorage('pinia/counter/count', 0)

  function inc() {
    count.value += 1
  }
  function dec() {
    count.value -= 1
  }

  return {
    count,
    inc,
    dec,
  }
}