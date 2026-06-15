<template>
  <div>
    <div v-if="loggedIn">
      <h1>Shop</h1>
      <div class="tabs">
        <button @click="selectedFilter = 'all'">All</button>
        <button @click="selectedFilter = 'dog'">Dogs</button>
        <button @click="selectedFilter = 'cat'">Cats</button>
      </div>
      <div class="cart">
        <h2>Your Adoption Cart</h2>

        <div v-for="pet in cart" :key="pet.id" class="cart-item">
          <p>
            {{ pet.name }} - {{ pet.breed }}: ${{ pet.price }}
            <button @click="deletepet(pet)">remove</button>
          </p>
        </div>
        <h3 class="total">Total: ${{ total }}</h3>
      </div>

      <div class="grid">
        <div v-for="pet in filteredpets" :key="pet.id" class="card">
          <h2 class="name">{{ pet.name }}</h2>

          <div class="info">
            <p><strong>Species: </strong>{{ pet.species }}</p>
            <p><strong>Breed:</strong> {{ pet.breed }}</p>
            <p><strong>Age:</strong> {{ pet.age }}</p>
            <p><strong>Gender:</strong> {{ pet.gender }}</p>
            <p><strong>Price:</strong> ${{ pet.price }}</p>

            <p>
              <strong>Status: </strong>
              <span :class="pet.status.toLowerCase()">
                {{ pet.status }}
              </span>
            </p>
          </div>

          <button
            class="adopt-btn"
            :disabled="pet.status !== 'Available'"
            @click="adoptPet(pet.id, $event)"
          >
            Adopt
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <h1>Please log in to view the shop.</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import gsap from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  gsap.from('.card', {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
  })
})

const selectedFilter = ref('all')
const loggedIn = ref(true)
const cart = ref([])

const pets = ref([
  [
    {
      id: 1,
      name: 'Bella',
      species: 'Dog',
      breed: 'Golden Retriever',
      age: 2,
      gender: 'Female',
      price: 1200,
      status: 'Available',
    },
    {
      id: 2,
      name: 'Max',
      species: 'Dog',
      breed: 'French Bulldog',
      age: 1,
      gender: 'Male',
      price: 1800,
      status: 'Sold',
    },
    {
      id: 3,
      name: 'Luna',
      species: 'Dog',
      breed: 'Siberian Husky',
      age: 3,
      gender: 'Female',
      price: 1500,
      status: 'Available',
    },
    {
      id: 4,
      name: 'Charlie',
      species: 'Dog',
      breed: 'Beagle',
      age: 4,
      gender: 'Male',
      price: 900,
      status: 'Pending',
    },
    {
      id: 5,
      name: 'Daisy',
      species: 'Dog',
      breed: 'Poodle',
      age: 2,
      gender: 'Female',
      price: 1300,
      status: 'Available',
    },
    {
      id: 6,
      name: 'Rocky',
      species: 'Dog',
      breed: 'German Shepherd',
      age: 5,
      gender: 'Male',
      price: 1600,
      status: 'Available',
    },
    {
      id: 7,
      name: 'Coco',
      species: 'Dog',
      breed: 'Shih Tzu',
      age: 1,
      gender: 'Female',
      price: 1100,
      status: 'Sold',
    },
    {
      id: 8,
      name: 'Buddy',
      species: 'Dog',
      breed: 'Labrador Retriever',
      age: 3,
      gender: 'Male',
      price: 1400,
      status: 'Available',
    },
    {
      id: 9,
      name: 'Milo',
      species: 'Dog',
      breed: 'Corgi',
      age: 2,
      gender: 'Male',
      price: 1700,
      status: 'Pending',
    },
    {
      id: 10,
      name: 'Lucy',
      species: 'Dog',
      breed: 'Border Collie',
      age: 4,
      gender: 'Female',
      price: 1250,
      status: 'Available',
    },
    {
      id: 11,
      name: 'Whiskers',
      species: 'Cat',
      breed: 'Persian',
      age: 2,
      gender: 'Male',
      price: 800,
      status: 'Available',
    },
    {
      id: 12,
      name: 'Luna',
      species: 'Cat',
      breed: 'Siamese',
      age: 1,
      gender: 'Female',
      price: 950,
      status: 'Available',
    },
    {
      id: 13,
      name: 'Oliver',
      species: 'Cat',
      breed: 'Maine Coon',
      age: 3,
      gender: 'Male',
      price: 1200,
      status: 'Sold',
    },
    {
      id: 14,
      name: 'Bella',
      species: 'Cat',
      breed: 'Ragdoll',
      age: 2,
      gender: 'Female',
      price: 1100,
      status: 'Pending',
    },
    {
      id: 15,
      name: 'Leo',
      species: 'Cat',
      breed: 'British Shorthair',
      age: 4,
      gender: 'Male',
      price: 1000,
      status: 'Available',
    },
    {
      id: 16,
      name: 'Milo',
      species: 'Cat',
      breed: 'Bengal',
      age: 1,
      gender: 'Male',
      price: 1400,
      status: 'Available',
    },
    {
      id: 17,
      name: 'Chloe',
      species: 'Cat',
      breed: 'Scottish Fold',
      age: 2,
      gender: 'Female',
      price: 1300,
      status: 'Sold',
    },
    {
      id: 18,
      name: 'Simba',
      species: 'Cat',
      breed: 'Abyssinian',
      age: 3,
      gender: 'Male',
      price: 900,
      status: 'Available',
    },
    {
      id: 19,
      name: 'Nala',
      species: 'Cat',
      breed: 'Sphynx',
      age: 2,
      gender: 'Female',
      price: 1500,
      status: 'Pending',
    },
    {
      id: 20,
      name: 'Coco',
      species: 'Cat',
      breed: 'Russian Blue',
      age: 5,
      gender: 'Female',
      price: 850,
      status: 'Available',
    },
  ],
])

const filteredpets = computed(() => {
  if (selectedFilter.value === 'all') {
    return pets.value[0]
  }

  return pets.value[0].filter((pet) => pet.species.toLowerCase().includes(selectedFilter.value))
})

function adoptPet(id, event) {
  const pet = pets.value[0].find((p) => p.id === id)

  if (pet && pet.status === 'Available') {
    pet.status = 'Adopted'
    cart.value.push(pet)

    gsap.fromTo(
      event.target,
      { scale: 1 },
      {
        scale: 1.2,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      },
    )
  }
}

const total = computed(() => {
  return cart.value.reduce((sum, pet) => sum + pet.price, 0)
})

function deletepet(item) {
  cart.value = cart.value.filter((pet) => pet.id !== item.id)

  const petInShop = pets.value[0].find((p) => p.id === item.id)

  if (petInShop) {
    petInShop.status = 'Available'
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.cart {
  margin-top: 8px;
  border: 2px solid black;
  padding: 20px;
  height: fit-content;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.name {
  margin-bottom: 10px;
}

.info p {
  margin: 6px 0;
}

.adopt-btn {
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #4caf50;
  color: white;
  font-weight: bold;
}

.adopt-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
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

.adopted {
  color: blue;
  font-weight: bold;
}

.card {
  border: 1px solid gray;
  border-radius: 12px;
  padding: 16px;
  background-color: #f8f8f8;
  color: black;
}

.dark .card {
  background-color: #2d2d2d;
  color: white;
}

.dark .cart {
  background-color: #2d2d2d;
  color: white;
  border-color: white;
}
</style>
