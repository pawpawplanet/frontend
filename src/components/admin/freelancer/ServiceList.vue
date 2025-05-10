<template>
  <div>
    <h5 class="mb-3">你所服務:</h5>
    <div class="mb-3">
      <h6>在我家:</h6>
      <div v-for="item in homeServices" :key="item.name" class="d-flex justify-content-between align-items-center border p-2 rounded mb-2">
        <div><i :class="item.icon"></i> {{ item.name }}</div>
        <button class="btn btn-outline-primary btn-sm" @click="goEdit(item.type)">提供服務</button>
      </div>
    </div>
    <div>
      <h6>在顧客家:</h6>
      <div v-for="item in customerServices" :key="item.name" class="d-flex justify-content-between align-items-center border p-2 rounded mb-2">
        <div><i :class="item.icon"></i> {{ item.name }}</div>
        <button class="btn btn-outline-primary btn-sm" @click="goEdit(item.type)">提供服務</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  editMode: {
    type: Boolean,
    defauit: true
  }
})
const router = useRouter()

const homeServices = [
  { name: '日托', type: 0, icon: 'bi bi-sun' },
  { name: '美容', type: 1, icon: 'bi bi-scissors' }
]

const customerServices = [
  { name: '散步', type: 2, icon: 'bi bi-person-walking' },
  { name: '到府照顧', type: 3, icon: 'bi bi-house-door' }
]

function goEdit(type) {
  if (!props.editMode) return
  router.push(`/freelancer/services/${type}`)
}
</script>