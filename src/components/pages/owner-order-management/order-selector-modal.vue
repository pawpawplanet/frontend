<template>
  <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center" :id="modalId + 'Label'">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div class="modal-body custom-modal-body">
          <div class='order-card-wrapper' ref="orderCardWrapperRef">
            <order-card 
              v-for="order in orders"
              class="order-card-fixed-width"
              :key="order.id" 
              :orderData="order"
              :orderStatusActions="actions"
              :isModalContext=true
              @click-btn="payOrder" />
          </div>  
        </div>

        <div class="modal-footer d-flex justify-content-between align-items-center">
          <button type="button" class="btn btn-scroll" @click="scroll('left')">
            <span>&lt;</span> </button>

          <button type="button" class="btn btn-scroll" @click="scroll('right')">
            <span>&gt;</span> </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue';
import Modal from 'bootstrap/js/dist/modal';
import OrderCard from '@/components/pages/owner-order-management/order-card.vue';

const emit = defineEmits(['hidden', 'selected']);

// defineExpose 將 hideModal 方法暴露給父元件
// 將 Modal 隱藏的邏輯封裝成一個方法
const hideModal = () => {
  if (bsModal) {
    if (modalRef.value && modalRef.value.contains(document.activeElement)) {
      document.activeElement.blur(); // 讓當前獲得焦點的元素失去焦點
      // 或者，更推薦的方式是將焦點轉移到 body 元素 (一個安全的回歸點)
      // document.body.focus();
      console.log('Modal: 已手動將焦點移出 Modal 內部。');
    }
    bsModal.hide(); // 呼叫 Bootstrap Modal 實例的 hide() 方法
  }
};

defineExpose({
  hideModal
});

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  modalId: { // Modal 的 HTML ID，確保每個實例都有唯一的 ID
    type: String,
    required: true, // 要求父元件必須傳入這個 ID
  },
  orders: {
    type: Array,
    required: true
  }
});

const modalRef = ref(null); // 模板引用：用於在 JS 中獲取 Modal 的 DOM 元素
let bsModal = null; // 儲存 Bootstrap Modal 實例的變數
const orderCardWrapperRef = ref(null);
const scrollAmount = 584;

const title = computed(() => {
  const count = props.orders?.length || 0;
  const date = props.orders?.[0]?.order.service_date || ''
  return `您在 ${ date } 有 ${ count } 項待付款的預約，請從清單中選擇要付款的預約，其他預約會自動取消`
});

const actions = computed(() => { 
  return {
    rightBtn : { caption: '付款', action: 'pay'}
  };
});

// 使用 watch 監聽 props.show 的變化來控制 Modal 顯示/隱藏
watch(() => props.show, (newVal) => {
  if (bsModal) { // 確保 Bootstrap Modal 實例已經被初始化
    if (newVal) {
      bsModal.show();
    } else {
      hideModal()
      // bsModal.hide();
    }
  }
});

// 組件掛載後（首次渲染到 DOM 後），初始化 Bootstrap Modal 實例
onMounted(() => {
  if (modalRef.value) {
    bsModal = new Modal(modalRef.value); // 創建 Bootstrap Modal 實例

    // 監聽 Bootstrap Modal 的 'hidden.bs.modal' 事件
    // 當 Modal 完全隱藏後，發出 'hidden' 事件給父元件
    modalRef.value.addEventListener('hidden.bs.modal', () => {
      emit('hidden');
    });

    // 如果組件在初始化時 props.show 就已經是 true，則立即顯示 Modal
    if (props.show) {
      bsModal.show();
    }
  }
});

// 組件卸載前（從 DOM 移除前），銷毀 Bootstrap Modal 實例
onUnmounted(() => {
  if (bsModal) {
    bsModal.dispose();
  }
});

// 滾動方法
const scroll = (direction) => {
  if (orderCardWrapperRef.value) {
    
    if (direction === 'left') {
      orderCardWrapperRef.value.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      orderCardWrapperRef.value.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
};

async function payOrder(order, action)  {
    console.log('hello, action:', action)
    emit('selected', order)
}
</script>

<style scoped>
/* order-card 的外部 Flex 容器，確保多個卡片水平排列 */
.order-card-wrapper {
  display: flex;
  flex-direction: row;
  gap: 24px; /* 卡片之間的間距 */
  padding-bottom: 10px; /* 避免滾動條遮擋 */
  flex-shrink: 0;
  max-width: 100%; /* 不超過其父容器的可用寬度 */
  padding: 12px 12px; /* nav-pills 與白色背景邊緣之間的內邊距 */

  /* 確保水平滾動條和行為 */
  overflow-x: auto; /* 當內容溢出時顯示水平滾動條 */
  overflow-y: hidden; /* 確保不顯示垂直滾動條 */
  scroll-behavior: smooth; /* 關鍵：讓滾動動畫平滑 */
  scrollbar-width: none; /* 隱藏 Firefox 滾動條 */
  flex-wrap: nowrap; /* 確保卡片不會換行 */
}

/* 讓 order-card 保持固定寬度 */
.order-card-fixed-width {
  flex-shrink: 0; /* 關鍵：防止卡片在空間不足時縮小 */
  flex-grow: 0;   /* 關鍵：防止卡片在有額外空間時放大 */
  max-width: 100%;
  scroll-snap-align: start; /* (可選) 滾動吸附到每張卡片起始點 */
}


/* 讓整個 Modal 內容區有最大高度，並允許內部滾動 */
.modal-content {
  /* 設定 Modal 的最大高度，例如視窗高度的 85% */
  max-height: 85vh; /* vh 是視窗高度的百分比 */
  display: flex;
  flex-direction: column; /* 讓 header, body, footer 垂直排列 */
}

/* modal-body 滾動設定 (保持不變) */
.custom-modal-body {
  padding: 1rem;
  flex-grow: 1;
  overflow-y: auto;
}

/* 滾動按鈕樣式 */
.btn-scroll {
  background-color: transparent; /* 背景透明 */
  border: none; /* 無邊框 */
  color: #B6B6B6; /* 將這裡改為您想要的顏色，例如黑色 */

  padding: 0; /* 移除內邊距 */
  width: 44px; /* 設定圓形寬高 */
  height: 44px;
  border-radius: 50%; /* 關鍵：變成圓形 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem; /* 圖示大小 */
  cursor: pointer;
  transition: all 0.2s ease; /* 過渡效果 */
  outline: none; /* 移除焦點輪廓，但注意無障礙性 */
}

</style>