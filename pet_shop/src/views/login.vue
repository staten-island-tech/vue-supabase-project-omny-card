<template>
  <div>
    <h1>Login</h1>

    <input v-model="email" type="email" placeholder="Email" />
    <br />

    <input v-model="password" type="password" placeholder="Password" />
    <br />

    <button @click="handleLogin" :disabled="auth.loading">
      {{ auth.loading ? 'Logging in...' : 'Login' }}
    </button>

    <p v-if="auth.error" style="color: red">
      {{ auth.error }}
    </p>

    <p v-if="auth.user" style="color: green">Logged in as: {{ auth.user.email }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const auth = useAuthStore()

const handleLogin = async () => {
  await auth.login(email.value, password.value)

  if (auth.user) {
    router.push('/pets')
  }
}
</script>
