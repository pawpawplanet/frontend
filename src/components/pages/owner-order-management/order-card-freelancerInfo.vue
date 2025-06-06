<template>
  <div class='freelancer-info'>
    <div class="freelancer-profile">
      <img 
          :src="avatar" 
          alt="Freelancer Avatar" 
          class="freelancer-avatar-large" />

      <div class="freelancer-details">
        <h2 class="freelancer-name">{{ freelancer.name }}</h2>
        <div class="freelancer-phone-location">
          <h2 class="freelancer-phone">{{ freelancer.phone }}</h2>
          <div class="freelancer-location">
            <span class="location-icon-wrapper"><img src="@/assets/images/order/location.png" alt="location" class="location-icon-img"></span>
            <span class="location-text">{{ `${freelancer.city} ${freelancer.area}` }}</span>
          </div>
        </div>
      </div>
      
    </div>
    <div>
      <p class="freelancer-bio">{{ freelancer.description || '尚無介紹' }}</p>
    </div>
  </div>
</template>

<script setup>
import defaultOwnerAvatar from '@/assets/images/order/owner_avatar.png';
import { defineProps, onMounted, computed } from 'vue';

const props = defineProps({
  orderData: {
    type: Object,
    required: true,
  }
});

// computed，template 中，使用一個 ref 或 computed 屬性時，Vue 會自動幫你解包 (unwrap) 它的 .value
const freelancer = computed(() => {
  return props.orderData.freelancer;
});

const avatar = computed(() => {
  return (props.orderData.freelancer?.avatar && props.orderData.freelancer.avatar.length > 0) ?
    props.orderData.freelancer.avatar[0] : defaultOwnerAvatar;
});

onMounted(() => {
  // console.log('freelancer, order data:', props.orderData);
}); 
</script>

<style scoped>
.freelancer-info {
  width: 100%;
  box-sizing: border-box;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding-bottom: 12px; /* 在分隔線前增加一些空間 */
  border-bottom: 1px solid #eee; /* 輕微的分隔線 */
}

.freelancer-profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.freelancer-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.freelancer-bio {
  font-family: 'jf-openhuninn-2.1', 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.02em; /* 2% */
  color: #452b14; /* Primary/Dark-2 */
  margin: 0; /* 移除預設邊距 */
  overflow-wrap: break-word; /* 也是防止長單詞溢出，更現代 */
}

.freelancer-avatar {
  width: 60px; /* 範例大小，根據圖片調整 */
  height: 60px; /* 範例大小 */
  border-radius: 50%;
  object-fit: contain;
  background-color: beige;
}

.freelancer-avatar-large {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #eee;
  background-color: #d0d0d0;
}

.freelancer-name {
  font-family: 'GenSenRounded2 TC', 'Noto Sans TC', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #452b14; 
  margin: 0;
}
.freelancer-phone-location {
  display: flex;
  flex-direction: row; /* 預設在同一行 */
  flex-wrap: wrap; /* 空間不足時允許換行 */
  align-items: center;
  gap: 8px;
}

.freelancer-phone {
  font-family: 'GenSenRounded2 TC', 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #452b14;
  margin: 0;
}

.freelancer-location {
  display: flex;
  align-items: center;
  gap: 2px; /* 圖示與文字之間的間距 */
  font-size: 14px;
  color: #A87D57;
}

.location-icon {
  font-size: 16px; /* 調整圖示大小 */
}

.location-text {
  font-family: 'jf-openhuninn-2.1', 'Noto Sans TC', sans-serif; /* 假設此字體用於一般文字 */
  font-weight: 400;
  font-size: 14px;
  color: #A87D57;
}

.location-icon-wrapper {
  /* 包裹圖片的 span，你可以控制其行為 */
  display: inline-flex; /* 確保它能與文字對齊並提供flex屬性 */
  align-items: center; /* 讓圖片在其內部垂直居中 */
  height: 24px; /* 或根據圖片實際高度調整 */
}

.location-icon-img {
  width: 16px; /* 設定圖片的寬度 */
  height: 16px; /* 設定圖片的高度 */
  object-fit: contain; /* 確保圖片內容完整顯示 */
  vertical-align: middle; /* 讓圖片與文本基線對齊，避免底部空隙 */
}
</style>
