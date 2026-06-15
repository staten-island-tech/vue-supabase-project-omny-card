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
  background-color: #f8f9fa;
  color: #222;
  min-height: 100vh;
  transition: 0.3s;
}

.dark {
  background-color: #1e1e1e;
  color: #f5f5f5;
  min-height: 100vh;
  transition: 0.3s;
}

nav {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}

nav a {
  padding: 0 1rem;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}

nav a:hover {
  color: #4caf50;
}

button {
  display: block;
  margin: 20px auto;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}
</style>
