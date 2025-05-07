<script setup>
import SvgIcon from '@/components/svg-icon/svg-icon.vue'
import { ref, computed } from 'vue'

const props = defineProps({
  prependIcon: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    required: true,
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
})

const emit = defineEmits(['updateOption'])

const model = defineModel()

const showDropDown = ref(false)

const chooseValue = computed(() => {
  let value = null
  if (model.value) {
    if (props.options.length !== 0) {
      props.options.forEach((item) => {
        if (model.value === item.value) {
          value = item.name
        }
      })
    }
  }
  return value
})

const onPress = () => {
  showDropDown.value = !showDropDown.value
}

const chooseOption = (option) => {
  onPress()
  emit('updateOption', option)
}
</script>
<template>
  <div class="custom-select">
    <label v-if="label.length > 0" for="service" class="home-search-label">{{ label }}</label>
    <div class="py-3 position-relative">
      <div class="custom-select-input" :class="{ 'bg-transparent': backgroundIsTransparent }" @click="onPress">
        <div v-if="prependIcon.length > 0" class="flex-0">
          <SvgIcon :name="prependIcon" color="#452B14" :size="28" />
        </div>
        <div class="flex-1">
          <input v-model="chooseValue" :placeholder="placeholder" readonly />
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
      <ul class="custom-select-options" :class="{ 'hide': showDropDown }">
        <li
          v-for="option in options"
          class="custom-select-option"
          :key="option.value"
          @click="chooseOption(option)"
        >
          <div v-if="option.icon" class="me-2">
            <SvgIcon :name="option.icon" :color="model === option.value ? '#ECB88A' : '#452B14'" :size="28" />
          </div>
          <p :class="{ 'text-primary': model === option.value }">
            {{ option.name }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
