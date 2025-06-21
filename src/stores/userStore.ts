import { defineStore } from 'pinia'
import type { User } from '@/interfaces/User'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as any[],
    isLoading: false,
    hasFetched: false,
  }),
  actions: {
    async fetchUsers() {
      if (this.hasFetched) return

      this.isLoading = true
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error('Error al obtener usuarios')
        
        const data = await res.json()
        this.users = data.map((user: any): User => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
        }))
        this.hasFetched = true
      } catch (error) {
        console.error('Error al traer usuarios:', error)
      } finally {
        this.isLoading = false
      }
    },

    addUser(newUser: User) {
      this.users.push(newUser)
    },

    editUser(user: User) {
      const index = this.users.findIndex(u => u.id === user.id)
      if (index !== -1) {
        this.users[index] = user
      }
    },

    deleteUser(userId: number) {
      this.users = this.users.filter(user => user.id !== userId)
    },
  }
})
