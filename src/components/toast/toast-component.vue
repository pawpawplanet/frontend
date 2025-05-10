<template>
  <transition-group name="toast" tag="div" class="toast-container">
    <div v-for="(t, key) in toasts" :key="key" class="toast-block">
      <div class="toast-status">
        <img v-if="t.status === 'success'" src="@/assets/images/toast/success.png" alt="">
        <img v-else-if="t.status === 'warning'" src="@/assets/images/toast/warning.png" alt="">
        <img v-else src="@/assets/images/toast/error.png" alt="">
      </div>
      <div class="toast-text">
        <p>
          {{ t.message }}
        </p>
      </div>
  </div>
  </transition-group>
</template>

<script setup>
import { ref, defineExpose } from 'vue'

const toasts = ref([])
let id = 0;

function showToast(message, status, duration = 3000) {
  const toast = { id: id++, message, status }
  toasts.value.push(toast)

  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== toast.id)
  }, duration)
}

defineExpose({ showToast })
</script>

<style lang="scss" scoped>
.toast-container {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 20px);
  min-width: 234px;
  max-width: 350px;
  z-index: 10000;
}
.toast-block {
  width: 100%;
  display: flex;
  align-items: center;
  background: #2e2e2e;
  padding: 12px 24px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
.toast-status {
  width: 33px;
  height: 33px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.toast-text {
  width: calc(100% - 33px);
  padding: 0 8px;
  font-size: 18px;
  color: #ffffff;
  p {
    margin-bottom: 0;
  }
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
</style>
