<script setup>
import { defineProps, computed, onMounted } from 'vue';
import FreelancerInfo from '@/components/pages/owner-order-management/order-card-freelancerInfo.vue'
import PetInfo from '@/components/pages/owner-order-management/order-card-petInfo.vue'
import BookingInfo from '@/components/pages/owner-order-management/order-card-bookingInfo.vue'

const props = defineProps({
  orderData: {
    type: Object,
    required: true,
  },
  orderStatusActions: {
    type: Object,
    required: false
  },
  isModalContext: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['clickBtn']);

const rightBtn = computed(() => { return props.orderStatusActions?.rightBtn });
const leftBtn = computed(() => { return props.orderStatusActions?.leftBtn });
const showStatus = computed(() => { return props.orderStatusActions?.showStatus });
const status = computed(() => { return props.orderStatusActions?.status });

const cardBorderStyle = computed(() => {
  const defaultRadius = '40px';
  const topLeftRadius = showStatus.value ? '0' : defaultRadius;

  return {
    'border-top-left-radius': topLeftRadius,
    'border-top-right-radius': defaultRadius,
    'border-bottom-right-radius': defaultRadius,
    'border-bottom-left-radius': defaultRadius,
  };
});

const colClass = computed(() => { return props.isModalContext ? 'col-12' : 'col-12 col-sm-6' });

const onClick = (btn) => {
  emit('clickBtn', props.orderData, btn.action)
}

onMounted(() => {
  // console.log('------------------- order-card: ', props.orderData)
})
</script>

<template>
  <div class="order-card" 
    :class="{ 'mt-4': showStatus }" :style="cardBorderStyle" >
    <div v-if="showStatus" class="status-tag-basic" :style="{ backgroundColor: status.bgColor }">
    <!-- <div v-if="showStatus" :class="{ 'status-tag': showStatus }"> -->
      <div class="status-tag-wrapper">
        <span class="status-tag-icon-wrapper"><SvgIcon :name="status.icon" color="#fff" class="status-tag-icon-img"/></span>
        
        <span class="status-tag-text">{{ status.caption }}</span>
      </div>
    </div>
    <div class="container">
      <div class="row align-items-stretch gy-4"> 
        <!-- col-12 預設的高度就是 auto，由子元素內容決定高度 -->
        <div :class="colClass" class="d-flex flex-column"> 
          <!-- <p>order id : {{ orderData.order.id }}</p> -->
          <div class="freelancer-pet-info"> 
            <freelancer-info :orderData="orderData" />
            <pet-info :orderData="orderData" />
          </div>
        </div>

        <div :class="colClass" class="d-flex flex-column">
          <div class="booking-info"> 
            <booking-info :orderData="orderData" />
          </div>

          <!-- buttons -->
          <div class="row gx-2 mt-3 justify-content-end">               
            <div class="col-6" v-if="leftBtn">
              <button class="btn btn-basic btn-cancel rounded-pill w-100"
              @click="onClick(leftBtn)">{{ leftBtn.caption }}</button>
            </div>

            <div class="col-6" v-if="rightBtn">
              <button class="btn btn-basic btn-pay rounded-pill w-100"
              @click="onClick(rightBtn)">{{ rightBtn.caption }}</button>
            </div>
          </div>
        </div> 

      </div>
    </div>
  </div>  
</template>

<style scoped>
.order-card {
  width: 100%;
  /* box-sizing: border-box; */

  padding: 24px;
  margin: 0 auto;

  background-color: #fff;
  /* border-radius:  在 template 動態設定 */
  border: 1px solid #452B14;

  display: flex;
  flex-direction: column;
  gap: 24px;

  position: relative;
}

.freelancer-pet-info {
  width: 100%;
  /* box-sizing: border-box;

  padding: 24px; */
  margin: 0 auto;

  flex-grow: 1; /* 左右都要撐滿 */
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.booking-info {
  width: 100%;
  /* box-sizing: border-box;

  padding: 24px; */
  margin: 0 auto;

  flex-grow: 1; /* 左右都要撐滿 */
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.btn-basic {
  height: 42px;
  font-family: 'jf-openhuninn-2.1', 'Noto Sans TC', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.02em;
  margin: 0;
  color: #452B14;
}

.btn-pay {
  background-color: #ECB88A;
}

.btn-cancel {
  color: #452B14; 
  border-color: #452B14;
  background-color: #fff;
}

.status-tag-basic {
  /* background-color: #4CAF50; 綠色調 */
  color: white; /* 白色文字 */
  padding: 4px 8px; /* 調整內邊距 */
  border-radius: 8px 8px 0 0;
  font-size: 12px; /* 調整字體大小 */
  display: inline-block;
  
  /* 絕對定位 */
  position: absolute;
  top: -32px;
  left: -1px;
}

.status-tag-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
}

.status-tag-icon-wrapper {
  display: inline-flex; /* 確保它能與文字對齊並提供flex屬性 */
  align-items: center;
  height: 24px;
}

.status-tag-icon-img {
  width: 12px;
  height: 12px;

  object-fit: contain;
  vertical-align: middle;
}
</style>
