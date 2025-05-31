<template>
  <div class="pet-service">
    <!-- 加載狀態 -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- 主要內容 -->
    <div v-else class="service-card d-flex justify-content-center">
      <div class="service-content">
        <!-- 頭部信息區域 -->
        <div class="header-section">
          <div class="row align-items-center">
            <div class="freelancer-info d-flex align-items-center">
              <img 
                :src="serviceProvider.avatar" 
                :alt="serviceProvider.name" 
                class="freelancer-avatar"
              >
              <div class="freelancer-details">
                <h2 class="freelancer-name">{{ serviceProvider.name }} <span>/ Eric</span></h2>
                <div class="rating-section">
                  <div class="stars">
                    <div class="row gx-1 align-items-center">
                      <SvgIcon  v-for="star in 5" :key="star" name="star" :color="star <= serviceProvider.rating ? '#FFCF75' : '#FFFFFF'" />
                    </div>
                  </div>
                  <span class="review-count text-black-700">({{ serviceProvider.reviewCount }}則評價)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 自我介紹 -->
        <div class="section">
          <div class="section-title text-primary-dark-second fw-bold">
            自我介紹
          </div>
          <p class="section-content text-black">{{ serviceProvider.introduction }}</p>
        </div>

        <!-- 服務圖片輪播 -->
        <div class="section">
          <div class="image-carousel">
            <div class="carousel-container" ref="carouselContainer">
              <div 
                class="carousel-track" 
              >
                <div 
                  class="carousel-slide" 
                  v-for="(image, index) in serviceProvider.images" 
                  :key="index"
                >
                  <img :src="image" :alt="`服務圖片 ${index + 1}`" class="carousel-image">
                </div>
              </div>
              
              <!-- 導航按鈕 -->
              <button class="carousel-btn prev-btn" @click="previousImage" v-if="serviceProvider.images.length > 1">
                <i class="bi bi-chevron-left"></i>
              </button>
              <button class="carousel-btn next-btn" @click="nextImage" v-if="serviceProvider.images.length > 1">
                <i class="bi bi-chevron-right"></i>
              </button>
              
            </div>
          </div>
        </div>

        <!-- 服務介紹 -->
        <div class="section info-section">
          <div class="info-title text-primary-dark-second fw-bold">
            <SvgIcon name="paw_group" color="#a77d56" />服務介紹
          </div>
          <div class="info-content text-primary-dark-second">{{ serviceProvider.introduction }}</div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="rounded-pill bg-primary d-flex justify-content-center align-items-center info-badge">
                <SvgIcon name="datepicker" color="#452B14" />
                <span class="fw-bold text-black">
                  服務時間
                </span>
              </div>
              <div class="section-content fw-bold text-black-800">
                日、一、二、三、四、五、六
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="rounded-pill bg-primary d-flex justify-content-center align-items-center info-badge">
                <SvgIcon name="map" color="#452B14" />
                <span class="fw-bold text-black">
                  服務地區
                </span>
              </div>
              <div class="section-content fw-bold text-black-800">
                新北市 板橋區
              </div>
            </div>
          </div>
        </div>

        <!-- 基本資訊 -->
        <div class="section pet-info-section">
          <div class="section-title text-primary-dark-second fw-bold">
            服務寵物
          </div>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label fw-bold">類型</span>
              <span class="info-value fw-bold text-black-800">犬、貓</span>
            </div>
            <div class="info-item">
              <span class="info-label fw-bold">體型</span>
              <span class="info-value fw-bold text-black-800">小型 - 10公斤以下</span>
            </div>
            <div class="info-item">
              <span class="info-label fw-bold">年齡</span>
              <span class="info-value fw-bold text-black-800">幼年～一歲以下</span>
            </div>
            <div class="info-item">
              <span class="info-label fw-bold">性別</span>
              <span class="info-value fw-bold text-black-800">母</span>
            </div>
          </div>
        </div>
        <div class="section service-info-section">
          <div class="section-title  text-primary-dark-second fw-bold">
            我提供的服務
          </div>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label fw-bold">每天尿尿及便便次數</span>
              <span class="info-value fw-bold text-black-800">2次</span>
            </div>
            <div class="info-item">
              <span class="info-label fw-bold">每天散步次數</span>
              <span class="info-value fw-bold text-black-800">2次</span>
            </div>
            <div class="info-item">
              <span class="info-label fw-bold">養護環境</span>
              <span class="info-value fw-bold text-black-800">公寓</span>
            </div>
            <div class="info-item">
              <span class="info-label fw-bold">區域面積坪數</span>
              <span class="info-value fw-bold text-black-800">10坪</span>
            </div>
          </div>
        </div>

        <!-- 評價區域 -->
        <div class="review-section">
          <div class="review-title text-primary-dark-second fw-bold d-flex align-items-center">
            評論 <span class="text-black-700">/{{ reviews.length }}則評價</span>
          </div>
          <div class="review-container">
            <div v-for="review in reviews" :key="review.id" class="review-card">
              <div class="review-header">
                <img :src="review.avatar" :alt="review.name" class="review-avatar">
                <div class="review-info">
                  <div class="reviewer-name fw-bold text-primary-dark-second">{{ review.name }}</div>
                  <div class="stars">
                    <div class="row gx-1 align-items-center">
                      <SvgIcon  v-for="star in 5" :key="star" name="star" :color="star <= serviceProvider.rating ? '#FFCF75' : '#FFFFFF'" />
                    </div>
                  </div>
                </div>
                <span class="review-date text-black-700">{{ review.date }}</span>
              </div>
              <div class="review-comment text-black">{{ review.comment }}</div>
            </div>
          </div>
          <!-- 分頁器-->
          <div class="pagination d-flex justify-content-between align-items-center">
            <!-- Prev -->
            <div class="arrow arrow-left">
              <SvgIcon name="chevron_left" color="#B6B6B6" />
            </div>

            <!-- 分頁列表 -->
            <div class="pages d-flex">
              <div 
                v-for="page in 5" 
                :key="page" 
                class="page  fw-bold d-flex justify-content-center align-items-center" 
              >
              {{ page }}
              </div>
            </div>

            <!-- Next -->
            <div class="arrow arrow-right">
              <SvgIcon name="chevron_right" color="#B6B6B6" />
            </div>
          </div>
        </div>
      </div>
      <!-- 💡 Fixed Booking 區塊 -->
      <div class="booking-fixed">
        <div class="booking-box">
          <div class="booking-title text-primary-dark-second text-center fw-bold">服務</div>
          <div class="price-info d-flex justify-content-between">
            <div class="service-type text-black-900">
              <SvgIcon name="home_care" color="'#FFFFFF'" />
              到府服務
            </div>
            <div class="price text-primary-dark-second fw-bold">NT ${{ serviceProvider.price }}/次</div>
          </div>
          <button class="btn btn-book w-100 mt-3" @click="bookService" :disabled="bookingLoading">
            <span v-if="bookingLoading" class="spinner-border spinner-border-sm me-2"></span>
            我要預約
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 響應式數據
const serviceProvider = ref({})
const reviews = ref([])
const loading = ref(true)
const bookingLoading = ref(false)

