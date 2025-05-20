<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  value: {
    type: [Number, String],
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
})

const chooseValue = computed(() => {
  let value = ''
  if (props.options.length > 0) {
    props.options.forEach((item) => {
      if (props.value === item.value) {
        value = item.name
      }
    })
  }
  return value
})

const showDropDown = ref(false)

const onPress = () => {
  showDropDown.value = !showDropDown.value
}
</script>
<template>
  <div class="position-relative">
    <button type="button" class="btn btn-link text-decoration-none sort-selector px-0" @click="onPress">
      <span class="d-flex align-items-center">
        <div style="width: 24px; height: 24px;">
          <SvgIcon name="descending" color="#452B14" :size="24"/>
        </div>
        <p>{{ chooseValue }}</p>
      </span>
    </button>
    <ul class="position-absolute sort-selector-dropdown py-2 px-0 bg-white" :class="{ 'hide': showDropDown }">
      <li v-for="(item, key) in options" class="w-100 d-flex align-items-center" :key="key">
        <div class="sort-selector-item d-flex align-items-center">
          <SvgIcon v-if="item.icon" name="descending" color="#452B14" />
          <p>
            {{ item.name }}
          </p>
        </div>
        <SvgIcon v-if="value === item.value" name="check" color="#A87D57" :size="28" />
      </li>
    </ul>
  </div>
</template>
