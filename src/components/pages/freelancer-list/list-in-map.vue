<script setup>
import TabGroup from '@/components/pages/freelancer-list/tab-group.vue'
import SearchFilter from '@/components/pages/freelancer-list/search-filter.vue'
import SortAndNum from '@/components/pages/freelancer-list/sort-and-num.vue'
import { ref, useTemplateRef, onMounted, nextTick } from 'vue'
import FreelancerCard from '@/components/pages/freelancer-list/freelancer-card.vue'
import { GoogleMap } from 'vue3-google-map'

const center = { lat: 25.0980213, lng: 121.4354724 }
const googleMapKey = import.meta.env.VITE_MAP_KEY
const selectValue = ref(1)
const total = ref(0)
const topHeight = useTemplateRef('freelancer-top')
const freelancerOuter = useTemplateRef('freelancer-outer')
const map = useTemplateRef('map')
let outerHeight = ref(null)
// let chooseLocation = ref(null)
let mapCardWidth = ref(null)
let imgHeightInCard = ref(null)
const isExpand = ref(false)
const zoom = ref(12)

const expandMap = () => {
  isExpand.value = !isExpand.value
}

const zoomIn = () => {
  zoom.value += 1
}

const zoomOut = () => {
  zoom.value -= 1
}

onMounted(() => {
  nextTick(() => {
    // 計算列表的高度
    outerHeight.value = freelancerOuter.value.offsetHeight - topHeight.value.offsetHeight - 24
    // 先計算 map 可視區寬度，再計算卡片顯示的寬度
    mapCardWidth.value = map.value.offsetWidth * 0.576
    imgHeightInCard.value = (mapCardWidth.value - 40) * 0.705
  })
})
</script>
<template>
  <div ref="freelancer-outer" class="w-100 border border-4 border-primary freelancer-list-section">
    <div class="h-100 row g-0">
      <div class="col-6" :class="{ 'd-none': isExpand }">
        <div class="w-100 h-100 freelancer-list-search bg-white">
          <div ref="freelancer-top" class="w-100">
            <TabGroup />
            <SearchFilter />
            <SortAndNum :select-value="selectValue" :total="total" />
          </div>
          <div class="w-100 pb-4 freelancer-list-items" :style="{ 'height': `${outerHeight}px` }">
            <div class="row gy-2">
              <div class="col-12 py-2">
                <FreelancerCard />
              </div>
              <div class="col-12 py-2">
                <FreelancerCard />
              </div>
              <div class="col-12 py-2">
                <FreelancerCard />
              </div>
              <div class="col-12 py-2">
                <FreelancerCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6" :class="{ 'col-12': isExpand }">
        <div ref="map" class="w-100 h-100 position-relative">
          <GoogleMap
            :api-key="googleMapKey"
            style="width: 100%; height: 100%"
            :center="center"
            :zoom="zoom"
            :fullscreenControl="false"
            :rotateControl="false"
            :scaleControl="false"
            :streetViewControl="false"
            :mapTypeControl="false"
          >
<!--            <Marker :options="{ position: center }" />-->
          </GoogleMap>
          <div class="freelancer-list-sidebar position-absolute">
            <button
              type="button"
              class="btn freelancer-list-expand bg-white rounded-circle d-flex align-items-center justify-content-center"
              @click="expandMap"
            >
              <SvgIcon name="zoom" color="#452B14" :size="32" />
            </button>
            <div class="py-4">
              <div class="freelancer-list-zoom d-flex flex-column bg-white">
                <button
                  type="button"
                  class="btn freelancer-list-zoom-btn d-flex justify-content-center align-items-center"
                  @click="zoomIn"
                >
                  <SvgIcon name="add" color="#452B14" :size="32" />
                </button>
                <div class="w-100 px-2">
                  <div class="w-100 freelancer-list-divide"></div>
                </div>
                <button
                  type="button"
                  class="btn freelancer-list-zoom-btn d-flex justify-content-center align-items-center"
                  @click="zoomOut"
                >
                  <SvgIcon name="reduce" color="#452B14" :size="32" />
                </button>
              </div>
            </div>
          </div>
<!--          <div class="position-absolute freelancer-list-landmarks">-->
<!--            <div class="position-relative">-->
<!--              <button-->
<!--                type="button"-->
<!--                class="freelancer-list-location choose bg-primary-dark-second rounded-circle d-flex justify-content-center align-items-center"-->
<!--              >-->
<!--                <SvgIcon name="pet_boarding" color="white" :size="54" />-->
<!--              </button>-->
<!--              <RouterLink to="" class="position-absolute text-decoration-none freelancer-list-location-card bg-white" :style="{ 'width': `${mapCardWidth}px` }">-->
<!--                <div-->
<!--                  ref="img-in-card"-->
<!--                  class="position-relative w-100 overflow-hidden freelancer-list-location-card-top"-->
<!--                  :style="{ 'height': `${imgHeightInCard}px` }"-->
<!--                >-->
<!--                  <img class="w-100 h-100 object-fit-cover" src="@/assets/images/freelancer-list/freelancer_default.png" alt="">-->
<!--                  <button type="button" class="btn position-absolute freelancer-list-location-card-btn p-1 bg-white rounded-circle d-flex justify-content-center align-items-center">-->
<!--                    <SvgIcon name="cancel" color="#452B14" :size="44" />-->
<!--                  </button>-->
<!--                  <div class="position-absolute rounded-pill bg-primary d-flex align-items-center freelancer-list-card-badge p-1" style="bottom: 16px; left: 16px">-->
<!--                    <SvgIcon name="map" color="#452B14" />-->
<!--                    <p class="fw-bold text-primary-dark-second">-->
<!--                      新北市 板橋區-->
<!--                    </p>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="w-100 pt-2">-->
<!--                  <div class="w-100">-->
<!--                    <p class="fw-bold text-primary-dark-second freelancer-list-card-name">-->
<!--                      老田的到府服務-->
<!--                    </p>-->
<!--                  </div>-->
<!--                  <div class="w-100 py-2">-->
<!--                    <div class="row gx-1 align-items-center">-->
<!--                      <div class="px-1" style="width: 32px;">-->
<!--                        <SvgIcon name="star" color="#FFCF75" />-->
<!--                      </div>-->
<!--                      <div class="px-1" style="width: 32px;">-->
<!--                        <SvgIcon name="star" color="#FFCF75" />-->
<!--                      </div>-->
<!--                      <div class="px-1" style="width: 32px;">-->
<!--                        <SvgIcon name="star" color="#FFCF75" />-->
<!--                      </div>-->
<!--                      <div class="px-1" style="width: 32px;">-->
<!--                        <SvgIcon name="star" color="#FFCF75" />-->
<!--                      </div>-->
<!--                      <div class="px-1" style="width: 32px;">-->
<!--                        <SvgIcon name="star" color="#FFCF75" />-->
<!--                      </div>-->
<!--                      <div class="col">-->
<!--                        <div class="px-2">-->
<!--                          <p class="freelancer-list-card-comment text-black-700">(2則評論)</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </RouterLink>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
