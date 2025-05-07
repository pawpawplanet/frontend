<script setup>
import SvgIcon from '@/components/svg-icon/svg-icon.vue'
// import { ref, computed } from 'vue'

defineProps({
  prependIcon: {
    type: String,
    default: '',
  },
  appendIcon: {
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
})

const model = defineModel()

</script>
<template>
  <div class="custom-input">
    <label v-if="label.length > 0" for="service" class="home-search-label">{{ label }}</label>
    <div class="py-3 position-relative">
      <div class="custom-input-input" :class="{ 'bg-transparent': backgroundIsTransparent }">
        <div v-if="prependIcon.length > 0" class="flex-0">
          <SvgIcon :name="prependIcon" color="#452B14" :size="28" />
        </div>
        <div class="flex-1">
          <input v-model="model" :placeholder="placeholder" />
        </div>
        <div v-if="appendIcon.length > 0" class="flex-0">
          <SvgIcon
            name="chevron_down"
            :size="20"
            color="#452B14"
          />
        </div>
      </div>
    </div>
  </div>
</template>
