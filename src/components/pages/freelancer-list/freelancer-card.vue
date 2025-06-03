<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const calcRating = (rating, index) => {
  // 計算評分
  if (rating !== 0) {
    if (rating > index - 1) return '#FFCF75'
  }
  return '#CECECE'
}
</script>
<template>
  <RouterLink :to="`/service/${props.item.id}`" class="d-block text-decoration-none w-100 border border-primary freelancer-list-card">
    <div class="row">
      <div class="col-4">
        <div class="w-100 h-100 overflow-hidden">
          <img class="w-100 h-100 object-fit-cover freelancer-list-card-pic" :src="props.item.image" alt="">
        </div>
      </div>
      <div class="col-8">
        <div class="w-100">
          <div class="rounded-pill bg-primary d-flex align-items-center freelancer-list-card-badge p-1">
            <SvgIcon name="map" color="#452B14" />
            <p class="fw-bold text-primary-dark-second">
              {{ `${props.item.freelancer_info.city} ${props.item.freelancer_info.area}` }}
            </p>
          </div>
          <div class="w-100 py-2">
            <div class="w-100">
              <p class="fw-bold text-primary-dark-second freelancer-list-card-name">
                {{ props.item.title }}
              </p>
              <p class="text-black">{{ props.item.description }}</p>
            </div>
            <div class="w-100 py-2">
              <div class="row gx-1 align-items-center">
                <div v-for="(index) in 5" class="px-1" style="width: 32px;" :key="index">
                  <SvgIcon name="star" :color="calcRating(props.item.rating, index)" />
                </div>
                <div class="col">
                  <div class="px-2">
                    <p class="freelancer-list-card-comment text-black-700">
                      {{ `(${props.item.review_count}則評論)` }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-100 d-flex justify-content-end">
              <p class="freelancer-list-card-price fw-bold text-primary-dark-second">
                {{ `${props.item.price_unit} ${props.item.price}/次` }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
