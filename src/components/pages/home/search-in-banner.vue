<script setup>
import { ref } from 'vue'
import CustomSelect from '@/components/select/custom-select.vue'
import CustomInput from '@/components/input/custom-input.vue'
import ButtonComponent from '@/components/button/button-component.vue'

const serviceModel = ref(null)

const serviceTypes = ref([
  {
    value: 1,
    name: '寵物寄宿',
    icon: 'pet_boarding',
  },
  {
    value: 2,
    name: '寵物散步',
    icon: 'pet_walking',
  },
  {
    value: 3,
    name: '寵物美容',
    icon: 'pet_grooming',
  },
  {
    value: 4,
    name: '到府照顧',
    icon: 'home_care',
  },
])

const location = ref(null)

const updateServiceType = (option) => {
  serviceModel.value = option.value
}
</script>
<template>
  <div class="home-banner">
    <div class="container h-100">
      <div class="w-100 h-100 d-flex justify-content-center align-items-center">
        <div class="w-100 home-search">
          <div class="row">
            <div class="col-5">
              <CustomSelect
                v-model="serviceModel"
                prepend-icon="service"
                :options="serviceTypes"
                label="我正在尋找"
                placeholder="選擇服務"
                background-is-transparent
                @update-option="updateServiceType"
              />
            </div>
            <div class="col-5">
              <CustomInput
                v-model="location"
                prepend-icon="map"
                label="附近"
                placeholder="選擇你的位置"
                background-is-transparent
              />
            </div>
            <div class="col-2 d-flex align-self-end">
              <div class="w-100 py-3">
                <ButtonComponent
                  class="btn-primary"
                  text="搜尋"
                  prepend-icon="spotlight"
                  prepend-icon-color="#452B14"
                  :size="28"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="home-cat" src="../../../assets/images/home/cat_ears.png" alt="">
  </div>
</template>
