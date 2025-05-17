<template>
  <div class="schedule-calendar">
    <Calendar
      :rows="1"
      :columns="1"
      is-expanded
      :title-position="'left'"
      :show-months="1"
      :locale="'zh-TW'"
      :min-date="new Date()"
      :attributes="attrs"
    />

    <div class="legend mt-3 small">
      <span class="legend-box bg-danger"></span> 有約
      <span class="legend-box bg-warning"></span> 待回覆
      <span class="legend-box bg-secondary"></span> 休假
      <span class="legend-box bg-success"></span> 可接案
      <span class="legend-box border border-primary"></span> 今天
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Calendar } from 'v-calendar'
import 'v-calendar/style.css'

const props = defineProps({
  modelValue: Array, // [{ date: '2025-04-01', status: '休假' }]
  weeklyMode: Boolean,
  editMode: Boolean
})

const statusColors = {
  '有約': 'bg-danger text-white',
  '待回覆': 'bg-warning text-dark',
  '休假': 'bg-secondary text-white',
  '可接案': 'bg-success text-white'
}

const attrs = computed(() => {
  return props.modelValue.map(item => {
    return {
      key: item.date,
      dates: item.date,
      customData: { status: item.status },
      highlight: {
        class: statusColors[item.status] || '',
        contentClass: 'text-white'
      },
      content: {
        class: 'd-flex justify-content-center align-items-center w-100 h-100'
      }
    }
  }).concat({
    key: 'today',
    dates: new Date(),
    highlight: {
      class: 'border border-primary'
    },
    content: {
      class: 'd-flex justify-content-center align-items-center w-100 h-100'
    }
  })
})

</script>

<style scoped>
.legend-box {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border-radius: 3px;
  vertical-align: middle;
}
</style>
