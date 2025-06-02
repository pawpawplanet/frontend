<template>
  <div>
    <order-list />
    <div class="w-100 py-3 d-flex justify-content-between">
      <SvgIcon name="two_paws" :size="56" />
      <SvgIcon name="two_paws" :size="56" style="transform: scaleX(-1)" />
    </div>
  </div>
</template>

<script setup>
import OrderList from '@/components/pages/owner-order-management/order-list.vue'
</script>