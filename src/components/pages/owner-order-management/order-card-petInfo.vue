<template>
  <div class='pet-info'>
      <div class="pet-info-basic">
        <span class="pet-category-label">{{ species }}</span>
        <div class="image-wrapper">
          <img 
          :src="avatar" 
          alt="Pet Avatar" />
        </div>
        <p class="fw-bold mb-0 text-center">{{ pet.name }}</p>
      </div>
          
      <div class="pet-info-detail">
        <div class="pet-info-detail-item">
          <div class="pet-info-detail-item-label">體型 | </div>
          <div class="pet-info-detail-item-content">{{ size }}</div>
        </div>
        <div class="pet-info-detail-item">
          <div class="pet-info-detail-item-label">生日 | </div>
          <div class="pet-info-detail-item-content">{{ pet.birthday }}</div>
        </div>
        <div class="pet-info-detail-item">
          <div class="pet-info-detail-item-label">性別 | </div>
          <div class="pet-info-detail-item-content">{{ gender }}</div>
        </div>
        <div class="pet-info-detail-item">
          <div class="pet-info-detail-item-label">個性 | </div>
          <div class="pet-info-detail-item-content">{{ pet.personality_description }}</div>
        </div>
      </div>
  </div>
</template>

<script setup>
import defaultPetAvatar from '@/assets/images/order/owner_avatar.png';
import { defineProps, onMounted, computed } from 'vue';

const PET_SIZE_MAP = {
  0: '小型-10公斤以下',
  1: '中型-10公斤以上，20公斤以下',
  2: '大型- 20公斤以上',
};

const PET_GENDER_MAP = {
  0: '男生',
  1: '女生'
};

const PET_SPECIES_MAP = {
  0: '貓',
  1: '狗'
};


const props = defineProps({
  orderData: {
    type: Object,
    required: true
  }
})

const pet = computed(() => { return props.orderData.pet });
const avatar = computed(() => { return props.orderData.pet?.avatar || defaultPetAvatar; });

const species = computed(() => {
  const speciesValue = pet.value?.species_id;
  return PET_SPECIES_MAP[speciesValue] || '未知的種類';
});

const size = computed(() => {
  const sizeValue = pet.value?.size;
  return PET_SIZE_MAP[sizeValue] || '未知的體型';
});

const gender = computed(() => {
  const genderValue = pet.value?.gender;
  return PET_GENDER_MAP[genderValue] || '未知的性別';
});

onMounted(() => {
  // console.log('pet, order data:', props.orderData);
});
</script>

<style scoped>
.pet-info {
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  margin: 0 auto;
}

.pet-info-basic {
  /* width: 200px; */

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4px; /* 分類標籤與寵物詳細資訊之間的間距 */
}

.pet-category-label {
  padding: 4px 8px;
  border-radius: 50%;

  background-color: #ECB88A;
  color: #452b14;
  
  font-size: 12px;
  font-weight: bold;
  /* align-self: flex-start; 針對單一 item 對齊到彈性容器的起始位置 */
}

.image-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f0f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 防止任何可能溢出 */
}

.image-wrapper img {
  width: 100%;             /* 讓圖片嘗試填滿容器寬度 */
  height: 100%;            /* 讓圖片嘗試填滿容器高度 */
  object-fit: contain;     /* 保持圖片長寬比，適應容器，可能留白 */
  object-position: center; /* 讓圖片在容器中水平垂直居中 */
}

.pet-info-detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  gap: 8px; /* 寵物詳細資訊項目之間的間距 */
}

.pet-info-detail-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
}

.pet-info-detail-item-label {
  width: fit-content;
  flex-shrink: 0;
  white-space: nowrap;

  font-family: 'jf-openhuninn-2.1', 'Noto Sans TC', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.02em;
  margin: 0;
  color: #452B14;
  text-align: start;
}

.pet-info-detail-item-content {
  flex: 1; /* 自動撐滿剩下的寬度 */
  word-break: break-word;
  white-space: pre-wrap;

  font-family: 'jf-openhuninn-2.1', 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.02em;
  margin: 0;
  color: #452B14;
  text-align: start;
}
</style>