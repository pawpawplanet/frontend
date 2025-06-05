<template>
  <div class="order-card">
    <div class="container">
      <div class="row align-items-stretch gy-4"> 
        
        <!-- col-12 預設的高度就是 auto，由子元素內容決定高度 -->
        <div class="col-12 col-sm-6 d-flex flex-column"> 
          <div class="freelancer-pet-info"> 
            <freelancer-info :orderData="orderData" />
            <pet-info :orderData="orderData" />
          </div>
        </div>

        <div class="col-12 col-sm-6 d-flex flex-column">
          <div class="booking-info"> 
            <booking-info :orderData="orderData" />
          </div>
        </div>

      </div>
    </div>
  </div>  
</template>

<script setup>
import { defineProps } from 'vue';
import FreelancerInfo from '@/components/pages/owner-order-management/order-card-freelancerInfo.vue'
import PetInfo from '@/components/pages/owner-order-management/order-card-petInfo.vue'
import BookingInfo from '@/components/pages/owner-order-management/order-card-bookingInfo.vue'

defineProps({
  orderData: {
    type: Object,
    required: true,
  },
})

</script>

<style scoped>
.order-card {
  width: 100%;
  box-sizing: border-box;

  padding: 24px;
  margin: 0 auto;

  background-color: #fff;
  border-radius: 40px !important;
  border: 1px solid #452B14;

  display: flex;
  flex-direction: column;
  gap: 24px;
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
</style>
