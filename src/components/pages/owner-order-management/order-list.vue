<template>
  <div class="container my-4">
    <!-- tab bar -->
    <div class="tab-bar-container my-4">
      <div class="nav-pills-wrapper">
        <ul class="nav nav-pills" id="order-list-tab" role="tablist">
          <li
            v-for="(tab, index) in tabs"
            :key="index"
            class="nav-item"
            role="presentation"
          >
            <button
              class="nav-link"
              :class="{ active: activeTab === index }"
              @click="activeTab = index"
              :id="`${tab.id}-tab`"
              type="button"
              role="tab"
              :aria-controls="tab.id"
              :aria-selected="activeTab === index"
            >
              {{ tab.label }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = [
  { id: 'pending', label: '等待回覆' },
  { id: 'accepted', label: '預約成功付款' },
  { id: 'paid', label: '即將執行' },
  { id: 'latest-response', label: '最新回應' },
  { id: 'closed', label: '結案訂單' },
]

const activeTab = ref(0)
</script>

<style scoped>
.tab-bar-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto; /* 水平置中自身 */
  box-sizing: border-box; /* 確保 padding 不增加總寬度 */

  display: flex;
  justify-content: center;
}

.nav-pills-wrapper {
  flex-shrink: 0;
  width: fit-content; /* 讓其寬度由內容決定，但最大不超過其父容器 (tag-bar-container) 的可用寬度 */
  max-width: 100%;
  padding: 12px 12px; /* nav-pills 與白色背景邊緣之間的內邊距 */  

  /* 
    當 overflow，內容會從左側開始，justify-content: center 就失去了意義，反而可能導致一些預期之外的行為。
    justify-content: center; 當內容足夠時置中 nav-pills 
    但仍要設定 display: flex 讓 nav-pills 成為 flex items
  */
  display: flex;
  overflow-x: auto; /* 當內容溢出時顯示水平滾動條 */
  overflow-y: hidden;

  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 40px;

  scroll-behavior: smooth;
  cursor: grab; /* 可移除，只是視覺提示可拖曳 */
}

.nav-pills {
  width: max-content; /* 強制根據內容決定寬度 */

  /* 關鍵調整：覆蓋 Bootstrap 預設的負邊距和 padding */
  margin-left:  0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-bottom: 0;/* 移除 Bootstrap 可能帶來的底部 margin */

  display: flex; /* 讓 nav-items 成為 flex item */
  flex-wrap: nowrap; /* 強制所有 nav-item 不換行 */
}

.nav-pills .nav-item {
  flex-shrink: 0; /* 避免 nav-item 縮小，保持其內容所需的寬度 */
  
  /* 如果你的 nav-item 預設還有負邊距，也需要覆蓋 */
  /* margin-left: 0 !important; */
  margin-right: 24px !important;
}

/* 移除最後一個 nav-item 的右邊距，避免最右邊多餘的空間 */
.nav-pills .nav-item:last-child {
  margin-right: 0 !important;
}

/* nav-link (實際的按鈕/連結元素) */
.nav-pills .nav-item .nav-link {
  white-space: nowrap; /* 確保連結內的文字不換行 */
  padding: 12px 16px; /* 調整 pill 內部文字與邊緣的間距 */
  
  border-radius: 30px;
  font-weight: 700; /* 字體粗細 */

  transition: all 0.2s ease; /* 加上平滑動畫效果 */
  outline: none; /* 移除 focus 時的藍框 */
}

/* nav-link 活躍（active）狀態的樣式 */
.nav-pills .nav-item .nav-link.active {
  border: 1px solid #452B14;
  background-color: #A87D57;
  color: #ffffff;
}

.nav-pills .nav-item .nav-link:not(.active) {
  border: 1px solid #B6B6B6;
  color: #452B14;
  background-color: transparent;
  box-shadow: none; /* 移除可能的陰影 */
}

</style>