// 獲取服務提供者資訊
const fetchServiceProvider = async () => {
  try {
    loading.value = true
    
    // 模擬數據
    serviceProvider.value = {
      id: 1,
      name: "老田的狗阿姨",
      rating: 4,
      reviewCount: 12,
      price: 800,
      avatar: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop",
      introduction: "我是一個熱愛動物的飼養者，在家照顧毛孩子們已經有五年多的經驗，非常喜歡與各種可愛的毛孩們互動，我有一隻12歲的柴犬與3隻貓咪，希望能為每個寶貝帶來溫暖安全的照護體驗，也歡迎大家多聯繫互動，讓我們一起成為好朋友。",
      serviceDescription: "30年的寵物照顧經驗，對於狗狗行為了解7年經驗！【基礎照顧服務】【狗狗行為訓練】【服務區域臺中市、清水鎮、本市】【服務預約】請透過地圖或手機地點選擇，隨時可以下照顧您的狗狗需求！",
      serviceTags: ["基礎寵物照顧", "狗狗行為訓練", "貓咪照護", "寵物美容", "寵物陪玩"],
      businessHours: "週一～週三、週五～週日",
      notice: "請提前一天預約，確保服務品質",
      gender: "女",
      age: "30～49歲",
      bodyType: "瘦小～一般",
      living: "透天",
      pets: [
        { type: "狗", count: 2 },
        { type: "貓", count: 3 },
        { type: "兔子", count: 1 },
        { type: "鳥類", count: 2 }
      ],
      images: [
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=250&fit=crop"
      ]
    }
  } catch (error) {
    console.error('獲取服務提供者資訊失敗:', error)
  } finally {
    loading.value = false
  }
}

