import { useUserStore } from '@/stores/userStore'
import { onMounted } from 'vue'

export function useUsers() {
  const userStore = useUserStore()

  onMounted(() => {
    userStore.fetchUsers()
  })

  return {
    userStore
  }
}
