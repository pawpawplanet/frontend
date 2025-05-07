<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { ref, useTemplateRef } from 'vue'

const picRef = useTemplateRef('recommend-pic-1')

let picHeight = ref(0)
const modules = [Navigation]

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};

const onImageLoad = () => {
  if (picRef.value) {
    const width = picRef.value.getBoundingClientRect().width
    picHeight.value = Math.round(width * 0.56)
  }
}
</script>
<style lang="scss" scoped>
.swiper-prev-btn {
  position: absolute;
  top: 50%;
  left: -88px;
  transform: translateY(-50%);
}
.swiper-next-btn {
  position: absolute;
  top: 50%;
  right: -88px;
  transform: translateY(-50%);
}
</style>
<template>
  <div class="position-relative w-100">
    <button type="button" class="btn swiper-prev-btn" id="prev">
      <SvgIcon name="chevron_left" :size="44" color="#452B14" />
    </button>
    <swiper
      :modules="modules"
      class="w-100"
      :slides-per-view="3"
      :space-between="16"
      :navigation="{ nextEl: '#search_next', prevEl: '#search_prev' }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="w-100 bg-white home-recommend-card">
          <div class="w-100 pb-3 home-recommend-card-top">
            <div class="home-recommend-card-img mb-3" :style="{ 'height': `${picHeight}px` }">
              <img ref="recommend-pic-1" src="../../../assets/images/home/recommend_babysitter_1.png" alt="" @load="onImageLoad">
            </div>
            <h5 class="home-recommend-card-name text-center">Apple</h5>
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
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
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
                      <p class="home-recommend-card-text">寵物寄宿</p>
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
                      <p class="home-recommend-card-text">NT $250/次</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-100 bg-white home-recommend-card">
          <div class="w-100 pb-3 home-recommend-card-top">
            <div class="home-recommend-card-img mb-3" :style="{ 'height': `${picHeight}px` }">
              <img ref="recommend-pic-1" src="../../../assets/images/home/recommend_babysitter_1.png" alt="" @load="onImageLoad">
            </div>
            <h5 class="home-recommend-card-name text-center">Apple</h5>
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
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
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
                      <p class="home-recommend-card-text">寵物寄宿</p>
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
                      <p class="home-recommend-card-text">NT $250/次</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="w-100 bg-white home-recommend-card">
          <div class="w-100 pb-3 home-recommend-card-top">
            <div class="home-recommend-card-img mb-3" :style="{ 'height': `${picHeight}px` }">
              <img ref="recommend-pic-1" src="../../../assets/images/home/recommend_babysitter_1.png" alt="" @load="onImageLoad">
            </div>
            <h5 class="home-recommend-card-name text-center">Apple</h5>
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
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
                        </div>
                        <div class="home-recommend-card-icon">
                          <SvgIcon name="star" :size="28" color="#FFCF75" />
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
                      <p class="home-recommend-card-text">寵物寄宿</p>
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
                      <p class="home-recommend-card-text">NT $250/次</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <button type="button" class="btn swiper-next-btn" id="next">
      <SvgIcon name="chevron_right" :size="44" color="#452B14" />
    </button>
  </div>
</template>
