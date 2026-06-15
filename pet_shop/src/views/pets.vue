<template>
  <div>
    <div v-if="loggedIn">
      <h1>Shop</h1>

      <div class="grid">
        <div v-for="pet in pets[0]" :key="pet.id" class="card">
          <h2 class="name">{{ pet.name }}</h2>

          <div class="info">
            <p><strong>Breed:</strong> {{ pet.breed }}</p>
            <p><strong>Age:</strong> {{ pet.age }}</p>
            <p><strong>Gender:</strong> {{ pet.gender }}</p>
            <p><strong>Price:</strong> ${{ pet.price }}</p>
            <p>
              <strong>Status:</strong>
              <span :class="pet.status.toLowerCase()">
                {{ pet.status }}
              </span>
            </p>
          </div>
        </div>
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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.name {
  margin-bottom: 10px;
}

.info p {
  margin: 6px 0;
}

.available {
  color: green;
  font-weight: bold;
}

.sold {
  color: red;
  font-weight: bold;
}

.pending {
  color: orange;
  font-weight: bold;
}
</style>
