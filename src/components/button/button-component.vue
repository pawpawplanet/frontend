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
  prependIcon: {
    type: String,
    default: '',
  },
  prependIconColor: {
    type: String,
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
    <SvgIcon
      v-if="prependIcon.length > 0"
      :name="prependIcon"
      :color="prependIconColor"
      :size="iconSize"
      class="me-2"
    />
    <span class="d-inline-block">
      {{ text }}
    </span>
    <SvgIcon
      v-if="appendIcon.length > 0"
      :name="appendIcon"
      :color="appendIconColor"
      :size="iconSize"
      class="ms-2"
    />
  </button>
</template>
