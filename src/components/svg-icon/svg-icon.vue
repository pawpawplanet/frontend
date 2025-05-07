<template>
  <svg
    aria-hidden="true"
    :width="props.size"
    :height="props.size"
    :style="{ color: props.color }"
  >
    <use :href="symbolId" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  size: {
    type: [Number, String],
    default: 24,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
