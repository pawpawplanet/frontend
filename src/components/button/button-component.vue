<script setup>
const props = defineProps({
  class: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  appendIcon: {
    type: String,
    default: '',
  },
  appendIconColor: {
    type: String,
  },
  iconSize: {
    type: Number,
  },
})
</script>
<template>
  <button
    type="button"
    class="btn custom-btn fw-bold"
    :class="props.class"
  >
    <span class="d-inline-block pb-2">
      {{ text }}
    </span>
    <SvgIcon v-if="appendIcon.length > 0" :name="appendIcon" :color="appendIconColor" :size="iconSize" />
  </button>
</template>
