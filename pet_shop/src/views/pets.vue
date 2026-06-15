<template>
  <div>
    <div v-if="loggedIn">
      <h1>Shop</h1>

      <div v-for="pet in pets[0]" :key="pet.id">
        <h2>{{ pet.name }}</h2>
        <p>Breed: {{ pet.breed }}</p>
        <p>Age: {{ pet.age }}</p>
        <p>Gender: {{ pet.gender }}</p>
        <p>Price: ${{ pet.price }}</p>
        <p>Status: {{ pet.status }}</p>
        <hr />
      </div>
    </div>

    <div v-else>
      <h1>Please log in to view the shop.</h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const loggedIn = ref(true)

const pets = [
  [
    {
      id: 1,
      name: 'Bella',
      breed: 'Golden Retriever',
      age: 2,
      gender: 'Female',
      price: 1200,
      status: 'Available',
    },
    {
      id: 2,
      name: 'Max',
      breed: 'French Bulldog',
      age: 1,
      gender: 'Male',
      price: 1800,
      status: 'Sold',
    },
    {
      id: 3,
      name: 'Luna',
      breed: 'Siberian Husky',
      age: 3,
      gender: 'Female',
      price: 1500,
      status: 'Available',
    },
    {
      id: 4,
      name: 'Charlie',
      breed: 'Beagle',
      age: 4,
      gender: 'Male',
      price: 900,
      status: 'Pending',
    },
    {
      id: 5,
      name: 'Daisy',
      breed: 'Poodle',
      age: 2,
      gender: 'Female',
      price: 1300,
      status: 'Available',
    },
    {
      id: 6,
      name: 'Rocky',
      breed: 'German Shepherd',
      age: 5,
      gender: 'Male',
      price: 1600,
      status: 'Available',
    },
    {
      id: 7,
      name: 'Coco',
      breed: 'Shih Tzu',
      age: 1,
      gender: 'Female',
      price: 1100,
      status: 'Sold',
    },
    {
      id: 8,
      name: 'Buddy',
      breed: 'Labrador Retriever',
      age: 3,
      gender: 'Male',
      price: 1400,
      status: 'Available',
    },
    {
      id: 9,
      name: 'Milo',
      breed: 'Corgi',
      age: 2,
      gender: 'Male',
      price: 1700,
      status: 'Pending',
    },
    {
      id: 10,
      name: 'Lucy',
      breed: 'Border Collie',
      age: 4,
      gender: 'Female',
      price: 1250,
      status: 'Available',
    },
  ],
]
</script>

<style scoped>
hr {
  margin: 10px 0;
}
</style>
