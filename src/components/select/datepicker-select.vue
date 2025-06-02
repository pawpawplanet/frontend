<script setup>
import { ref, computed, useTemplateRef, nextTick, onMounted, onUnmounted } from 'vue'
import { format } from 'date-fns'

defineProps({
  prependIcon: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  backgroundIsTransparent: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: 'select'
  },
  disabledDates: {
    type: Boolean,
  },
})


const dateModel = defineModel()

const select = useTemplateRef('select')

const showDropDown = ref(false)

const masks = ref({
  modelValue: 'YYYY-MM-DD',
});

const dateText = computed(() => {
  const { start, end } = dateModel.value
  const startDate = format(start, 'yyyy-MM-dd')
  if (end) {
    const endDate = format(end, 'yyyy-MM-dd')
    if (startDate !== endDate) {
      return `${startDate}-${endDate}`
    } else {
      return startDate
    }
  }
  return startDate
})

const onPress = () => {
  showDropDown.value = !showDropDown.value
}

const clickOtherElement = (e) => {
  if (select.value && !select.value.contains(e.target)) {
    showDropDown.value = false
  }
}

const updateDate = () => {
  showDropDown.value = false
}

onMounted(() => {
  nextTick(() => {
    document.addEventListener('click', (e) => clickOtherElement(e))
  })
})

onUnmounted(() => {
  document.removeEventListener('click', (e) => clickOtherElement(e))
})
</script>

<template>
  <div ref="select" class="custom-select">
    <label v-if="label.length > 0" for="service" class="home-search-label">{{ label }}</label>
    <div class="py-3 position-relative">
      <div class="custom-select-input" :class="{ 'bg-transparent': backgroundIsTransparent }" @click="onPress">
        <div v-if="prependIcon.length > 0" class="flex-0">
          <SvgIcon :name="prependIcon" color="#452B14" :size="28" />
        </div>
        <div class="flex-1">
          <input v-model="dateText" :placeholder="placeholder" :id="id" readonly />
        </div>
        <div class="flex-0">
          <SvgIcon
            name="chevron_down"
            :size="20"
            color="#452B14"
            :class="{ 'custom-select-append': showDropDown }"
          />
        </div>
      </div>
      <ul class="custom-select-options datepicker" :class="{ 'hide': showDropDown }">
        <VDatePicker
          v-model.range="dateModel"
          mode="date"
          class="w-100"
          :min-date="new Date()"
          :masks="masks"
          @update:modelValue="updateDate"
        />
      </ul>
    </div>
  </div>
</template>
