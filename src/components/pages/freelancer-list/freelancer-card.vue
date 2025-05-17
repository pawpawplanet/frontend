<script setup>
import SvgIcon from '@/components/svg-icon/svg-icon.vue'
</script>
<template>
  <RouterLink to="" class="d-block text-decoration-none w-100 border border-primary freelancer-list-card">
    <div class="row">
      <div class="col-4">
        <div class="w-100 overflow-hidden">
          <img class="w-100 h-100 object-fit-cover freelancer-list-card-pic" src="@/assets/images/freelancer-list/freelancer_default.png" alt="">
        </div>
      </div>
      <div class="col-8">
        <div class="w-100">
          <div class="rounded-pill bg-primary d-flex align-items-center freelancer-list-card-badge p-1">
            <SvgIcon name="map" color="#452B14" />
            <p class="fw-bold text-primary-dark-second">
              新北市 板橋區
            </p>
          </div>
          <div class="w-100 py-2">
            <div class="w-100">
              <p class="fw-bold text-primary-dark-second freelancer-list-card-name">
                老田的到府服務
              </p>
              <p class="text-black">30年的寵物經驗，對狗狗非常了解喔！</p>
            </div>
            <div class="w-100 py-2">
              <div class="row gx-1 align-items-center">
                <div class="px-1" style="width: 32px;">
                  <SvgIcon name="star" color="#FFCF75" />
                </div>
                <div class="px-1" style="width: 32px;">
                  <SvgIcon name="star" color="#FFCF75" />
                </div>
                <div class="px-1" style="width: 32px;">
                  <SvgIcon name="star" color="#FFCF75" />
                </div>
                <div class="px-1" style="width: 32px;">
                  <SvgIcon name="star" color="#FFCF75" />
                </div>
                <div class="px-1" style="width: 32px;">
                  <SvgIcon name="star" color="#FFCF75" />
                </div>
                <div class="col">
                  <div class="px-2">
                    <p class="freelancer-list-card-comment text-black-700">(2則評論)</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-100 d-flex justify-content-end">
              <p class="freelancer-list-card-price fw-bold text-primary-dark-second">NT$ 1000/次</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
