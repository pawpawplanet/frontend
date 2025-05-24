<template>
  <div class="container py-4">
    <!-- Header -->
    <div class="d-flex align-items-center mb-3">
      <img :src="profile.avatar" alt="avatar" class="rounded-circle me-3" width="64" height="64" />
      <div>
        <h5 class="mb-0">{{ profile.title }} / {{ profile.name }}</h5>
        <div>
          <span v-for="n in 5" :key="n" class="text-warning">★</span>
          <span class="text-muted">（{{ profile.review_count }} 評價）</span>
        </div>
      </div>
    </div>

    <!-- Introduction -->
    <div class="mb-4">
      <h6>自我介紹</h6>
      <p class="mb-0">{{ profile.introduction }}</p>
    </div>

    <!-- Image Carousel -->
      <div id="carouselImages" class="carousel slide mb-4" data-bs-ride="carousel">
      <!-- Bullet indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(img, index) in profile.images"
          :key="'bullet-' + index"
          type="button"
          data-bs-target="#carouselImages"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : undefined"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner rounded">
        <div
          v-for="(img, index) in profile.images"
          :key="'slide-' + index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img :src="img" class="d-block w-100" style="height: 300px; object-fit: cover" />
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselImages" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselImages" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Service Info -->
    <div class="mb-4">
      <h6>服務介紹</h6>
      <p>{{ profile.service_description }}</p>
      <p class="small text-muted">【服務時間】{{ profile.service_time }}</p>
      <p class="small text-muted">【服務地點】{{ profile.service_location }}</p>
    </div>

    <!-- Pet Types -->
    <div class="mb-3">
      <h6>服務對象</h6>
      <span class="badge bg-secondary me-2" v-for="type in profile.pet_types" :key="type">{{ type }}</span>
    </div>

    <!-- Extra Options -->
    <div class="mb-3">
      <h6>額外條件</h6>
      <span class="badge bg-light border me-2" v-for="opt in profile.extra_conditions" :key="opt">{{ opt }}</span>
    </div>

    <!-- Experience -->
    <div class="mb-4">
      <h6>保母經驗</h6>
      <p class="mb-1">案件數：{{ profile.case_count }} 筆</p>
      <p class="mb-1">接案年資：{{ profile.experience_years }} 年</p>
    </div>

    <!-- Reviews -->
    <div>
      <h6>評論</h6>
      <div v-for="(review, index) in reviews" :key="index" class="border rounded p-3 mb-2">
        <div class="fw-bold">{{ review.user_name }}</div>
        <div class="text-warning mb-2">★★★★★</div>
        <p class="mb-0">{{ review.comment }}</p>
        <small class="text-muted">{{ review.date }}</small>
      </div>
    </div>

    <!-- Floating Action Button -->
    <div class="position-fixed bottom-0 end-0 m-3">
      <button class="btn btn-primary px-4 py-2">我要預約</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import avatarDefault from '@/assets/images/freelancer-list/freelancer_default.png'
const profile = ref({
  avatar: avatarDefault,
  name: 'Eric',
  title: '老田的到府服務',
  review_count: 0,
  introduction: '我是一位寵物愛好者，也曾飼養過中大型犬<擅長寵物戶外攝影，我有車你有寵物，我們一起為寵物留下完美的身影，養過德牧、台灣土狗',
  images: [avatarDefault,avatarDefault,avatarDefault],
  service_description: '30年的養狗經驗，對於狗狗非常了解喔！【遛狗繫狗鏈，狗狗更安全】【隨時傳照片，讓爸媽更安心】【回家前使用消毒除菌產品，讓狗狗不帶回家】',
  service_time: '日、一、二、三、四、五、六',
  service_location: '新北市 板橋區',
  pet_types: '犬貓',
  extra_conditions: [],
  case_count: 0,
  experience_years: 0
})

const reviews = ref([])

onMounted(async () => {
  // const profileRes = await fetch('/api/freelancer-profile/1d50bab5-6c15-47c9-8e74-864de39d75fd')
  // const profileData = await profileRes.json()
  // profile.value = profileData

  // const reviewRes = await fetch('/api/reviews?freelancer_id=123')
  // const reviewData = await reviewRes.json()
  // reviews.value = reviewData
})
</script>

<style scoped>
.carousel-item img {
  object-fit: cover;
  height: 300px;
}

.carousel-indicators [data-bs-target] {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ECB88A;
}

.carousel-indicators .active {
  width: 24px;
  background: #452B14;
}

</style>
