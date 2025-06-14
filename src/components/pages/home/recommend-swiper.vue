<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import calculRating from '@/utils/calculRating.js'
import { nextTick, ref, useTemplateRef } from 'vue'

defineProps({
  carousels: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
})

const serviceTypeId = ['寵物寄宿', '寵物散步', '寵物美容', '到府服務']
const picRef = useTemplateRef('recommend-pic-1')

let picHeight = ref(0)
const modules = [Navigation]

const onImageLoad = () => {
  nextTick(() => {
    const width = picRef.value[0].getBoundingClientRect().width
    console.log(width)
    picHeight.value = Math.round(width * 0.56)
    // if (picRef.value[0]) {
    // }
  })
}
</script>
<style lang="scss" scoped>
.swiper-prev-btn {
  position: absolute;
  top: 50%;
  left: -70px;
  transform: translateY(-50%);
  border: none;
  z-index: 2;
}
.swiper-next-btn {
  position: absolute;
  top: 50%;
  right: -70px;
  transform: translateY(-50%);
  border: none;
  z-index: 2;
}
</style>
<template>
  <div class="position-relative w-100">
    <button type="button" class="btn swiper-prev-btn" id="prev" @click="prevEl">
      <SvgIcon name="chevron_left" :size="44" color="#452B14" />
    </button>
    <swiper
      :modules="modules"
      class="w-100"
      :slides-per-view="carousels.length > 0 ? 3 : 1"
      :space-between="16"
      :navigation="{ nextEl: '#next', prevEl: '#prev' }"
    >
      <template v-if="!loading && carousels.length > 0">
        <swiper-slide v-for="(item, key) in carousels" :key="key">
          <div class="w-100 bg-white home-recommend-card">
            <div class="w-100 pb-3 home-recommend-card-top">
              <div class="home-recommend-card-img mb-3" :style="{ 'height': `${picHeight}px` }">
                <img :ref="`recommend-pic-${key + 1}`" :src="item.image" alt="" @load="onImageLoad">
              </div>
              <h5 class="home-recommend-card-name text-center">{{ item.freelancer_name }}</h5>
            </div>
            <div class="w-100 pt-3 home-recommend-card-bottom">
              <div class="row gy-3">
                <div class="col-12">
                  <div class="w-100 d-flex align-items-center">
                    <div class="home-recommend-card-left">
                      <p>評價</p>
                    </div>
                    <div class="home-recommend-card-right ps-4">
                      <div class="w-100">
                        <div class="home-recommend-card-row">
                          <div v-for="(index) in 5" class="home-recommend-card-icon" :key="index">
                            <SvgIcon name="star" :size="28" :color="calculRating(item.rating, index)" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="w-100 d-flex align-items-center">
                    <div class="home-recommend-card-left">
                      <p>服務内容</p>
                    </div>
                    <div class="home-recommend-card-right ps-4">
                      <div class="w-100">
                        <p class="home-recommend-card-text">
                          {{ serviceTypeId[item.service_type_id] }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="w-100 d-flex align-items-center">
                    <div class="home-recommend-card-left">
                      <p>價格</p>
                    </div>
                    <div class="home-recommend-card-right ps-4">
                      <div class="w-100">
                        <p class="home-recommend-card-text">NT$ {{ item.price }}/{{ item.price_unit }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </template>
      <template v-else>
        <div class="w-100 d-flex justify-content-center align-items-center" style="height:513px">
          <p class="home-recommend-nodata mb-0">暫無寵物保姆推薦</p>
        </div>
      </template>
    </swiper>
    <button type="button" class="btn swiper-next-btn" id="next" @click="nextEl">
      <SvgIcon name="chevron_right" :size="44" color="#452B14" />
    </button>
  </div>
</template>
