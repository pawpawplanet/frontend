<script setup>
import SortSelector from '@/components/select/sort-selector.vue'
import { ref } from 'vue'

defineProps({
  total: {
    type: Number,
  },
  selectValue: {
    type: [Number, String],
  },
})

const sortList = ref([
  {
    value: 1,
    name: '最新到最舊',
    icon: 'descending',
  },
  {
    value: 2,
    name: '最舊到最新',
    icon: 'ascending',
  },
  {
    value: 3,
    name: '評價最高到最低',
    icon: 'descending',
  },
])
</script>
<template>
  <div class="w-100 pt-3">
    <div class="d-flex flex-wrap">
      <div class="flex-1">
        <p class="freelancer-list-num">共 {{ total }} 個搜尋結果</p>
      </div>
      <div class="flex-1">
        <div class="d-flex justify-content-end">
          <SortSelector :options="sortList" :value="selectValue" />
        </div>
      </div>
    </div>
  </div>
</template>
