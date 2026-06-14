import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '@/lib/supabase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const error = ref(null)
  const loading = ref(false)

  // 🔐 LOGIN
  const login = async (email, password) => {
    loading.value = true
    error.value = null

    const { data, error: err } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (err) {
      error.value = err.message
      loading.value = false
      return
    }

    user.value = data.user
    loading.value = false
  }

  // 🚪 LOGOUT
  const logout = async () => {
    await supabase.auth.signOut()
    user.value = null
  }

  // 🔄 RESTORE SESSION (important)
  const getUser = async () => {
    const { data } = await supabase.auth.getUser()
    user.value = data.user
  }

  return { user, error, loading, login, logout, getUser }
})
