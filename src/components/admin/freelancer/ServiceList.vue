<template>
  <div>
    <h5 class="mb-3">你所服務:</h5>
    <div class="mb-3">
      <h6>在我家:</h6>
      <div
        v-for="item in homeServiceList"
        :key="item.name"
        class="d-flex justify-content-between align-items-center border p-2 rounded mb-2"
      >
        <div>
          <i :class="item.icon"></i> {{ item.name }}
          <div v-if="item.created" class="ms-4 text-primary-dark">
            <small> 價格：{{ item.serviceData.price_unit }}費用 </small>
            <br />
            <small> {{ item.serviceData.price }} TWD </small>
          </div>
        </div>
        <button class="btn btn-outline-primary btn-sm" @click="goEdit(item.type)">提供服務</button>
      </div>
    </div>
    <div>
      <h6>在顧客家:</h6>
      <div
        v-for="item in customerServiceList"
        :key="item.name"
        class="d-flex justify-content-between align-items-center border p-2 rounded mb-2"
      >
        <div>
          <i :class="item.icon"></i> {{ item.name }}
          <div v-if="item.created" class="ms-4 text-primary-dark">
            <small> 價格：{{ item.serviceData.price_unit }}費用 </small>
            <br />
            <small> {{ item.serviceData.price }} TWD </small>
          </div>
        </div>
        <button class="btn btn-outline-primary btn-sm" @click="goEdit(item.type)">提供服務</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from '@/plugins/toast/toast-plugin.js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  isFinished: {
    type: Boolean,
    defauit: true,
  },
  services: {
    type: Array,
    defauit: () => [],
  },
})
const router = useRouter()
const toast = useToast()

const homeServices = [
  { name: '日托', type: 0, icon: 'bi bi-sun' },
  { name: '美容', type: 2, icon: 'bi bi-scissors' },
]

const customerServices = [
  { name: '散步', type: 1, icon: 'bi bi-person-walking' },
  { name: '到府照顧', type: 3, icon: 'bi bi-house-door' },
]

const homeServiceList = computed(() => attachServiceData(homeServices))
const customerServiceList = computed(() => attachServiceData(customerServices))

function attachServiceData(serviceList) {
  return serviceList.map((item) => {
    const matched = props.services.find((s) => s.service_type_id === item.type)
    return {
      ...item,
      created: !!matched,
      serviceData: matched || null,
    }
  })
}

function goEdit(type) {
  //是否已經完成個人資料填寫
  if (!props.isFinished) {
    toast.show('請先填個人資料', 'error')
    return
  }
  router.push(`/freelancer/services/${type}`)
}
</script>
