<template>
  <div class="booking-info">
    <div class="booking-info-detail">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="fw-bold mb-0">服務名稱 | {{ service.title || '尚無名稱' }}</h5>
        <div class="text-primary-emphasis fw-bold text-decoration-underline cursor-pointer">
        </div>

        <div class="service-type">
            <span class="service-icon-wrapper"><img :src="icon" alt="location" class="service-icon-img"></span>
            <span class="service-text">{{ type }}</span>
        </div>
      </div>

      <div class="service-info">
        <p class="mb-2">
          <span class="fw-bold me-2">時間 |</span> 
          <span class="text-muted small">{{ date }}</span>
        </p>
        <p class="mb-2">
          <span class="fw-bold me-2 ">地點 |</span> 
          <span class="text-muted small">{{ `${ freelancer.city } ${ freelancer.area }` }}</span>
        </p>
        <div class="mb-3 d-flex flex-row gap-2">
          <p class="fw-bold mb-1">備註 |</p>
          <p> {{ note }}</p>
        </div>
      </div>
    </div>
        
    <div class="d-flex justify-content-between align-items-center mt-auto">
      <p class="booking-price-caption fw-bold fs-5 mb-0">總共</p>
      <p class="booking-price-amount fw-bold fs-4  mb-0">NT$ {{ service.price }}</p>
    </div>
  </div>
</template>


<script setup>
import { defineProps, onMounted, computed } from 'vue';

const SERVICE_TYPE_MAP = {
  0: {'type' : '寵物寄宿/日托', 'icon' : 'daycare.png'},
  1: {'type' : '寵物散步', 'icon' : 'daycare.png'},
  2: {'type' : '寵物美容', 'icon' : 'daycare.png'},
  3: {'type' : '到府照顧', 'icon' : 'daycare.png'},
};

const props = defineProps({
  orderData: {
    type: Object,
    required: true,
  },
});

const service = computed(() => { return props.orderData.service });
const freelancer = computed(() => {return props.orderData.freelancer;});

const type = computed(() => {
  const typeValue = service.value.service_type_id;
  return SERVICE_TYPE_MAP[typeValue]?.type || '未知的服務種類';
});

const icon = computed(() => {
  const typeValue = service.value.service_type_id;
  const fileName = SERVICE_TYPE_MAP[typeValue]?.icon || 'daycare.png';

  // 而 @/ 這個別名是一個建置時的功能，所以讓 Vite 在建置時處理這個 (因為 JavasScript 不解析別名)， Vite 建制時會利用特殊機制，動態產生字串，再將其轉換為正確的靜態資源 URL
  try {
    return new URL(`/src/assets/images/order/${fileName}`, import.meta.url).href;
  } catch (e) {
    console.error(`圖片路徑解析失敗: ${fileName}`, e);
    return new URL('/src/assets/images/order/daycare.png', import.meta.url).href;
  }
});

const date = computed(() => { return props.orderData.order.service_date || '沒有日期'});
const note = computed(() => { return props.orderData.note});

onMounted(() => {
  // console.log('booking, order data:', props.orderData);
});
</script>

<style scoped>
.booking-info {
  width: 100%;
  height: 100%;

  padding: 16px;

  background-color: #F9EADC; 
  border-radius: 16px;

  display: flex;
  flex-direction: column;
}

.booking-info-detail {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-bottom: 1px solid #CECECE;
}

.service-type {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.service-info {
  display: flex;
  flex-direction: column;

  gap: 8px;
  flex-grow: 1;
}

.booking-price-caption {
  color: #A87D57;
}

.booking-price-amount {
  color: #452B14;
}

.text-primary-emphasis {
    color: #a37c6b !important;
  }

.service-icon-wrapper {
  display: inline-flex; /* 確保它能與文字對齊並提供flex屬性 */
  align-items: center;
  height: 24px;
}

.service-icon-img {
  width: 16px;
  height: 16px;

  object-fit: contain;
  vertical-align: middle;
}
</style>

