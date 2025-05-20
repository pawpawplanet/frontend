<script setup>
import CustomInput from '@/components/input/custom-input.vue'
import CustomSelect from '@/components/select/custom-select.vue'
import { ref } from 'vue'

const location = ref(null)
const date = ref(null)
const budge = ref(null)
</script>
<template>
  <div class="w-100">
    <div class="row g-0">
      <div class="col-12">
        <CustomInput
          v-model="location"
          prepend-icon="map"
          label=""
          placeholder="選擇你的位置"
        />
      </div>
      <div class="col-12">
        <div class="row g-2">
          <div class="col-6">
            <CustomSelect
              v-model="date"
              prepend-icon="datepicker"
              :options="[]"
              label=""
              placeholder="日期"
              @update-option="updateServiceType"
            />
          </div>
          <div class="col-6">
            <CustomSelect
              v-model="budge"
              prepend-icon="budge"
              :options="[]"
              label=""
              placeholder="預算"
              @update-option="updateServiceType"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
