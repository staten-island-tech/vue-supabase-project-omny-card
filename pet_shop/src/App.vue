<template>
  <div :class="theme">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>

    <button @click="changeTheme">
      {{ buttonText }}
    </button>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const theme = ref('light')
const buttonText = ref('Dark Mode')

function changeTheme() {
  if (theme.value === 'light') {
    theme.value = 'dark'
    buttonText.value = 'Light Mode'
  } else {
    theme.value = 'light'
    buttonText.value = 'Dark Mode'
  }
}
</script>

<style scoped>
.light {
  background-color: white;
  color: black;
  min-height: 100vh;
}

.dark {
  background-color: black;
  color: white;
  min-height: 100vh;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  padding: 0 1rem;
}

button {
  display: block;
  margin: 20px auto;
}
</style>
