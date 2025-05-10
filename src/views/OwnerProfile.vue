<script setup>
  import Modal from '@/components/modal/owner-modal.vue'
  import { ref , onMounted } from 'vue'
  import { PatchOwnerProfile, GetOwnerProfile } from '@/plugins/api/users/users.js';
  const loading = ref(true);
  
  const thisModal = ref();
  const owner = ref({
    // name: '王志明',
    // location: '台北市信義區',
    // phone: '0988576463',
    // email: 'love_cat0908@gmaile',
    // avatar: 'https://via.placeholder.com/250', // 替換為實際照片 URL
    // description: '嗨嗨!我是Amy,家有一隻傲嬌貓主子,喜歡分享貓咪日常,和大家一起療癒放鬆日'
  })
  
  const editProfile = () => {
    // alert('進入編輯模式')
    showModal();
  }
  
  const addPet = () => {
    alert('跳轉新增毛小孩頁面')
  }

  const submitOwner = async (updatedOwner) => {
    try {
      console.log("送出資料：", updatedOwner)
      const response = await PatchOwnerProfile(updatedOwner);
      console.log('送出成功:', response.data);
      alert('更新成功！');
      //thisModal.value.p_hide(); // 關閉 Modal
      owner.value = updatedOwner; // 更新畫面上的 owner 資料
    } catch (error) {
      console.error('送出失敗:', error);
      alert('更新失敗，請稍後再試。');
    }
  }


  onMounted(async () => {
    try {
      const response = await GetOwnerProfile();
      owner.value = response.data.data.user; 
    } catch (err) {
      console.error('取得個人資料失敗:', err);
      err.value = '無法取得個人資料，請稍後再試。';
    } finally {
      loading.value = false;
    }
  });


  function showModal() {
    console.log("Modal打開");
    thisModal.value.p_show()
  }
</script>
<template>
  <main>
    <div class="w-100 h-25 bg-secondary-tint py-1-25">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <!-- 左側 Logo -->
          <RouterLink to="/">
            <img src="@/assets/images/logo/logo.png" alt="">
          </RouterLink>

          <!-- 右側 使用者選單 -->
          <div class="d-flex align-items-center">
            <span class="me-2">飼主及寵物個人中心</span>
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle d-flex align-items-center"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle fs-4 me-2"></i>
                {{ owner.name }}
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><a class="dropdown-item" href="#">個人資料</a></li>
                <li><a class="dropdown-item" href="#">登出</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <h2 class="text-center mb-4">飼主及毛小孩個人中心</h2>
      <div class="card mx-auto p-4" style="max-width: 700px; border-radius: 20px;">
        <div class="d-flex flex-column flex-md-row">
          <img :src="owner.avatar" alt="飼主照片" class="rounded img-fluid me-md-4 mb-3 mb-md-0" style="max-width: 250px; height: auto;" />
          <div class="flex-fill">
            <div class="text-end">
              <button class="btn btn-outline-secondary btn-sm" @click="editProfile">
                <i class="bi bi-pencil-square"></i>
              </button>
            </div>
            <p><strong>飼主名稱:</strong>{{ owner.name }}</p>
            <p><strong>所在縣市:</strong>{{ owner.city }}</p>
            <p><strong>所在地區:</strong>{{ owner.area }}</p>
            <p><strong>電話:</strong>{{ owner.phone }}</p>
            <p><strong>Email:</strong>{{ owner.email }}</p>
            <p><strong>自我介紹:</strong>{{ owner.description }}</p>
          </div>
        </div>
      </div>
  
      <div class="text-center mt-4">
        <button class="btn btn-success rounded-pill px-4 py-2" @click="addPet">
          <i class="bi bi-plus-circle me-2"></i>新增毛小孩資訊
        </button>
      </div>
    </div>

    <Modal title="modal1" ref="thisModal" @submit-owner="submitOwner">
      <template #body>編輯 個人資訊</template>
    </Modal>
  </main>

  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
  />
</template>
<style scoped>
  .card {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
</style>