// 獲取評價資訊
const fetchReviews = async () => {
  try {
    reviews.value = [
      {
        id: 1,
        name: "YuFang",
        rating: 5,
        date: "2月1日",
        comment: "第6次預約小莫樓的服務，真的是心中最理想的保姆！對待寵物細心且專業。",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
      },
      {
        id: 2,
        name: "MinJun",
        rating: 5,
        date: "1月28日",
        comment: "非常專業的服務，我的狗狗很喜歡她！下次還會再預約。",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      }
    ]
  } catch (error) {
    console.error('獲取評價資訊失敗:', error)
  }
}

// 預約服務
const bookService = async () => {
  try {
    bookingLoading.value = true
    // 模擬預約流程
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('預約成功！我們會盡快與您聯繫。')
  } catch (error) {
    console.error('預約失敗:', error)
    alert('預約失敗，請稍後再試')
  } finally {
    bookingLoading.value = false
  }
}

// 初始化
onMounted(async () => {
  await Promise.all([
    fetchServiceProvider(),
    fetchReviews()
  ])
})
</script>

<style lang="scss" scoped>
.pet-service {
  min-height: 100vh;
  padding: 20px 0;
}

// 我要預約區域
.booking-fixed {
  position: sticky;
  right: 0;
  top: 104px;
  width: 416px;
  height: 100%;

  .booking-title {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .booking-box {
    padding: 20px;
    border-radius: 20px;
    background-color: #ffffff;
    .service-type {
      font-size: 20px;
      svg {
        width: 28px;
        height: 28px;
      }
    }

    .price {
      font-size: 20px;
    }

    .btn-book {
      background: #ECB88A;
      color: #452B14;
      font-size: 20px;
      border: 2px solid #ECB88A;
      border-radius: 100px;
      padding: 16px 24px;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    .btn-book:hover:not(:disabled) {
      transform: translateY(-2px);
    }
  }
}

// 服務圖片
.image-carousel {
  margin: 60px 0 80px;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.carousel-track {
  display: flex;
  height: 100%;
}

.carousel-slide {
  width: calc(33.33% - 16px);
  height: 100%;
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }
}

.carousel-image {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

//主要內容
.service-card {
  position: relative;
  padding: 30px 0;
}

.service-content {
  width: calc(100% - 416px);
  margin-right: 24px;
}

.header-section {
  margin-bottom: 40px;
  // 評論星星樣式
  .stars svg {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  .rating-section {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  .review-count {
    font-size: 16px;
  }
}

.freelancer-avatar {
  width: 196px;
  height: 196px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #A87D57;
  margin-right: 24px;
}

.freelancer-name {
  font-size: 24px;
  font-weight: 700;
  color: #452B14;
  margin-bottom: 20px;

  span {
    font-size: 20px;
    color: #A87D57;
    margin-left: 16px;
  }
}

.section {
  margin-bottom: 12px;
  
  .section-title {
    position: relative;
    font-size: 20px;
    padding-left: 12px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 4px;
      height: 20px;
      border-radius: 100px;
      background-color: #A87D57;
    }
  }

  .section-content {
    max-width: 506px;
    font-size: 16px;
  }
}

.info-section {
  margin-bottom: 84px;
  .info-title {
    font-size: 24px;
    padding-bottom: 12px;
    margin-bottom: 20px;
    border-bottom: 2px solid #A87D57;
    svg {
      width: 32px;
      height: 30px;
      margin-right: 12px;
    }
  }
  .info-content  {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 28px;
  }
  .info-badge {
    width: 113px;
    height: 32px;
    font-size: 16px;
    margin-bottom: 12px;
    svg {
      width: 24px;
      height: 24px;
      margin-right: 4px; 
    }
  }
}

.info-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-label {
  width: fit-content;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 100px;
  background-color: #A87D57;
  font-size: 16px;
}

.service-info-section {
  margin: 100px 0 88px;
}

//評論
.review-section {
  padding: 16px;
  border-radius: 20px;
  background-color: rgba(#ffffff, .7);

  .review-title {
    font-size: 24px;
    padding-bottom: 12px;
    margin-bottom: 28px;
    border-bottom: 2px solid #A87D57;
    span {
      font-size: 16px;
      margin-left: 12px;
    }
  }

  .review-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .review-header {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  .review-avatar {
    width: 86px;
    height: 86px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12px;
  }

  .review-info {
    flex: 1;
  }

  .reviewer-name {
    margin-bottom: 12px;
  }

  // 評論星星樣式
  .stars svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  .pagination {
    margin-top: 40px;

    .page {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      font-size: 20px;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
      &.active {
        background-color: #ECB88A;
      }
    }
    .arrow {
      svg {
        width: 44px;
        height: 44px;
      }
    }
  }
}

@media (max-width: 768px) {
  // 我要預約區域
  .booking-fixed {
    position: fixed;
    right: 0;
    left: 0;
    top: auto;
    bottom: 0;
    width: 100%;
    height: auto;

    .booking-title {
      font-size: 20px;
      margin-bottom: 16px;
    }

    .booking-box {
      padding: 12px;
      border-radius: 20px 20px 0 0;
      box-shadow: 0 0 8px 0 rgba(#000000, .15);
      .service-type {
        font-size: 16px;
        svg {
          width: 24px;
          height: 24px;
        }
      }

      .price {
        font-size: 16px;
      }

      .btn-book {
        background: #ECB88A;
        color: #452B14;
        font-size: 20px;
        border: 2px solid #ECB88A;
        border-radius: 100px;
        padding: 8px 24px;
        font-weight: bold;
        transition: all 0.3s ease;
      }
    }
  }

  // 服務圖片
  .image-carousel {
    margin: 20px 0 32px;
  }

  .carousel-container {
    height: 160px;
  }

  .carousel-slide {
    width: calc(33.33% - 8px);
    margin-right: 12px;
  }

  //主要內容
  .service-card {
    margin: 0;
    padding: 0;
  }

  .service-content {
    width: 100%;
    margin-right: 0;
  }

  .header-section {
    // 評論星星樣式
    .stars svg {
      width: 16px;
      height: 16px;
    }

    .rating-section {
      align-items: center;
    }

    .review-count {
      font-size: 12px;
    }
  }
  
  .freelancer-avatar {
    width: 100px;
    height: 100px;
    border: 2px solid #A87D57;
  }
  
  .freelancer-name {
    font-size: 20px;
    margin-bottom: 4px;

    span {
      margin-left: 8px;
    }
  }

  .section {
    .section-title {
      font-size: 16px;
      &:before {
        height: 16px;
      }
    }

    .section-content {
      max-width: 100%;
    }
  }

  .info-section {
    margin-bottom: 24px;
    .info-title {
      font-size: 16px;
      padding-bottom: 8px;
      margin-bottom: 12px;
      border-bottom: 1px solid #A87D57;
      svg {
        width: 24px;
        height: 22px;
      }
    }
    .info-content  {
      margin-bottom: 24px;
    }
    .info-badge {
      width: 93px;
      height: 29px;
      font-size: 14px;
      margin-bottom: 8px;
      svg {
       width: 20px;
       height: 20px;
      }
    }
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .info-item {
    gap: 8px;
  }

  .info-label {
    padding: 4px 8px;
    border-radius: 100px;
    font-size: 14px;
  }

  .service-info-section {
    margin: 40px 0 44px;
  }
  //評論
  .review-section {
    padding: 12px;
    background-color: #F9EADC;
    border: 1px solid #A87D57;
    .review-title {
      font-size: 20px;
      padding-bottom: 8px;
      margin-bottom: 24px;
      border-bottom: 1px solid #A87D57;
      span {
        font-size: 14px;
      }
    }
    .review-container {
      gap: 28px;
    }

    .review-header {
      margin-bottom: 12px;
    }

    .review-avatar {
      width: 68px;
      height: 68px;
    }

    .reviewer-name {
      margin-bottom: 8px;
    }

    // 評論星星樣式
    .stars svg {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }

    .review-date {
      font-size: 14px;
    }
    .pagination {
      margin-top: 28px;

      .page {
        width: 32px;
        height: 32px;
        font-size: 16px;
      }
      .arrow {
        svg {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>