import { useStorage } from '@vueuse/core'

export function useCount() {
  const count = useStorage('pinia/counter/count', 0)

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

export function useChallenges() {
  const items = useLocalStorage('pinia/challenges/items', [
    {
      id: 1,
      title: 'Complete the steps to enable your account',
      steps: [
        {
          id: 1,
          title: 'Click button',
          description: 'Click at button bellow',
          icon: 'mdi-mouse',
          points: 20,
          done: false
        },
        {
          id: 2,
          title: 'Share link',
          description: 'Click at button bellow',
          icon: 'mdi-mouse',
          points: 60,
          done: false
        }
      ]
    }
  ])

  return {
    items
  }
}